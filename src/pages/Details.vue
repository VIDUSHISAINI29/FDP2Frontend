<script setup>
import { onMounted, ref, watch} from "vue";
import Navbar from "@/layout/Navbar.vue";
import Footer from "@/layout/Footer.vue";
import Select from "primevue/select";
import axios from "axios";
import ContactUs from '@/components/ContactUs.vue'

const selectedFlight = ref(3367) ;
const selectedFlight2 = ref(3367) ;
const flightsNumber = ref([]);
const flightsNumber2 = ref([]);
const result = ref(null);
const delayStatusData = ref(null);
let i = 0;

const tailNumber = ref(null);
const distance = ref(null);
const originAirport = ref(null);
const destinationAirport = ref(null);
const airline = ref(null);
const state = ref(null);
const city = ref(null);

const arrivalDelay = ref(null);
const departureDelay = ref(null);
const arrivalDelayStatus = ref(null);
const departureDelayStatus = ref(null);
const flightNumber2 = ref(null);


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

   delayStatusData.value = await fetchFlightsData(`${import.meta.env.VITE_BACKEND_URL}/check-delay-status`);
   
   for (i = 0; i < delayStatusData.value.length; i++) {
      flightsNumber2.value.push(delayStatusData.value[i].flightNumber);
      console.log(selectedFlight2.value);
      
      if(selectedFlight2.value === delayStatusData.value[i].flightNumber){
         arrivalDelay.value =  delayStatusData.value[i].arrivalDelay ;
         departureDelay.value =  delayStatusData.value[i].departureDelay ;
         arrivalDelayStatus.value =  delayStatusData.value[i].arrival_delay_status ;
         departureDelayStatus.value =  delayStatusData.value[i].departure_delay_status ;
   console.log('delay data',  departureDelayStatus);
         
      }
   }
  
   for (i = 0; i < result.value.length; i++) {
      flightsNumber.value.push(result.value[i].flightNumber);
      if(selectedFlight.value === result.value[i].flightNumber){
         tailNumber.value =  result.value[i].tailNumber ;
         distance.value =  result.value[i].distance ;
         originAirport.value =  result.value[i].airport ;
         destinationAirport.value =  result.value[i].DESTINATION_AIRPORT;
         airline.value =  result.value[i].AIRLINE_1;
         city.value =  result.value[i].CITY;
         state.value =  result.value[i].STATE;
         console.log(result.value[i]);
      }
   }
}

watch(selectedFlight,async(newValue, oldValue) => {
   await loadData()
   console.log('flight number changed from', oldValue, 'to', newValue);
   
})

watch(selectedFlight2,async(newValue, oldValue) => {
   await loadData()
   console.log('flight number changed from', oldValue, 'to', newValue);
   
})


