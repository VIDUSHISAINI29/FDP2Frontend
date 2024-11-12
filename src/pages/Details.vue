<script setup>
import { onMounted, ref } from "vue";
import Navbar from "@/layout/Navbar.vue";
import Footer from "@/layout/Footer.vue";
import Select from "primevue/select";
import axios from "axios";

const selectedFlight = ref();
const flightsNumber = ref([]);
const result = ref(null);
let i = 0;

const fetchFlightsData = async (url) => {
   try {
      const result = await axios.get(url);
      return result.data;
   } catch (error) {
      console.error("error in fetching data of flights", error);
   }
};
async function loadData() {
   result.value = await fetchFlightsData(
      `${import.meta.env.VITE_BACKEND_URL}/flights-info`,
   );
   for (i = 0; i < result.value.length; i++) {
      flightsNumber.value.push(result.value[i].flightNumber);
   }
   console.log("result = ", result.value);
}
onMounted(async () => {
   await loadData();
});
</script>

<template>
   <div class="main_container tw-flex tw-select-none tw-flex-col">
      <div
         class="bghero2 tw-h-[132vh] tw-w-full tw-bg-cover tw-bg-fixed tw-bg-no-repeat md:tw-h-[142vh]">
         <div
            class="tw-flex tw-h-[132vh] tw-w-full tw-flex-col tw-items-center tw-bg-gradient-to-bl tw-from-[#ffffff9b] tw-to-[#0000006f] md:tw-h-[142vh]">
            <Navbar />
            <div class="tw-my-10">
               <Select
                  v-model="selectedFlight"
                  :options="flightsNumber"
                  placeholder="Select Flight Number"
                  class="w-full md:tw-w-56" />
            </div>
            <div class="tw-bg-white tw-opacity-70 tw-rounded-lg tw-p-2 tw-w-3/5">
                <span class="tw-text-[#115b4d] tw-font-bold" style="color: rgba(17, 91, 77, 1);">Vidushi Saini</span>
                <span class="tw-text-[#ff6f4b] tw-font-bold" style="color: rgba(255, 111, 75, 1);">Vidushi Saini</span>
            </div>
            <!-- # Page 1 -->
         </div>
      </div>

      <Footer />
   </div>
</template>

<style scoped>
.bghero {
   background-image: url("/Images/fourFlights.jpg");
}
.bghero2 {
   background-image: url("/Images/oneFlight.jpg");
}
.bghero3 {
   background-image: url("/Images/flight3.webp");
}
</style>
