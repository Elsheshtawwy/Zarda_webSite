<template>
  <section class="py-24 bg-white relative">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-16">
        <span class="text-primary font-bold tracking-wider text-sm uppercase">بوابتك للعالم</span>
        <h2 class="text-4xl font-extrabold text-gray-900 mt-2 mb-4">
          إجراءات التأشيرة؟ <span class="text-accent underline decoration-wavy decoration-primary/30">اتركها علينا</span>
        </h2>
        <p class="text-gray-500 max-w-2xl mx-auto">
          سواء كنت تبحث عن موافقة سريعة أو تجهيز ملف شنغن، فريقنا يضمن لك دقة في الإجراءات.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:border-primary/30 transition duration-300 relative overflow-hidden group">
          <div class="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">موافقة فورية</div>
          <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-sm mb-6 group-hover:scale-110 transition">⚡</div>
          <h3 class="text-2xl font-bold text-gray-800 mb-4">تأشيرات وموافقات سريعة</h3>
          <p class="text-gray-500 text-sm mb-6">إصدار تأشيرات وموافقات أمنية دون الحاجة لحضورك الشخصي.</p>
          <ul class="space-y-3">
            <li class="flex items-center gap-3 text-gray-700 font-medium"><span class="text-xl">🇹🇷</span> تأشيرة تركيا</li>
            <li class="flex items-center gap-3 text-gray-700 font-medium"><span class="text-xl">🇯🇴</span> موافقة الأردن الأمنية</li>
            <li class="flex items-center gap-3 text-gray-700 font-medium"><span class="text-xl">🇪🇬</span> موافقة مصر (برية/جوية)</li>
          </ul>
        </div>
        <div class="bg-primary rounded-3xl p-8 text-white shadow-2xl transform md:-translate-y-4 relative overflow-hidden">
          <div class="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl backdrop-blur-sm mb-6">🇪🇺</div>
          <h3 class="text-2xl font-bold mb-4">تأشيرة شنغن (أوروبا)</h3>
          <p class="text-blue-100 text-sm mb-6">خدمة متكاملة لتجهيز ملفك للسفارات الأوروبية.</p>
          <ul class="space-y-4 border-t border-white/20 pt-6">
            <li class="flex items-center gap-3"><div class="bg-white/20 p-1 rounded-full">✓</div><span>حجز المواعيد</span></li>
            <li class="flex items-center gap-3"><div class="bg-white/20 p-1 rounded-full">✓</div><span>تعبئة النماذج وتجهيز الملف</span></li>
            <li class="flex items-center gap-3"><div class="bg-white/20 p-1 rounded-full">✓</div><span>حجوزات طيران وفنادق مؤكدة</span></li>
          </ul>
        </div>
        <div class="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:border-accent/30 transition duration-300 group">
          <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-sm mb-6 group-hover:scale-110 transition">🏥</div>
          <h3 class="text-2xl font-bold text-gray-800 mb-4">تأمين صحي واستشارات</h3>
          <p class="text-gray-500 text-sm mb-6">لا تكتمل إجراءات السفر بدون تأمين صحي معتمد دولياً.</p>
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-xl border border-gray-100 flex items-start gap-3">
              <span class="text-2xl">📄</span>
              <div><h4 class="font-bold text-gray-800 text-sm">تأمين سفر دولي</h4><p class="text-xs text-gray-400 mt-1">يغطي متطلبات شنغن وكورونا.</p></div>
            </div>
            <div class="bg-white p-4 rounded-xl border border-gray-100 flex items-start gap-3">
              <span class="text-2xl">👨‍💼</span>
              <div><h4 class="font-bold text-gray-800 text-sm">استشارات مجانية</h4><p class="text-xs text-gray-400 mt-1">نراجع أوراقك قبل التقديم.</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>