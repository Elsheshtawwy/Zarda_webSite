<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { usePackagesStore } from '@/stores/packages'
import { usePreferencesStore } from '@/stores/preferences'
import defaultImage from '/zarda_logo.png'

const store = usePackagesStore()
const prefs = usePreferencesStore()
const loading = computed(() => store.loading)
const packages = computed(() => store.all)
const activeFilter = ref('الكل')
const categories = ['الكل', 'سياحة', 'تأشيرات', 'طيران', 'فنادق']
const searchQuery = ref('')
const sortBy = ref('newest')

const displayedPackages = computed(() => {
  let list = activeFilter.value === 'الكل' ? [...packages.value] : packages.value.filter(p => p.category === activeFilter.value)
  list = list.filter(p => p.active !== false)

  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    list = list.filter(p => p.title.toLowerCase().includes(q) || p.destination.toLowerCase().includes(q))
  }

  list.sort((a, b) => {
    if (sortBy.value === 'price-asc') return (Number(a.price) || 0) - (Number(b.price) || 0)
    if (sortBy.value === 'price-desc') return (Number(b.price) || 0) - (Number(a.price) || 0)
    return (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0)
  })
  return list
})

onMounted(() => {
  const key = prefs.sortKey?.value || 'createdAt'
  const dir = prefs.sortDir?.value || 'desc'
  if (key === 'price' && dir === 'asc') sortBy.value = 'price-asc'
  else if (key === 'price' && dir === 'desc') sortBy.value = 'price-desc'
  else sortBy.value = 'newest'
  store.fetchAll()
})

watch(sortBy, (val) => {
  if (val === 'newest') prefs.setSort('createdAt', 'desc')
  else if (val === 'price-asc') prefs.setSort('price', 'asc')
  else if (val === 'price-desc') prefs.setSort('price', 'desc')
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 pt-32 pb-20">
    <div class="max-w-7xl mx-auto px-4">
      
      <div class="text-center mb-12 max-w-2xl mx-auto">
        <span class="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold mb-3">✨ عروض مميزة</span>
        <h1 class="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">استكشف باقات السفر المميزة حول العالم 🌍</h1>
        <p class="text-gray-600 text-base md:text-lg">خيارات متنوعة بأسعار تنافسية وخدمة موثوقة أينما كانت وجهتك</p>
      </div>

      <div class="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row gap-4">
        <div class="relative flex-grow">
          <input v-model="searchQuery" type="text" placeholder="ابحث عن وجهة..." class="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition">
          <span class="absolute left-4 top-3.5 text-gray-400">🔍</span>
        </div>
        <select v-model="sortBy" class="bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary outline-none cursor-pointer">
          <option value="newest">الأحدث أولاً</option>
          <option value="price-asc">الأقل سعراً</option>
          <option value="price-desc">الأعلى سعراً</option>
        </select>
      </div>

      <div class="flex flex-wrap justify-center gap-3 mb-10">
        <button v-for="cat in categories" :key="cat" @click="activeFilter=cat" 
          class="px-6 py-2 rounded-full font-bold transition border"
          :class="activeFilter === cat ? 'bg-primary text-white border-primary shadow-lg' : 'bg-white text-gray-600 border-gray-200 hover:border-primary'">
          {{ cat }}
        </button>
      </div>

      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="n in 6" :key="n" class="bg-white rounded-3xl shadow-sm p-4 border border-gray-100 animate-pulse">
          <div class="h-48 bg-gray-200 rounded-2xl mb-4"></div>
          <div class="h-6 w-3/4 bg-gray-200 rounded mb-2"></div>
          <div class="h-4 w-1/2 bg-gray-200 rounded mb-4"></div>
          <div class="h-10 bg-gray-200 rounded-xl"></div>
        </div>
      </div>

      <div v-else-if="displayedPackages.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="pkg in displayedPackages" :key="pkg.id" class="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100 flex flex-col">
          <RouterLink :to="{ name: 'package-details', params: { id: pkg.id } }" class="relative h-60 overflow-hidden block">
            <img :src="pkg.image || defaultImage" @error="(e)=>e.target.src=defaultImage" loading="lazy" decoding="async" class="w-full h-full object-cover transition duration-700 group-hover:scale-110">
            <div class="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-primary shadow">{{ pkg.category }}</div>
            <div class="absolute bottom-4 left-4 bg-primary text-white px-3 py-1.5 rounded-lg font-bold shadow text-sm">{{ Number(pkg.price).toLocaleString() }} {{ pkg.currency }}</div>
          </RouterLink>
          <div class="p-6 flex-grow flex flex-col">
            <div class="text-xs font-bold text-gray-400 mb-2 flex items-center gap-1">📍 {{ pkg.destination }}</div>
            <h3 class="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition line-clamp-1">{{ pkg.title }}</h3>
            <p class="text-gray-500 text-sm line-clamp-2 mb-4">{{ pkg.description }}</p>
            <div class="mt-auto pt-4 border-t border-gray-50 flex gap-2">
              <RouterLink :to="{ name: 'package-details', params: { id: pkg.id } }" class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 rounded-xl text-center text-sm transition">التفاصيل</RouterLink>
              <a :href="`https://wa.me/218915461666?text=${pkg.title}`" target="_blank" class="w-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center hover:bg-green-100 text-lg">💬</a>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-20">
        <div class="text-6xl mb-4">🔍</div>
        <h3 class="text-xl font-bold text-gray-800">لا توجد عروض</h3>
        <button @click="activeFilter='الكل';searchQuery=''" class="mt-4 text-primary font-bold underline">عرض الكل</button>
      </div>

    </div>
  </div>
</template>