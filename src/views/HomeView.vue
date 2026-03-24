<script setup>
import HeroSection from '@/components/home_sections/HeroSection.vue'
import ServicesSection from '@/components/home_sections/ServicesSection.vue'
import MarketingFlight from '@/components/home_sections/MarketingFlight.vue'
import MarketingHotel from '@/components/home_sections/MarketingHotel.vue'
import MarketingVisa from '@/components/home_sections/MarketingVisa.vue'
import LatestPackages from '@/components/home_sections/LatestPackages.vue'
</script>

<template>
  <div>
    <div class="reveal-up" style="--reveal-delay: 0s;">
      <HeroSection />
    </div>
    <div class="reveal-up" style="--reveal-delay: 0.08s;">
      <ServicesSection />
    </div>
    <div class="reveal-up" style="--reveal-delay: 0.16s;">
      <MarketingFlight />
    </div>
    <div class="reveal-up" style="--reveal-delay: 0.24s;">
      <MarketingHotel />
    </div>
    <div class="reveal-up" style="--reveal-delay: 0.32s;">
      <MarketingVisa />
    </div>
    <div class="reveal-up" style="--reveal-delay: 0.4s;">
      <LatestPackages />
    </div>
  </div>
</template>