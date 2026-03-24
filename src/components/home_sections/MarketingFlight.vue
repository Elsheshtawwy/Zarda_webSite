<script setup>
import libyanLogo from '@/assets/logos/libyan.png'
import afriqiyahLogo from '@/assets/logos/afriqiyah.png'
import turkishLogo from '@/assets/logos/turkish.png'
import qatarLogo from '@/assets/logos/qatar.png'
import emiratesLogo from '@/assets/logos/emirates.png'
import tunisairLogo from '@/assets/logos/tunisair.png'
import egyptairLogo from '@/assets/logos/egyptair.png'

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

               <div class="relative group max-w-md mx-auto">
    <div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-[3rem] transform -rotate-3 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105"></div>
    
    <div class="relative bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/50 backdrop-blur-sm transition-all duration-500 group-hover:shadow-blue-200/50">
        
        <div class="bg-gradient-to-br from-blue-600 to-blue-700 h-40 relative overflow-hidden flex items-center justify-center">
            <svg class="absolute inset-0 text-white/10 w-full h-full" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z" opacity="0.1"/>
            </svg>
            
            <div class="z-10 relative">
                <div class="relative inline-block p-5 bg-white/15 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8l3 3m0 0l-3 3m3-3H8" class="animate-pulse" />
                    </svg>
                </div>
                <div class="absolute inset-0 bg-white/20 blur-2xl rounded-full -z-10 animate-pulse"></div>
            </div>
        </div>

        <div class="p-10 text-center bg-gradient-to-b from-white to-blue-50/30">
            <h3 class="text-3xl font-black text-gray-900 mb-3 tracking-tight font-['Cairo']">رحلتك تبدأ بمحادثة</h3>
            <p class="text-gray-600 text-base mb-10 leading-relaxed font-['Tajawal']">
                اترك عناء التخطيط لنا. تواصل مع خبراء "زردة" الآن، وسنقوم بتنسيق عطلتك المثالية في دقائق معدودة.
            </p>
            
            <a
                href="https://wa.me/218915461666"
                target="_blank"
                class="relative w-full flex items-center justify-center gap-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-black py-5 rounded-2xl shadow-xl shadow-green-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-300 overflow-hidden"
            >
                <div class="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-20deg] -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                
                <div class="bg-white/20 p-2 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                        <path d="M20.52 3.48A11.86 11.86 0 0012.02 0C5.41 0 .04 5.37.04 11.98c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.62a11.92 11.92 0 005.82 1.49h.01c6.61 0 11.98-5.37 11.98-11.98 0-3.2-1.25-6.22-3.49-8.41zM12.03 21.85h-.01a9.89 9.89 0 01-5.03-1.38l-.36-.22-3.68.96.98-3.59-.23-.37a9.9 9.9 0 01-1.52-5.27C2.18 6.55 6.57 2.16 12.01 2.16c2.64 0 5.13 1.03 6.99 2.89a9.8 9.8 0 012.89 6.99c0 5.44-4.42 9.81-9.86 9.81zm5.42-7.37c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.66.15-.19.3-.76.97-.93 1.17-.17.2-.34.23-.64.08-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.66-1.59-.91-2.18-.24-.57-.49-.49-.66-.5h-.57c-.2 0-.53.07-.8.38-.27.3-1.03 1-1.03 2.44 0 1.44 1.06 2.84 1.21 3.03.15.2 2.08 3.17 5.03 4.45.7.3 1.24.47 1.66.6.7.22 1.34.19 1.84.12.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.28-.2-.58-.35z" />
                    </svg>
                </div>
                <span class="text-xl">احجز الآن عبر واتساب</span>
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
@keyframes shimmer {
    100% { transform: translateX(250%); }
}

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