<template>
  <section id="services" class="relative py-32 bg-[#fcfcfd] overflow-hidden">
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-[120px] opacity-50"></div>
    <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-50 rounded-full mix-blend-multiply filter blur-[120px] opacity-50"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="text-center mb-24">
        <span class="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.2em] text-blue-600 uppercase bg-blue-50 rounded-full">
          لماذا تختار زردة؟
        </span>
        <h2 class="text-4xl md:text-5xl font-black text-slate-900 mb-6 font-['Cairo']">
          خدماتنا المتميزة
        </h2>
        <div class="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        <div class="group relative bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.07)] transition-all duration-500 hover:-translate-y-3">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-[2.5rem] transition-opacity duration-500"></div>
          
          <div class="relative z-10">
            <div class="w-16 h-16 mb-8 flex items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-500">
              <span class="material-symbols-outlined text-3xl">flight_takeoff</span>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-slate-800 font-['Cairo']">حجز تذاكر</h3>
            <p class="text-slate-500 leading-relaxed font-['Tajawal']">
              أسعار حصرية وخيارات مرنة للطيران لأكثر من 500 وجهة حول العالم مع دعم فني متواصل.
            </p>
          </div>
        </div>

        <div class="group relative bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.07)] transition-all duration-500 hover:-translate-y-3">
          <div class="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-[2.5rem] transition-opacity duration-500"></div>
          
          <div class="relative z-10">
            <div class="w-16 h-16 mb-8 flex items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-200 group-hover:scale-110 transition-transform duration-500">
              <span class="material-symbols-outlined text-3xl">apartment</span>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-slate-800 font-['Cairo']">حجز فنادق</h3>
            <p class="text-slate-500 leading-relaxed font-['Tajawal']">
              نختار لك أفضل الفنادق والمنتجعات بعناية لنضمن لك إقامة فاخرة ومريحة وبأفضل الأسعار.
            </p>
          </div>
        </div>

        <div class="group relative bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.07)] transition-all duration-500 hover:-translate-y-3">
          <div class="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-[2.5rem] transition-opacity duration-500"></div>
          
          <div class="relative z-10">
            <div class="w-16 h-16 mb-8 flex items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-200 group-hover:scale-110 transition-transform duration-500">
              <span class="material-symbols-outlined text-3xl">passport</span>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-slate-800 font-['Cairo']">تأشيرات</h3>
            <p class="text-slate-500 leading-relaxed font-['Tajawal']">
              إجراءات سريعة ومضمونة لاستخراج جميع أنواع التأشيرات مع تجهيز احترافي للملفات.
            </p>
          </div>
        </div>

        <div class="group relative bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.07)] transition-all duration-500 hover:-translate-y-3">
          <div class="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-[2.5rem] transition-opacity duration-500"></div>
          
          <div class="relative z-10">
            <div class="w-16 h-16 mb-8 flex items-center justify-center rounded-2xl bg-purple-600 text-white shadow-lg shadow-purple-200 group-hover:scale-110 transition-transform duration-500">
              <span class="material-symbols-outlined text-3xl">school</span>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-slate-800 font-['Cairo']">تدريب مهني</h3>
            <p class="text-slate-500 leading-relaxed font-['Tajawal']">
              دورات تدريبية متخصصة واستشارات احترافية لتطوير مهارات العاملين في قطاع السفر.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* إضافة خطوط جوجل لضمان الفخامة */
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@700;900&family=Tajawal:wght@400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0');
</style>