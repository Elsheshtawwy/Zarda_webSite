<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'

const isMenuOpen = ref(false)
const route = useRoute()
const activeSection = ref('')
const scrolled = ref(false)

watch(() => route.fullPath, () => { isMenuOpen.value = false })
const onScroll = () => { scrolled.value = window.scrollY > 20 }

let observer
const setupObserver = async () => {
  await nextTick()
  if (route.path !== '/') {
    activeSection.value = ''
    return
  }
  const options = { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 }
  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) activeSection.value = entry.target.id
    })
  }
  observer = new IntersectionObserver(callback, options)
  const ids = ['services', 'packages']
  ids.forEach(id => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })
}

watch(() => route.path, () => {
  if (observer) observer.disconnect()
  setupObserver()
})

onMounted(() => {
  window.addEventListener('scroll', onScroll)
  setupObserver()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  if (observer) observer.disconnect()
})
</script>

<template>
  <nav :class="['fixed w-full z-50 transition-all duration-300 border-b',
                scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-gray-200 py-2' : 'bg-transparent border-transparent py-4']">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center">
        
        <RouterLink to="/" class="flex-shrink-0 flex items-center gap-2 group">
          <img src="/zarda_logo.png" alt="Zarda Logo" class="h-10 w-auto object-contain transition duration-300 group-hover:scale-110" />
          <span class="font-bold text-xl text-primary hidden sm:block">زردة للسفر</span>
        </RouterLink>

        <div class="hidden md:flex items-center gap-8">
          <RouterLink to="/" class="nav-link" :class="{ 'nav-link-active': route.path === '/' && !activeSection }">الرئيسية</RouterLink>
          <RouterLink to="/#services" class="nav-link" :class="{ 'nav-link-active': activeSection === 'services' }">خدماتنا</RouterLink>
          <RouterLink to="/#packages" class="nav-link" :class="{ 'nav-link-active': activeSection === 'packages' }">العروض</RouterLink>
          <RouterLink to="/contact" class="nav-link" active-class="nav-link-active">اتصل بنا</RouterLink>
          
          <button class="btn-accent">
            <span>احجز رحلتك</span><span>✈️</span>
          </button>
        </div>

        <div class="md:hidden flex items-center">
          <button @click="isMenuOpen = !isMenuOpen" class="text-gray-700 hover:text-primary p-2 focus:outline-none">
            <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-5 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-5 opacity-0"
    >
      <div v-if="isMenuOpen" class="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0">
        <div class="px-4 py-6 space-y-4 text-center">
          <RouterLink to="/" class="block text-gray-800 font-bold hover:text-primary transition" @click="isMenuOpen=false">الرئيسية</RouterLink>
          <RouterLink to="/#services" class="block text-gray-800 font-medium hover:text-primary transition" @click="isMenuOpen=false">خدماتنا</RouterLink>
          <RouterLink to="/#packages" class="block text-gray-800 font-medium hover:text-primary transition" @click="isMenuOpen=false">العروض</RouterLink>
          <RouterLink to="/contact" class="block text-gray-800 font-medium hover:text-primary transition" @click="isMenuOpen=false">اتصل بنا</RouterLink>
          <button class="w-full btn-primary mt-2">احجز الآن</button>
        </div>
      </div>
    </transition>
  </nav>
</template>