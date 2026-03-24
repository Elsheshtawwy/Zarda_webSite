<script setup>
import { computed, ref, watch } from 'vue'
import { cityOptions } from '@/data/cities'

const TRAVEL_WHATSAPP = '218915461666'

const booking = ref({
  tripType: 'round-trip',
  from: '',
  to: '',
  departDate: '',
  returnDate: ''
})

const showFromSuggestions = ref(false)
const showToSuggestions = ref(false)

const today = new Date().toISOString().split('T')[0]

const returnMinDate = computed(() => booking.value.departDate || today)
const needsReturnDate = computed(() => booking.value.tripType === 'round-trip')

const normalize = (value) => (value || '').trim().toLowerCase()

const fromSuggestions = computed(() => {
  const query = normalize(booking.value.from)
  if (query.length < 2) return []

  return cityOptions
    .filter((city) => normalize(city).startsWith(query))
    .filter((city) => city !== booking.value.to)
    .slice(0, 8)
})

const toSuggestions = computed(() => {
  const query = normalize(booking.value.to)
  if (query.length < 2) return []

  return cityOptions
    .filter((city) => normalize(city).startsWith(query))
    .filter((city) => city !== booking.value.from)
    .slice(0, 8)
})

const selectSuggestedCity = (field, city) => {
  booking.value[field] = city
  if (field === 'from') showFromSuggestions.value = false
  if (field === 'to') showToSuggestions.value = false
}

const hideSuggestionsDelayed = (field) => {
  setTimeout(() => {
    if (field === 'from') showFromSuggestions.value = false
    if (field === 'to') showToSuggestions.value = false
  }, 120)
}

watch(needsReturnDate, (isRoundTrip) => {
  if (!isRoundTrip) {
    booking.value.returnDate = ''
  }
})

const isValid = computed(() => {
  if (!booking.value.from || !booking.value.to || !booking.value.departDate) {
    return false
  }

  if (!needsReturnDate.value) {
    return true
  }

  if (!booking.value.returnDate) {
    return false
  }

  return booking.value.returnDate >= booking.value.departDate
})

const submitBooking = () => {
  if (!isValid.value) return

  const message = [
    'مرحباً، أرغب بحجز رحلة ✈️',
    `نوع الرحلة: ${needsReturnDate.value ? 'ذهاب وعودة' : 'ذهاب فقط'}`,
    `من: ${booking.value.from}`,
    `إلى: ${booking.value.to}`,
    `تاريخ الذهاب: ${booking.value.departDate}`
  ].join('\n')

  const finalMessage = needsReturnDate.value
    ? `${message}\nتاريخ العودة: ${booking.value.returnDate}`
    : message

  const encoded = encodeURIComponent(finalMessage)
  window.open(`https://wa.me/${TRAVEL_WHATSAPP}?text=${encoded}`, '_blank')
}
</script>

