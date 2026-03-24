<script setup>
import { RouterLink } from 'vue-router'
import fbIcon from '@/assets/social_media_icons/facebook.png'
import instaIcon from '@/assets/social_media_icons/instagram.png'
import tiktokIcon from '@/assets/social_media_icons/tik-tok.png'
</script>

<template>
  <footer class="bg-secondary text-white pt-16 pb-8 border-t border-gray-800 mt-auto">
    <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-right">
      
      <div>
        <div class="flex items-center justify-center md:justify-start gap-3 mb-4 group">
          <img src="/zarda_logo.png" class="h-10 w-auto object-contain transition duration-300 group-hover:scale-110" alt="logo footer" />
          <h3 class="text-2xl font-extrabold text-white">زردة للسفر</h3>
        </div>

        <p class="text-accent font-bold text-lg mb-4">"فاهمينك من غير ما تحكي"</p>
        <p class="text-gray-400 text-sm leading-relaxed">
          شريكك الموثوق لاستكشاف العالم. نقدم لك أفضل العروض السياحية، التأشيرات، وحجوزات الفنادق بأفضل الأسعار وبخدمة لا تضاهى.
        </p>

        <div class="flex justify-center md:justify-start gap-4 mt-6">
          <a href="https://www.facebook.com/zardatravel/" target="_blank" class="social-btn">
            <img :src="fbIcon" alt="Facebook" class="w-5 h-5 opacity-80 group-hover:opacity-100" />
          </a>
          <a href="https://www.instagram.com/zardatravel/" target="_blank" class="social-btn">
            <img :src="instaIcon" alt="Instagram" class="w-5 h-5 opacity-80 group-hover:opacity-100" />
          </a>
          <a href="https://www.tiktok.com/@zarda.travel/" target="_blank" class="social-btn">
            <img :src="tiktokIcon" alt="TikTok" class="w-5 h-5 opacity-80 group-hover:opacity-100" />
          </a>
        </div>
      </div>

      <div>
        <h4 class="footer-title">روابط سريعة</h4>
        <ul class="space-y-3 text-gray-400">
          <li>
            <RouterLink to="/" class="footer-link">
              <span class="text-xs transition-transform group-hover:-translate-x-1">❮</span> الرئيسية
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/all-packages" class="footer-link">
              <span class="text-xs transition-transform group-hover:-translate-x-1">❮</span> كل العروض
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="footer-link">
              <span class="text-xs transition-transform group-hover:-translate-x-1">❮</span> اتصل بنا
            </RouterLink>
          </li>
        </ul>
      </div>

      <div>
        <h4 class="footer-title">تواصل معنا</h4>
        <div class="space-y-4 text-gray-400">
          <div class="flex items-center gap-3 justify-center md:justify-start cursor-default group">
            <span class="icon-box-circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            <span dir="ltr" class="font-mono group-hover:text-white transition">091 546 1666</span>
          </div>

          <div class="flex items-center gap-3 justify-center md:justify-start cursor-default group">
            <span class="icon-box-circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <span class="group-hover:text-white transition">info@zardatravel.com</span>
          </div>

          <div class="flex items-center gap-3 justify-center md:justify-start cursor-default group">
            <span class="icon-box-circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <span class="group-hover:text-white transition">بنغازي، شارع دبي</span>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center mt-12 pt-8 border-t border-gray-800 text-sm space-y-3">
      <p dir="rtl" class="text-gray-500">جميع الحقوق محفوظة © 2025 شركة الزردة للسفر والسياحة.</p>

      <div class="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10">
        <span dir="rtl" class="text-sm font-semibold text-gray-200">تم التطوير بواسطة</span>
        <a
          href="https://ignitix-website.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          dir="ltr"
          class="font-extrabold tracking-wide text-accent hover:text-orange-300 underline decoration-accent/40 underline-offset-4 transition-colors"
          aria-label="زيارة موقع ignitix"
        >
          <bdi>IGNITIX</bdi>
        </a>
      </div>
    </div>
  </footer>
</template>