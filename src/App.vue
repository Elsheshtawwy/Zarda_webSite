<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue' 
import AppFooter from './components/AppFooter.vue' 
</script>

<template>
  <div class="font-sans text-right min-h-screen flex flex-col scroll-smooth bg-gray-50" dir="rtl">
    
    <AppHeader />

    <main class="flex-grow">
      <RouterView />
    </main>

    <AppFooter />

  </div>
</template>



