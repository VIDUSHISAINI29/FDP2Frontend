<script setup>
import Navbar from '@/layout/Navbar.vue'
import FlightsPerAirline from '@/components/FlightsPerAirline.vue'
import DelayStatus from '@/components/DelayStatus.vue'


</script>

<template>
   <div class="main_container tw-flex tw-flex-col tw-select-none">
  
      <div class="bghero2 tw-h-[132vh] tw-w-full tw-bg-cover tw-bg-fixed tw-bg-no-repeat">
  <div class="tw-w-full tw-h-[132vh] tw-flex tw-flex-col tw-items-center tw-bg-gradient-to-bl tw-from-[#ffffff9b] tw-to-[#0000006f]">
   <Navbar />
<DelayStatus  />
   
  <!-- # Page 1 -->
  </div>
</div>

      <div
         class="bghero tw-h-[120vh] tw-w-full tw-bg-red-50 tw-bg-cover tw-bg-fixed tw-bg-no-repeat">
         <div class="tw-w-full tw-h-[120vh]  tw-bg-gradient-to-bl tw-to-[#ffffff9b] tw-from-[#0000006f]">
             <!-- # Page 2 -->
             <FlightsPerAirline />
         </div>
        
      </div>

      <div
         class="bghero3 tw-h-[120vh] tw-w-full tw-bg-red-50 tw-bg-cover tw-bg-fixed tw-bg-no-repeat">
         <div class="tw-w-full tw-h-[120vh] tw-bg-gradient-to-bl tw-from-[#ffffff9b] tw-to-[#0000006f]">
             <!-- # Page 3 -->
             i am vidu 3
         </div>
      </div>
   </div>
   <router-view/>
</template>

<style scoped>
.bghero {
   background-image: url("/Images/fourFlights.jpg");
}
.bghero2 {
   background-image: url("/Images/oneFlight.jpg");
}
.bghero3 {
   background-image: url("/Images/manyFlights.jpg");
}
</style>
