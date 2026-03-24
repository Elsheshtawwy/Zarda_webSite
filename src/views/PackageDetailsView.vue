<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { doc, getDoc, updateDoc, increment } from 'firebase/firestore'
import { db } from '../firebase'
import { usePackagesStore } from '@/stores/packages'
import defaultImage from '/zarda_logo.png'

const route = useRoute()
const packageData = ref(null)
const loading = ref(true)
const error = ref(null)
const currentImage = ref('')
const store = usePackagesStore()

const fetchPackageDetails = async () => {
  try {
    const id = route.params.id
    let pkg = store.byId(id)
    if (!pkg) {
      pkg = await store.fetchById(id)
    }
    const docRef = doc(db, 'packages', id)
    let data
    if (pkg) {
      data = pkg
    } else {
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) data = { id: docSnap.id, ...docSnap.data() }
    }

    if (data) {
      packageData.value = data
      if (packageData.value.images && packageData.value.images.length > 0) {
        currentImage.value = packageData.value.images[0]
      } else {
        currentImage.value = packageData.value.image || defaultImage
      }
      
      updateDoc(docRef, { views: increment(1) }).catch(err => console.log(err))
      
      document.title = `${packageData.value.title} | زردة للسفر`

    } else {
      error.value = "عذراً، هذا العرض غير موجود أو تم حذفه."
    }
  } catch (err) {
    console.error(err)
    error.value = "حدث خطأ في الاتصال بقاعدة البيانات."
  } finally {
    loading.value = false
  }
}

const sharePackage = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: packageData.value.title,
        text: `شوف العرض هذا من زردة للسفر: ${packageData.value.title}`,
        url: window.location.href,
      })
    } catch (err) { console.log('Error sharing', err) }
  } else {
    navigator.clipboard.writeText(window.location.href)
    alert('تم نسخ رابط العرض!')
  }
}

onMounted(() => {
  fetchPackageDetails()
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 pt-24 pb-20">
    
    <div v-if="loading" class="max-w-6xl mx-auto px-4 animate-pulse">
      <div class="h-96 bg-gray-200 rounded-3xl mb-8"></div>
      <div class="space-y-4">
        <div class="h-8 w-1/3 bg-gray-200 rounded"></div>
        <div class="h-4 w-2/3 bg-gray-200 rounded"></div>
        <div class="h-4 w-1/2 bg-gray-200 rounded"></div>
      </div>
    </div>

    <div v-else-if="error" class="text-center py-20 px-4">
      <div class="text-6xl mb-4">😕</div>
      <h2 class="text-2xl font-bold text-gray-800 mb-4">{{ error }}</h2>
      <RouterLink to="/all-packages" class="text-primary hover:underline font-bold">تصفح العروض الأخرى</RouterLink>
    </div>

    <div v-else-if="packageData" class="max-w-6xl mx-auto px-4">
      
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden mb-8 border border-gray-100 relative group">
        <div class="relative h-[400px] md:h-[500px] bg-gray-100">
          <img 
            :src="currentImage || defaultImage" 
            :alt="packageData.title"
            loading="lazy" decoding="async"
            class="w-full h-full object-cover transition duration-700"
            @error="(e) => e.target.src = defaultImage"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          
          <button @click="sharePackage" class="absolute top-4 left-4 bg-white/20 backdrop-blur-md hover:bg-white hover:text-primary text-white p-3 rounded-full transition shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
          </button>

          <div class="absolute bottom-0 right-0 w-full p-6 md:p-10 text-white">
            <div class="flex flex-wrap items-center gap-3 mb-3">
              <span class="bg-primary px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                {{ packageData.category }}
              </span>
              <span class="bg-white/20 px-3 py-1 rounded-full text-xs font-bold backdrop-blur flex items-center gap-1">
                📍 {{ packageData.destination }}
              </span>
            </div>
            <h1 class="text-3xl md:text-5xl font-extrabold leading-tight mb-2">{{ packageData.title }}</h1>
          </div>
        </div>

        <div v-if="packageData.images && packageData.images.length > 1" class="p-4 flex gap-3 overflow-x-auto custom-scrollbar bg-gray-50 border-t border-gray-100">
          <button 
            v-for="(img, index) in packageData.images" 
            :key="index"
            @click="currentImage = img"
            class="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 flex-shrink-0"
            :class="currentImage === img ? 'border-primary ring-2 ring-primary/30 scale-105' : 'border-transparent opacity-70 hover:opacity-100'"
          >
            <img :src="img" loading="lazy" decoding="async" class="w-full h-full object-cover" @error="(e) => e.target.src = defaultImage" />
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div class="lg:col-span-2 space-y-8">
          <div class="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 class="text-2xl font-bold text-gray-800 mb-6 border-b border-gray-100 pb-4 flex items-center gap-2">
              📝 تفاصيل العرض
            </h2>
            <div class="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
              {{ packageData.description }}
            </div>
          </div>
        </div>

        <div class="lg:col-span-1">
          <div class="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 sticky top-28">
            <div class="text-center mb-6 bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <span class="text-gray-500 text-sm font-bold">السعر</span>
              <div class="text-4xl font-extrabold text-primary mt-2 flex justify-center items-end gap-1">
                {{ Number(packageData.price || 0).toLocaleString('ar') }}
                <span class="text-lg text-gray-500 font-bold mb-1">{{ packageData.currency || 'USD' }}</span>
              </div>
            </div>

            <div class="space-y-3 mb-8 text-sm">
              <div class="flex justify-between border-b border-gray-100 pb-2">
                <span class="text-gray-500">الوجهة</span>
                <span class="font-bold">{{ packageData.destination }}</span>
              </div>
            
            </div>

            <a 
              :href="`https://wa.me/218915461666?text=مرحباً، أرغب بالحجز في عرض: ${packageData.title}`" 
              target="_blank"
              class="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-green-300/70 ring-1 ring-green-400/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-300"
            >
              <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/30">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              </span>
              احجز الآن عبر واتساب
            </a>
            
            <p class="text-center text-xs text-gray-400 mt-4">
              نرد فوراً خلال ساعات العمل ⏱️
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar { height: 8px; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
.custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
</style>