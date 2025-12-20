<script setup>
import { ref, onMounted, computed } from 'vue'
import { usePackagesStore } from '@/stores/packages'
import { RouterLink } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import defaultImage from '/zarda_logo.png'

const store = usePackagesStore()
const loading = computed(() => store.loading)
const packages = computed(() => store.latest(10).filter(p => p.active !== false))
const swiperModules = [Autoplay, Pagination, Navigation, EffectCoverflow]

const swiperProps = {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  initialSlide: 1,
  loop: false,
  coverflowEffect: { rotate: 12, stretch: 0, depth: 160, modifier: 2.2, slideShadows: false },
  autoplay: { delay: 3200, disableOnInteraction: false },
  pagination: { clickable: true },
  navigation: { nextEl: '.pkgs-next', prevEl: '.pkgs-prev' },
}

onMounted(() => store.fetchAll())
</script>

<template>
  <section id="packages" class="py-24 bg-white relative overflow-hidden">
    <div class="pointer-events-none absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    <div class="pointer-events-none absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-accent/5 rounded-full blur-3xl"></div>

    <div class="max-w-7xl mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div class="text-right">
          <span class="text-primary font-bold tracking-wider uppercase text-sm inline-flex items-center gap-2">عروض مختارة لكم</span>
          <h2 class="text-4xl font-extrabold text-gray-900 mt-2 mb-3">أحدث العروض السياحية <span class="text-accent">المختارة بعناية</span></h2>
          <div class="w-20 h-1.5 bg-accent rounded-full ml-auto"></div>
          <p class="text-gray-500 text-sm mt-4">رحلات بأسعار تنافسية.</p>
        </div>
        <div class="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
          <RouterLink to="/all-packages" class="inline-flex items-center gap-2 bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold transition shadow-lg shadow-blue-500/20">
            عرض كل الرحلات <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 rotate-180" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg>
          </RouterLink>
        </div>
      </div>

      <div v-if="loading" class="flex justify-center py-20"><div class="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div></div>
      <div v-else-if="packages.length === 0" class="text-center py-20 bg-gray-50 rounded-3xl"><p class="text-gray-500 text-xl">لا توجد رحلات متاحة حالياً!</p></div>

      <div v-else class="packages-swiper-container pt-6 relative">
        <div class="hidden md:flex items-center absolute inset-y-0 left-2 z-20"><button class="pkgs-prev h-7 w-7 rounded-full bg-white/90 text-primary border border-gray-200 shadow hover:bg-white transition flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.293 15.707a1 1 0 010-1.414L8.414 10l3.879-4.293a1 1 0 10-1.414-1.414l-4.586 5.071a1.5 1.5 0 000 2.072l4.586 5.071a1 1 0 001.414 0z" clip-rule="evenodd"/></svg></button></div>
        <div class="hidden md:flex items-center absolute inset-y-0 right-2 z-20"><button class="pkgs-next h-7 w-7 rounded-full bg-white/90 text-primary border border-gray-200 shadow hover:bg-white transition flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.707 4.293a1 1 0 010 1.414L11.586 10l-3.879 4.293a1 1 0 101.414 1.414l4.586-5.071a1.5 1.5 0 000-2.072L9.121 4.293a1 1 0 00-1.414 0z" clip-rule="evenodd"/></svg></button></div>

        <Swiper :modules="swiperModules" v-bind="swiperProps" class="mySwiper">
          <SwiperSlide v-for="pkg in packages" :key="pkg.id" class="swiper-slide-custom">
            <div class="rounded-[1.7rem] p-[2px] bg-gradient-to-br from-primary/10 via-accent/10 to-white transition">
              <div class="pkg-card group bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 h-full flex flex-col transition-all duration-300 hover:shadow-2xl">
                <RouterLink :to="{ name: 'package-details', params: { id: pkg.id } }" class="relative h-64 overflow-hidden block">
                  <img :src="pkg.image || defaultImage" @error="(e)=>e.target.src=defaultImage" loading="lazy" decoding="async" class="w-full h-full object-cover transition duration-700 group-hover:scale-110">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                  <div class="absolute top-4 right-4 flex items-center gap-2">
                    <span v-if="pkg.category" class="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">{{ pkg.category }}</span>
                    <span v-if="pkg.isFeatured" class="bg-amber-500 text-white px-3 py-1 rounded-full text-[10px] font-bold shadow">مميز</span>
                  </div>
                  <div class="absolute bottom-4 left-4 flex items-center gap-2">
                    <div class="bg-primary text-white px-4 py-2 rounded-xl font-bold shadow-lg">{{ new Intl.NumberFormat('ar-EG').format(pkg.price) }} {{ pkg.currency || 'USD' }}</div>
                  </div>
                </RouterLink>
                <div class="p-6 flex-grow flex flex-col text-right">
                  <div class="text-gray-400 text-xs font-bold mb-2 flex items-center gap-2 justify-end">
                    <span class="flex items-center gap-1"><span>📍</span><span>{{ pkg.destination }}</span></span>
                  </div>
                  <RouterLink :to="{ name: 'package-details', params: { id: pkg.id } }">
                    <h3 class="text-xl font-bold text-gray-800 mb-2 hover:text-primary transition line-clamp-1">{{ pkg.title }}</h3>
                  </RouterLink>
                  <p class="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{{ pkg.description }}</p>
                  <div class="mt-auto flex justify-between items-center pt-4 border-t border-gray-50 gap-2">
                    <RouterLink :to="{ name: 'package-details', params: { id: pkg.id } }" class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 rounded-xl text-center transition">تفاصيل</RouterLink>
                    <a :href="`https://wa.me/218915461666?text=${encodeURIComponent('استفسار عن: ' + (pkg.title || 'عرض سفر'))}`" target="_blank" class="px-4 bg-green-500 text-white rounded-xl flex items-center justify-center hover:bg-green-600 transition py-3 font-bold">واتساب</a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mySwiper { padding-bottom: 50px !important; padding-top: 20px !important; }
.swiper-slide-custom { width: 320px; height: auto; transition: all 0.3s ease; opacity: 0.6; transform: scale(0.9); }
.swiper-slide-active { opacity: 1; transform: scale(1.1) !important; z-index: 10; }
.swiper-slide-active .pkg-card { transform: none !important; }
:deep(.swiper-pagination-bullet) { background: #cbd5e1; opacity: 1; }
:deep(.swiper-pagination-bullet-active) { background: #3b82f6; width: 20px; border-radius: 5px; }
@media (min-width: 768px) { .swiper-slide-custom { width: 360px; } }
</style>