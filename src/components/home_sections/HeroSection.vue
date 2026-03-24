<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import airplan from '@/assets/logos/airplan.avif'
import customerService from '@/assets/logos/Customer-Service.jpg'
import resort from '@/assets/logos/resort.avif'

const currentSlide = ref(0)
const slides = [
  { id: 1, image: airplan, badge: 'شعارنا', badgeText: '"فاهمينك من غير ما تحكي"', title: 'وجهتك القادمة تبدأ', highlight: 'مع زردة للسفر', subtitle: 'نوفر لك تجربة سفر لا تنسى. حجز تذاكر، فنادق، وتأشيرات بأفضل الأسعار.' },
  { id: 2, image: customerService, badge: 'ثقة وخبرة', badgeText: 'فريقنا في خدمتك', title: 'فريق عمل خبير', highlight: 'يهتم بأدق التفاصيل', subtitle: 'كادر وظيفي مؤهل جاهز لتقديم الاستشارات وإنهاء كافة إجراءات سفرك بدقة وسرعة.' },
  { id: 3, image: resort, badge: 'عروض حصرية', badgeText: 'سافر ووفر', title: 'أسعار خاصة جداً', highlight: 'لعملائنا المميزين', subtitle: 'استفد من شبكة علاقاتنا الواسعة واحصل على أسعار تذاكر وفنادق لا تقبل المنافسة.' }
]

let slideInterval
const nextSlide = () => { currentSlide.value = (currentSlide.value + 1) % slides.length }
const prevSlide = () => { currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length }
const goToSlide = (index) => { currentSlide.value = index }

onMounted(() => { slideInterval = setInterval(nextSlide, 5000) })
onUnmounted(() => { clearInterval(slideInterval) })
</script>

<template>
  <section id="home" class="relative h-[650px] overflow-hidden bg-gray-900">
    <div v-for="(slide, index) in slides" :key="slide.id" class="absolute inset-0 transition-opacity duration-700 ease-in-out" :class="index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'">
      <img :src="slide.image" :alt="slide.title" class="w-full h-full object-cover transform scale-105" :class="index === currentSlide ? 'scale-100 transition-transform duration-[7s]' : ''" :loading="index === 0 ? 'eager' : 'lazy'">
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
      
      <div class="absolute inset-0 flex items-center justify-center text-center px-4">
        <div class="max-w-4xl mx-auto mt-6">
          <div class="flex justify-center mb-8 overflow-hidden">
            <div class="inline-flex items-center gap-3 py-2 pl-6 pr-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-2xl transition-all duration-700 delay-300 transform ring-1 ring-white/10" :class="index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'">
              <span class="bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">{{ slide.badge }}</span>
              <span class="font-bold text-xl tracking-wide text-shadow">{{ slide.badgeText }}</span>
            </div>
          </div>
          <h1 class="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl transition-all duration-700 delay-500 transform" :class="index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'">
            {{ slide.title }} <br> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-300% animate-gradient">{{ slide.highlight }}</span>
          </h1>
          <p class="text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed transition-all duration-700 delay-700 transform" :class="index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'">
            {{ slide.subtitle }}
          </p>
          <div class="transition-all duration-700 delay-1000 transform" :class="index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'">
            <a href="#packages" class="inline-flex items-center gap-2 bg-primary hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg transition shadow-lg shadow-blue-500/30 hover:scale-105">
              <span>استكشف خدماتنا</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <button @click="prevSlide" class="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 text-white backdrop-blur-sm border border-white/20 rounded-full p-3 shadow-lg transition hover:bg-white/20 hover:scale-105"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.293 15.707a1 1 0 010-1.414L8.414 10l3.879-4.293a1 1 0 10-1.414-1.414l-4.586 5.071a1.5 1.5 0 000 2.072l4.586 5.071a1 1 0 001.414 0z" clip-rule="evenodd"/></svg></button>
    <button @click="nextSlide" class="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 text-white backdrop-blur-sm border border-white/20 rounded-full p-3 shadow-lg transition hover:bg-white/20 hover:scale-105"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.707 4.293a1 1 0 010 1.414L11.586 10l-3.879 4.293a1 1 0 101.414 1.414l4.586-5.071a1.5 1.5 0 000-2.072L9.121 4.293a1 1 0 00-1.414 0z" clip-rule="evenodd"/></svg></button>

    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
      <button v-for="(_, index) in slides" :key="index" @click="goToSlide(index)" class="h-3 rounded-full transition-all duration-300 overflow-hidden" :class="index === currentSlide ? 'bg-accent dot-progress' : 'bg-white/50 hover:bg-white w-3'" style="--interval: 6000ms"></button>
    </div>
  </section>
</template>

<style scoped>
@keyframes gradient { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
.animate-gradient { background-size: 300%; animation: gradient 8s ease infinite; }
.dot-progress { height: 0.75rem; border-radius: 9999px; }
</style>