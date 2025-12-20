<script setup>
import { ref, computed } from 'vue'

import locationIcon from '@/assets/icons/location.png'
import phoneIcon from '@/assets/icons/phone.png'
import ticketIcon from '@/assets/icons/ticket.png'
import hotelIcon from '@/assets/icons/hotel.png'

const MAIN_WHATSAPP = '218915461666'
const HOTEL_WHATSAPP = '218925461666'

const ticketNumbers = ['091 546 1666', '091 746 1666', '091 846 1666', '091 946 1666']
const hotelNumbers = ['092 546 1666', '092 746 1666', '092 846 1666', '092 946 1666']

const form = ref({
  name: '',
  category: 'استفسار عام', 
  message: ''
})

const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3436.423977322975!2d20.0833!3d32.1000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDA2JzAwLjAiTiAyMMKwMDUnMDAuMCJF!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s&q=33MR+2J4,+Benghazi,+Libya"

const sendToWhatsApp = () => {
  let targetNumber = MAIN_WHATSAPP
  
  if (form.value.category === 'حجز فنادق / تأشيرات') {
    targetNumber = HOTEL_WHATSAPP
  }

  const text = `مرحباً، أنا ${form.value.name || 'زبون'}.%0A` +
               `بخصوص: ${form.value.category}%0A` +
               `الرسالة: ${form.value.message}`
  
  window.open(`https://wa.me/${targetNumber}?text=${text}`, '_blank')
}

const isValid = computed(() => form.value.message.length > 0)
</script>

<template>
  <div class="min-h-screen bg-gray-50 pt-32 pb-20 font-sans">
    
    <div class="max-w-7xl mx-auto px-4">
      
      <div class="text-center mb-12">
        <h1 class="text-4xl font-extrabold text-gray-900 mb-4">تواصل معنا 💬</h1>
        <p class="text-gray-500 text-lg">فريقنا جاهز لخدمتك عبر واتساب أو الاتصال المباشر.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        <div class="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-2 bg-primary"></div>

          <div class="flex items-center gap-3 mb-6">
            <div class="bg-blue-50 p-3 rounded-full">
              <div class="w-8 h-8 bg-primary" :style="`-webkit-mask-image: url(${phoneIcon}); mask-image: url(${phoneIcon}); -webkit-mask-size: contain; mask-size: contain; -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat; -webkit-mask-position: center;`"></div>
            </div>
            <h3 class="text-2xl font-bold text-gray-800">محادثة مباشرة</h3>
          </div>

          <div class="space-y-4">
            <div>
              <label class="block text-gray-600 mb-2 font-bold text-sm">الاسم (اختياري)</label>
              <input v-model="form.name" type="text" placeholder="اكتب اسمك هنا" class="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition">
            </div>

            <div>
              <label class="block text-gray-600 mb-2 font-bold text-sm">نوع الاستفسار</label>
              <select v-model="form.category" class="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition cursor-pointer">
                <option value="استفسار عام">استفسار عام</option>
                <option value="حجز تذاكر طيران">حجز تذاكر طيران</option>
                <option value="حجز فنادق / تأشيرات">حجز فنادق / تأشيرات</option>
              </select>
            </div>

            <div>
              <label class="block text-gray-600 mb-2 font-bold text-sm">الرسالة</label>
              <textarea v-model="form.message" rows="4" placeholder="كيف يمكننا مساعدتك اليوم؟" class="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"></textarea>
            </div>

            <button 
              @click="sendToWhatsApp" 
              :disabled="!isValid"
              class="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition shadow-lg shadow-green-100 hover:-translate-y-1"
            >
              <span>إرسال عبر واتساب</span>
            </button>
            <p class="text-center text-xs text-gray-400 mt-2">سيتم توجيهك للموظف المختص مباشرة</p>
          </div>
        </div>

        <div class="space-y-6">
          
          <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
            <div class="bg-orange-50 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
              <div class="w-6 h-6 bg-accent" :style="`-webkit-mask-image: url(${locationIcon}); mask-image: url(${locationIcon}); -webkit-mask-size: contain; mask-size: contain; -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat; -webkit-mask-position: center;`"></div>
            </div>
            <div>
              <div class="text-sm text-gray-500 font-bold mb-1">المقر الرئيسي</div>
              <div class="font-bold text-gray-800 leading-relaxed text-sm">
                شارع دبي - مقابل للباب الخلفي للمنتزه <br>
                مدخل قاعة بنغازي للمناسبات - بنغازي، ليبيا
              </div>
            </div>
          </div>

          <div class="bg-white p-6 rounded-2xl shadow-sm border border-blue-100">
            <div class="flex items-center gap-3 mb-4 border-b border-gray-100 pb-3">
              <div class="bg-blue-50 w-10 h-10 rounded-full flex items-center justify-center">
                <div class="w-5 h-5 bg-primary" :style="`-webkit-mask-image: url(${ticketIcon}); mask-image: url(${ticketIcon}); -webkit-mask-size: contain; mask-size: contain; -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat; -webkit-mask-position: center;`"></div>
              </div>
              <h4 class="font-bold text-lg text-primary">قسم التذاكر (091)</h4>
            </div>
            <div class="grid grid-cols-2 gap-3" dir="ltr">
              <a v-for="num in ticketNumbers" :key="num" :href="`tel:${num.replace(/\s/g, '')}`" class="text-center py-2 px-3 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-primary transition text-gray-700 font-bold text-sm border border-transparent hover:border-blue-100">
                {{ num }}
              </a>
            </div>
          </div>

          <div class="bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
            <div class="flex items-center gap-3 mb-4 border-b border-gray-100 pb-3">
              <div class="bg-orange-50 w-10 h-10 rounded-full flex items-center justify-center">
                <div class="w-5 h-5 bg-accent" :style="`-webkit-mask-image: url(${hotelIcon}); mask-image: url(${hotelIcon}); -webkit-mask-size: contain; mask-size: contain; -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat; -webkit-mask-position: center;`"></div>
              </div>
              <h4 class="font-bold text-lg text-accent">قسم الفنادق والتأشيرات (092)</h4>
            </div>
            <div class="grid grid-cols-2 gap-3" dir="ltr">
              <a v-for="num in hotelNumbers" :key="num" :href="`tel:${num.replace(/\s/g, '')}`" class="text-center py-2 px-3 bg-gray-50 rounded-lg hover:bg-orange-50 hover:text-accent transition text-gray-700 font-bold text-sm border border-transparent hover:border-orange-100">
                {{ num }}
              </a>
            </div>
          </div>

          <div class="bg-white p-2 rounded-3xl shadow-lg border border-gray-100 h-[250px] overflow-hidden">
            <iframe 
              :src="mapSrc" 
              width="100%" 
              height="100%" 
              style="border:0; border-radius: 1rem;" 
              allowfullscreen="" 
              loading="lazy"
              class="grayscale hover:grayscale-0 transition duration-700"
            ></iframe>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>