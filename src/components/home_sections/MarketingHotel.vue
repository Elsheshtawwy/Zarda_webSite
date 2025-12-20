<script setup>
import luxuryHotelImg from '@/assets/images/hotel_luxury.jpg'
import cozyRoomImg from '@/assets/images/hotel_room.jpg'

import guaranteeIcon from '@/assets/icons/icon_guarantee.png'
import supportIcon from '@/assets/icons/icon_support.png'
import locationPinIcon from '@/assets/icons/icon_location_pin.png'
import paymentIcon from '@/assets/icons/icon_payment.png'
</script>

<template>
  <section class="py-24 bg-gray-50 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div class="relative order-2 lg:order-1">
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-100/50 rounded-full filter blur-3xl -z-10"></div>
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-4 mt-8">
              <img :src="luxuryHotelImg" class="rounded-2xl shadow-xl hover:scale-105 transition duration-500 object-cover h-64 w-full" alt="فندق فاخر">
              <div class="bg-white p-6 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition duration-300">
                <span class="text-2xl font-bold text-accent block mb-1">توفير</span>
                <span class="text-gray-600 font-bold text-xs">أفضل الأسعار</span>
              </div>
            </div>
            <div class="space-y-4">
              <div class="bg-primary p-6 rounded-2xl shadow-lg text-white text-center transform hover:-translate-y-2 transition duration-300">
                <span class="text-3xl">⭐</span>
                <span class="block text-blue-100 text-sm mt-1">فنادق راقية</span>
              </div>
              <img :src="cozyRoomImg" class="rounded-2xl shadow-xl hover:scale-105 transition duration-500 object-cover h-80 w-full" alt="غرفة مريحة">
            </div>
          </div>
        </div>

        <div class="order-1 lg:order-2 text-right">
          <span class="text-primary font-bold tracking-wider text-sm uppercase">إقامة فاخرة</span>
          <h2 class="text-4xl font-extrabold text-gray-900 mt-2 mb-6 leading-tight">
            لا تبحث عن مكان للنوم.. <br>
            <span class="text-accent">ابحث عن تجربة لا تُنسى</span>
          </h2>
          <p class="text-gray-500 text-lg mb-8 leading-relaxed">
            تخلص من عناء البحث. بفضل خبرتنا وشراكاتنا، نوفر لك إقامة في أفخم الفنادق والمنتجعات حول العالم بأسعار مميزة جداً تناسب ميزانيتك.
          </p>
          
          <div class="space-y-6">
            
            <div class="flex items-start gap-4 group">
              <div class="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 ring-1 ring-primary/10 shadow-sm flex items-center justify-center transition-all group-hover:shadow-md group-hover:-translate-y-0.5">
                <img :src="guaranteeIcon" alt="ضمان الحجز" class="h-8 w-8 object-contain">
              </div>
              <div>
                <h4 class="font-bold text-xl text-gray-800">ضمان الحجز</h4>
                <p class="text-gray-500 text-sm mt-1">حجزك مؤكد 100% قبل سفرك، لتسافر وأنت مطمئن.</p>
              </div>
            </div>

            <div class="flex items-start gap-4 group">
              <div class="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 ring-1 ring-primary/10 shadow-sm flex items-center justify-center transition-all group-hover:shadow-md group-hover:-translate-y-0.5">
                <img :src="supportIcon" alt="دعم فني" class="h-8 w-8 object-contain">
              </div>
              <div>
                <h4 class="font-bold text-xl text-gray-800">دعم على مدار الساعة</h4>
                <p class="text-gray-500 text-sm mt-1">متابعة وخدمة عملاء 24/7 لضمان راحتك.</p>
              </div>
            </div>

            <div class="flex items-start gap-4 group">
              <div class="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 ring-1 ring-primary/10 shadow-sm flex items-center justify-center transition-all group-hover:shadow-md group-hover:-translate-y-0.5">
                <img :src="locationPinIcon" alt="مواقع مختارة" class="h-8 w-8 object-contain">
              </div>
              <div>
                <h4 class="font-bold text-xl text-gray-800">مواقع مختارة</h4>
                <p class="text-gray-500 text-sm mt-1">نختار لك فنادق قريبة من الخدمات والمعالم السياحية.</p>
              </div>
            </div>

            <div class="flex items-start gap-4 group">
              <div class="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 ring-1 ring-primary/10 shadow-sm flex items-center justify-center transition-all group-hover:shadow-md group-hover:-translate-y-0.5">
                <img :src="paymentIcon" alt="طرق دفع" class="h-8 w-8 object-contain">
              </div>
              <div>
                <h4 class="font-bold text-xl text-gray-800">طرق دفع ميسرة</h4>
                <p class="text-gray-500 text-sm mt-1">ادفع نقداً (كاش) أو عبر الخدمات المصرفية المتاحة.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>