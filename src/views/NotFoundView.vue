<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div
    class="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-4 pt-20 pb-32"
  >

    <div class="relative">
      <h1 class="text-9xl font-black text-gray-200 select-none">404</h1>
    </div>


    <h2 class="text-3xl md:text-4xl font-extrabold text-gray-800 mt-6 mb-3">
      أوه! يبدو أننا خرجنا عن المسار ✈️
    </h2>


    <p class="text-gray-500 max-w-md mx-auto mb-8 text-lg">
      الوجهة التي تبحث عنها غير موجودة حالياً، ربما تم تغيير مسار الرحلة أو أن الرابط غير صحيح.
    </p>


    <RouterLink
      to="/"
      class="btn-primary inline-flex items-center gap-2"
    >
      <span>العودة إلى الرئيسية</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </RouterLink>
  </div>
</template>
