<script setup>
import axios from "axios";
import { onMounted, ref, watch } from "vue";
import Select from "primevue/select";
import { color } from "echarts";


const selectedAirline = ref(null)
const airlineParams = ref(null)

const airlines = ref(["American Airlines Inc.", "Delta Air Lines Inc.", "Atlantic Southeast Airlines","Skywest Airlines Inc.", "JetBlue Airways",  "Hawaiian Airlines Inc."
]);

const flightPerAirline = ref(null);
const flightPerAirlineDisplay = ref(null);
const airlineDisplay = ref(null);
const delayStatus = ref(null);
const flightsPerAirlineOptions = ref(null);
let x_data = []
let i = 0

const fetchFlightPerAirlne = async (url) => {
   try {
      const result = await axios.get(url);
      return result.data;
   } catch (error) {
      console.log("error in fetching data from api of flights per airline", error);
   }
};
async function loadData() {
   // console.log('selectedAirline= = ', selectedAirline.value);

   // airlineParams.value = {
   //    airline: selectedAirline.value || 'Skywest Airlines Inc.',
   // };
   // console.log('airlineParams:', airlineParams.value);

   
   flightPerAirline.value = await fetchFlightPerAirlne(
      `${import.meta.env.VITE_BACKEND_URL}/flights-per-airline`
   );
   console.log('real kaam', flightPerAirline.value);

   for( i = 0; i < 9 ; i++){
      x_data = flightPerAirline.value.map(airline => airline.AIRLINE_1.split(' ')[0])
    }
   
}

const graphOfFlightsPerAirline = async () => {

   // const x_data = flightPerAirline.value.map(airline => airline.AIRLINE_1)
   const y_data = flightPerAirline.value.map(airline => airline.tail_number_count)
   const combinedData = x_data.map((x_value, index) => [x_value, y_data[index]])
   console.log('x_data = ', combinedData);
   
    flightsPerAirlineOptions.value = 
    {
      title: {
    text: 'Flights Ownded by Airlines',
    padding: 20,
    left: 'center',
  

  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: x_data,
    name: "Airlines",
    nameLocation: "middle",
    nameGap: 40,            // Gap between the axis and label
    nameTextStyle: {
      color: '#115b4d',
      fontSize: 14,
      fontWeight: 'bold',
    },
  },
  axisPointer: {
    show: "true",
z: 50,
type: "line",
snap: false,
triggerTooltip: true,
triggerEmphasis: true,
value: null,
status: null,
animation: null,
animationDurationUpdate: 200
  },
  yAxis: {
    type: 'value',
    name: 'No. of Flights', 
    nameLocation: 'middle', // Position of the label (top, middle, end)
    nameGap: 65,            // Gap between the axis and label
    nameTextStyle: {
      color: '#115b4d',
      fontSize: 14,
      fontWeight: 'bold',
    },
   
  },
  series: [
    {
      border:"#115b4d",
      type: 'line',
      data:y_data,
      label: {  // Add labels on top of bars
        show: true,
        position: 'top',  // Position labels on top
        color: '#fff',     // Label color
        fontSize: 12,
        fontWeight: 'bold',
        color: '#115b4d'

      },
      itemStyle:{
         color:"#115b4d"
      },
      lineStyle: {
        color: "#115b4d",     // Line border color
        width: 2,              // Line border width
        type: 'solid'          // Line type: solid, dashed, or dotted
      },
      areaStyle:{
         color: "#115b4d",    // Area color with transparency
         opacity: 0.2
      },
    }
  ]
}
}



onMounted(async () => {
    await loadData()
    await graphOfFlightsPerAirline()
});


</script>

<template>
   <div class="tw-flex tw-flex-col tw-items-center  tw-justify-center tw-p-2 tw-text-lg tw-text-white">
      <div class="tw-m-3 tw-flex-col tw-bg-white tw-mt-10 tw-text-[#1d7474] tw-flex tw-w-full tw-items-center tw-justify-center tw-rounded-2xl tw-shadow-2xl md:tw-w-[900px] tw-gap-3">
            <span class="tw-text-lg tw-font-semibold tw-pt-6 tw-px-6">Graph Showing Number of Flights Owned  by the Airline 
            <span class="tw-text-[#FF7F50]">American Airlines Inc. </span>owns <span class="tw-text-[#FF7F50]">largest</span>  number (1044) of flights, on the contrary  <span class="tw-text-[#FF7F50]">Hawaiian Airlines Inc.</span> owns  <span class="tw-text-[#FF7F50]">smallest</span> number (50) of flights.</span>
            <span class="tw-block tw-font-bold tw-text-2xl">***</span>
        </div>
      <div
               class="tw-m-3 tw-bg-white tw-text-[#1d7474] tw-flex tw-w-full tw-items-center tw-justify-center tw-rounded-2xl tw-shadow-2xl md:tw-w-[900px]">
               <v-chart
                  class="tw-h-[340px] md:tw-h-[450px]"
                  :option=" flightsPerAirlineOptions"></v-chart>
            </div>
     
   </div>
</template>

<style scoped></style>