<template>
  <section class="min-h-screen pt-32 pb-20 bg-slate-50 relative overflow-hidden">
    <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-gradient-to-r from-primary/15 via-cyan-200/20 to-accent/15 blur-3xl pointer-events-none"></div>

    <div class="max-w-6xl mx-auto px-4">
      <div class="text-center mb-12 reveal-up">
        <span class="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-primary/10 text-primary text-sm font-bold ring-1 ring-primary/20">
          حجز رحلتك بخطوات بسيطة
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mt-5 mb-4">
          اختر رحلتك الآن
        </h1>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          ادخل تفاصيل رحلتك وسيتواصل معك فريقنا مباشرة لتأكيد أفضل سعر متاح.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
        <div class="lg:col-span-3 bg-white rounded-3xl border border-gray-100 shadow-xl p-6 md:p-8 reveal-up" style="--reveal-delay: 0.08s;">
          <h2 class="text-2xl font-extrabold text-gray-800 mb-1">بيانات الرحلة</h2>
          <p class="text-sm text-gray-500 mb-8">املأ الحقول التالية لإرسال طلب الحجز.</p>

          <div class="mb-6">
            <span class="block text-sm font-bold text-gray-700 mb-2">نوع الرحلة</span>
            <div class="grid grid-cols-2 rounded-2xl bg-gray-100 p-1 ring-1 ring-gray-200 gap-1 max-w-md">
              <button
                type="button"
                @click="booking.tripType = 'one-way'"
                :class="booking.tripType === 'one-way' ? 'bg-white text-primary shadow-sm ring-1 ring-primary/20' : 'text-gray-600 hover:text-gray-800 hover:bg-white/70'"
                class="px-4 py-2.5 rounded-xl text-sm font-bold transition text-center"
              >
                ذهاب فقط
              </button>
              <button
                type="button"
                @click="booking.tripType = 'round-trip'"
                :class="booking.tripType === 'round-trip' ? 'bg-white text-primary shadow-sm ring-1 ring-primary/20' : 'text-gray-600 hover:text-gray-800 hover:bg-white/70'"
                class="px-4 py-2.5 rounded-xl text-sm font-bold transition text-center"
              >
                ذهاب وعودة
              </button>
            </div>
            <p class="text-xs text-gray-500 mt-2">اختر نوع الرحلة قبل تحديد التواريخ.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <label class="block relative">
              <span class="block text-sm font-bold text-gray-700 mb-2">من</span>
              <input
                v-model="booking.from"
                type="text"
                placeholder="مثال: بنغازي"
                autocomplete="off"
                @focus="showFromSuggestions = true"
                @blur="hideSuggestionsDelayed('from')"
                class="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />

              <ul
                v-if="showFromSuggestions && fromSuggestions.length"
                class="absolute z-20 mt-2 w-full rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden"
              >
                <li v-for="city in fromSuggestions" :key="`from-${city}`">
                  <button
                    type="button"
                    @mousedown.prevent="selectSuggestedCity('from', city)"
                    class="w-full text-right px-4 py-2.5 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary transition"
                  >
                    {{ city }}
                  </button>
                </li>
              </ul>
            </label>

            <label class="block relative">
              <span class="block text-sm font-bold text-gray-700 mb-2">إلى</span>
              <input
                v-model="booking.to"
                type="text"
                placeholder="مثال: إسطنبول"
                autocomplete="off"
                @focus="showToSuggestions = true"
                @blur="hideSuggestionsDelayed('to')"
                class="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />

              <ul
                v-if="showToSuggestions && toSuggestions.length"
                class="absolute z-20 mt-2 w-full rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden"
              >
                <li v-for="city in toSuggestions" :key="`to-${city}`">
                  <button
                    type="button"
                    @mousedown.prevent="selectSuggestedCity('to', city)"
                    class="w-full text-right px-4 py-2.5 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary transition"
                  >
                    {{ city }}
                  </button>
                </li>
              </ul>
            </label>

            <label class="block">
              <span class="block text-sm font-bold text-gray-700 mb-2">تاريخ الذهاب</span>
              <input
                v-model="booking.departDate"
                type="date"
                :min="today"
                class="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </label>

            <label v-if="needsReturnDate" class="block">
              <span class="block text-sm font-bold text-gray-700 mb-2">تاريخ العودة</span>
              <input
                v-model="booking.returnDate"
                type="date"
                :min="returnMinDate"
                class="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </label>
          </div>

          <p v-if="needsReturnDate && booking.returnDate && booking.departDate && booking.returnDate < booking.departDate" class="mt-4 text-sm font-bold text-red-500">
            تاريخ العودة يجب أن يكون بعد تاريخ الذهاب.
          </p>

          <button
            @click="submitBooking"
            :disabled="!isValid"
            class="mt-8 w-full rounded-2xl bg-gradient-to-r from-primary to-cyan-600 hover:from-cyan-600 hover:to-primary text-white font-extrabold py-4 px-6 transition-all shadow-lg shadow-primary/30 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            إرسال طلب الحجز عبر واتساب
          </button>
        </div>

        <aside class="lg:col-span-2 bg-secondary text-white rounded-3xl border border-white/10 shadow-2xl p-6 md:p-8 relative overflow-hidden reveal-up" style="--reveal-delay: 0.16s;">
          <div class="absolute -top-16 -left-14 w-44 h-44 rounded-full bg-white/10 blur-2xl"></div>
          <div class="absolute -bottom-20 -right-16 w-52 h-52 rounded-full bg-accent/25 blur-2xl"></div>

          <div class="relative z-10">
            <h3 class="text-2xl font-extrabold mb-4">لماذا الحجز معنا؟</h3>
            <ul class="space-y-4 text-blue-100">
              <li class="flex items-start gap-3">
                <span class="mt-0.5 text-accent">●</span>
                <span>متابعة سريعة من فريق الحجوزات خلال دقائق.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 text-accent">●</span>
                <span>أفضل خيارات أسعار حسب وجهتك وموعد سفرك.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 text-accent">●</span>
                <span>دعم كامل قبل الحجز وبعد التأكيد.</span>
              </li>
            </ul>

            <div class="mt-8 rounded-2xl bg-white/10 ring-1 ring-white/20 p-5 backdrop-blur-sm">
              <p class="text-sm text-blue-100">خط خدمة الحجوزات</p>
              <p dir="ltr" class="text-2xl font-extrabold tracking-wider mt-1">091 546 1666</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>
