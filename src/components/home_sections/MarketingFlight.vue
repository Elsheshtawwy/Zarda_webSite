<script setup>
import libyanLogo from '@/assets/logos/libyan.png'
import afriqiyahLogo from '@/assets/logos/afriqiyah.png'
import turkishLogo from '@/assets/logos/turkish.png'
import qatarLogo from '@/assets/logos/qatar.png'
import emiratesLogo from '@/assets/logos/emirates.png'
import tunisairLogo from '@/assets/logos/tunisair.png'
import egyptairLogo from '@/assets/logos/egyptair.png'

const whatsappIcon = new URL('../../assets/icons/whatsapp.png', import.meta.url).href

const logos = [
    libyanLogo, afriqiyahLogo, turkishLogo, 
    qatarLogo, emiratesLogo, tunisairLogo, egyptairLogo
]
</script>

<template>
    <section class="py-20 bg-white relative">
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                <div class="text-right">
                    <span class="text-primary font-bold tracking-wider text-sm uppercase">حجوزات طيران</span>
                    <h2 class="text-4xl font-extrabold text-gray-900 mt-2 mb-6 leading-tight">
                        سافر مع أكبر شركات الطيران <br>
                        <span class="text-accent">بأفضل الأسعار المحلية والعالمية</span>
                    </h2>
                    <p class="text-gray-500 text-lg mb-8 leading-relaxed">
                        نوفر لك حجوزات فورية ومؤكدة على الخطوط الليبية، الأفريقية، والعالمية. نظامنا مرتبط مباشرة بأنظمة الحجز لضمان حصولك على المقعد الذي تريده بالسعر الأنسب.
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
                            </div>
                            <div><h4 class="font-bold text-gray-800">أسعار منافسة</h4><p class="text-sm text-gray-500">نقارن لك الأسعار لنجد الخيار الأفضل.</p></div>
                        </div>
                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-accent">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                            </div>
                            <div><h4 class="font-bold text-gray-800">راحة بال تامة</h4><p class="text-sm text-gray-500">إمكانية تغيير الحجز أو الاسترداد بكل سهولة.</p></div>
                        </div>
                    </div>
                </div>

                <div class="relative group">
                    <div class="absolute inset-0 bg-primary/10 rounded-[2.5rem] transform rotate-3 transition-transform group-hover:rotate-1"></div>
                    <div class="relative bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100">
                        <div class="bg-primary h-32 relative overflow-hidden flex items-center justify-center">
                            <svg class="absolute inset-0 text-white/10 w-full h-full" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M0 0h100v100H0z" fill="none"/><path d="M20 50c10-10 30-10 40 0s10 30 0 40-30 10-40 0-10-30 0-40z" opacity="0.2"/></svg>
                            <div class="z-10 text-center">
                                <span class="inline-block p-4 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                                </span>
                            </div>
                        </div>
                        <div class="p-8 text-center">
                            <h3 class="text-2xl font-bold text-gray-800 mb-2">رحلتك تبدأ بمحادثة</h3>
                            <p class="text-gray-500 text-sm mb-8 leading-relaxed">لا تضيع وقتك في البحث. تواصل معنا مباشرة، وسيقوم فريقنا بترتيب رحلتك بالكامل في دقائق.</p>
                            
                            <a
                                href="https://wa.me/218915461666"
                                target="_blank"
                                aria-label="احجز الآن عبر واتساب"
                                class="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-200 transition-all hover:-translate-y-1"
                            >
                                <img
                                    :src="whatsappIcon"
                                    alt="WhatsApp"
                                    class="w-5 h-5 shrink-0 object-contain filter brightness-0 invert"
                                />
                                احجز الآن عبر واتساب
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-20 pt-10 border-t border-gray-100">
                <p class="text-center text-gray-400 text-sm mb-8">حجوزات مؤكدة على كافة الخطوط الجوية</p>
                
                <div class="relative overflow-hidden group dir-ltr">
                    <div class="flex animate-scroll whitespace-nowrap">
                        
                        <div class="flex items-center gap-16 mx-8">
                            <img v-for="(logo, index) in logos" :key="'a-'+index" :src="logo" class="airline-logo" loading="lazy">
                        </div>

                        <div class="flex items-center gap-16 mx-8">
                            <img v-for="(logo, index) in logos" :key="'b-'+index" :src="logo" class="airline-logo" loading="lazy">
                        </div>

                    </div>

                    <div class="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div class="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}

.animate-scroll {
    display: flex;
    width: max-content;
    animation: scroll 30s linear infinite;
}

.group:hover .animate-scroll {
    animation-play-state: paused;
}

.dir-ltr {
    direction: ltr;
}
</style>