onMounted(async () => {
   await loadData();
   console.log('flight number ', selectedFlight.value);
   
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
            <div class="tw-bg-black tw-opacity-70 tw-rounded-lg tw-p-8 tw-w-[85%] tw-flex ">
            <div class=" tw-flex tw-flex-col tw-w-72 ">
               <span class="tw-text-[#1bc5a6] tw-font-bold tw-text-lg" >Flight Number  </span>
                <span class="tw-text-[#1bc5a6] tw-font-bold tw-text-lg" >Airline  </span>
                <span class="tw-text-[#1bc5a6] tw-font-bold tw-text-lg" >Tail Number  </span>
                <span class="tw-text-[#1bc5a6] tw-font-bold tw-text-lg" >Distance Covered   </span>
                <span class="tw-text-[#1bc5a6] tw-font-bold tw-text-lg" >Origin Airport   </span>
                <span class="tw-text-[#1bc5a6] tw-font-bold tw-text-lg" >Destination Airport  </span>
                <span class="tw-text-[#1bc5a6] tw-font-bold tw-text-lg" >City of Airport  </span>
                <span class="tw-text-[#1bc5a6] tw-font-bold tw-text-lg" >State of Airport  </span>
            </div>
            <div class=" tw-flex tw-flex-col tw-w-28">
               <span class="tw-text-[#1bc5a6] tw-font-bold tw-text-lg" > : </span>
                <span class="tw-text-[#1bc5a6] tw-font-bold tw-text-lg" > : </span>
                <span class="tw-text-[#1bc5a6] tw-font-bold tw-text-lg" >  : </span>
                <span class="tw-text-[#1bc5a6] tw-font-bold tw-text-lg" > :  </span>
                <span class="tw-text-[#1bc5a6] tw-font-bold tw-text-lg" >  : </span>
                <span class="tw-text-[#1bc5a6] tw-font-bold tw-text-lg" >  : </span>
                <span class="tw-text-[#1bc5a6] tw-font-bold tw-text-lg" >   : </span>
                <span class="tw-text-[#1bc5a6] tw-font-bold tw-text-lg" > : </span>
            </div>
            <div class=" tw-flex tw-flex-col">
               <span class="tw-text-[#ff6f4b] tw-font-semibold tw-text-lg" > {{ selectedFlight }}</span>
                <span class="tw-text-[#ff6f4b] tw-font-semibold tw-text-lg" >{{ airline }}</span>
                <span class="tw-text-[#ff6f4b] tw-font-semibold tw-text-lg" >{{ tailNumber }}</span>
                <span class="tw-text-[#ff6f4b] tw-font-semibold tw-text-lg" >{{ distance }} Km</span>
                <span class="tw-text-[#ff6f4b] tw-font-semibold tw-text-lg" >{{ originAirport }}</span>
                <span class="tw-text-[#ff6f4b] tw-font-semibold tw-text-lg" > {{ destinationAirport }}</span>
                <span class="tw-text-[#ff6f4b] tw-font-semibold tw-text-lg" > {{ city }}</span>
                <span class="tw-text-[#ff6f4b] tw-font-semibold tw-text-lg" > {{ state }}</span>
            </div>
            </div>
            <!-- # Page 1 -->


            <div class="tw-my-10">
               <Select
                  v-model="selectedFlight2"
                  :options="flightsNumber2"
                  placeholder="Select Flight Number"
                  class="w-full md:tw-w-56" />
            </div>
            <div class="tw-bg-black tw-opacity-70 tw-rounded-lg tw-p-8 tw-w-[85%] tw-flex tw-flex-col ">
            <div class=" tw-flex">
               <span class="tw-text-[#1bc5a6] tw-font-bold tw-text-lg tw-w-72" >Flight Number  </span>
               <span class="tw-text-[#1bc5a6] tw-font-bold tw-text-lg tw-w-20" > : </span>
               <span class="tw-text-[#ff6f4b] tw-font-semibold tw-text-lg " > {{ selectedFlight2 }}</span>
            </div>
            <div class=" tw-flex  ">
               <span class="tw-text-[#1bc5a6] tw-font-bold tw-text-lg tw-w-72" >Departure Status  </span>
               <span class="tw-text-[#1bc5a6] tw-font-bold tw-text-lg tw-w-20" > : </span>
               <span class="tw-text-[#ff6f4b] tw-font-semibold tw-text-lg " > {{ departureDelayStatus }}</span>
            </div>
            <div class=" tw-flex  ">
               <span class="tw-text-[#1bc5a6] tw-font-bold tw-text-lg tw-w-72" >Departure Delay  </span>
               <span class="tw-text-[#1bc5a6] tw-font-bold tw-text-lg tw-w-20" > : </span>
               <span class="tw-text-[#ff6f4b] tw-font-semibold tw-text-lg " > {{ departureDelay }}</span>
            </div>
            <div class=" tw-flex  ">
               <span class="tw-text-[#1bc5a6] tw-font-bold tw-text-lg tw-w-72" >Arrival Status  </span>
               <span class="tw-text-[#1bc5a6] tw-font-bold tw-text-lg tw-w-20" > : </span>
               <span class="tw-text-[#ff6f4b] tw-font-semibold tw-text-lg " > {{ arrivalDelayStatus }}</span>
            </div>
            <div class=" tw-flex  ">
               <span class="tw-text-[#1bc5a6] tw-font-bold tw-text-lg tw-w-72" >Arrival Delay  </span>
               <span class="tw-text-[#1bc5a6] tw-font-bold tw-text-lg tw-w-20" > : </span>
               <span class="tw-text-[#ff6f4b] tw-font-semibold tw-text-lg " > {{ arrivalDelay }}</span>
            </div>

           
            </div>
         </div>
      </div>
<ContactUs />
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
