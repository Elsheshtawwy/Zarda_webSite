<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'

const isMenuOpen = ref(false)
const route = useRoute()
const activeSection = ref('home')
const scrolled = ref(false)
const sectionIds = ['home', 'services', 'packages']

watch(() => route.fullPath, () => { isMenuOpen.value = false })
const updateActiveSection = () => {
  if (route.path !== '/') {
    activeSection.value = ''
    return
  }

  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean)

  if (!sections.length) {
    activeSection.value = 'home'
    return
  }

  const checkLine = window.innerHeight * 0.42
  const current = sections.find((section) => {
    const rect = section.getBoundingClientRect()
    return rect.top <= checkLine && rect.bottom > checkLine
  })

  if (current) {
    activeSection.value = current.id
    return
  }

  const passedSections = sections.filter((section) => section.getBoundingClientRect().top <= checkLine)
  activeSection.value = passedSections.length ? passedSections[passedSections.length - 1].id : 'home'
}

const onScroll = () => {
  scrolled.value = window.scrollY > 20
  updateActiveSection()
}

watch(() => route.path, () => {
  nextTick(() => {
    updateActiveSection()
  })
})

onMounted(() => {
  window.addEventListener('scroll', onScroll)
  nextTick(() => {
    updateActiveSection()
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
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
          <RouterLink to="/" class="nav-link" :class="{ 'nav-link-active': route.path === '/' && activeSection === 'home' }">الرئيسية</RouterLink>
          <RouterLink to="/#services" class="nav-link" :class="{ 'nav-link-active': activeSection === 'services' }">خدماتنا</RouterLink>
          <RouterLink to="/#packages" class="nav-link" :class="{ 'nav-link-active': activeSection === 'packages' }">العروض</RouterLink>
          <RouterLink to="/contact" class="nav-link" active-class="nav-link-active">اتصل بنا</RouterLink>
          
          <RouterLink to="/booking" class="btn-accent">
            <span>احجز رحلتك</span><span>✈️</span>
          </RouterLink>
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
          <RouterLink to="/booking" class="block w-full btn-primary mt-2" @click="isMenuOpen=false">احجز الآن</RouterLink>
        </div>
      </div>
    </transition>
  </nav>
</template>