<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue' 
import AppFooter from './components/AppFooter.vue' 
</script>

<template>
  <div class="font-sans text-right min-h-screen flex flex-col scroll-smooth bg-gray-50" dir="rtl">
    
    <AppHeader />

    <main class="flex-grow">
        <RouterView v-slot="{ Component }">
          <transition name="route-fade-slide" mode="out-in">
            <component :is="Component" />
          </transition>
        </RouterView>
    </main>

    <AppFooter />

  </div>
</template>

<style scoped>
.route-fade-slide-enter-active,
.route-fade-slide-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.route-fade-slide-enter-from,
.route-fade-slide-leave-to {
  opacity: 0;
  transform: translateY(14px);
}
</style>



