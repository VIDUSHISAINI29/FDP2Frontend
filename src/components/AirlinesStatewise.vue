<script setup>
import { onMounted, ref } from 'vue';
import axios from "axios"
import { color } from 'echarts';


const airlinesStateWise = ref(null);
const optionsAirlinesStateWise = ref(null);

const fetchData = async(url) =>{
    try {
        const result = await axios.get(url);
        return result.data;
    } catch (error) {
        console.error('error in fetching airlines statewise using api', error);
        
    }
}
async function loadData(){
    airlinesStateWise.value =  await fetchData(`${import.meta.env.VITE_BACKEND_URL}/airlines-state-wise`);
}
async function graphAirlinesStateWise(){
    const x_data = airlinesStateWise.value.map(airline => airline.STATE)
    const y_data = airlinesStateWise.value.map(airline => airline.AIRLINES_COUNT)
 
    console.log(x_data);
    console.log(y_data);
    
    optionsAirlinesStateWise.value = {
      title:{
        text: 'Airlines Per State',
        padding:20, 
        left: 'center',
      },
      grid: {
      left: '13%',     // Adjust this value to increase/decrease space on the left
      right: '2%',    // Adjust this to remove extra space on the right
      top: '15%',     // Adjust top space if necessary
      bottom: '15%',  // Adjust bottom space if necessary
      containLabel: true,  // Ensures labels are contained within the grid
    },
  xAxis: {
    type: 'category',
    data: x_data,
    name: 'States',
    nameLocation: "middle",
    nameGap : 35,
    nameTextStyle: {
      color:'#115b4d',
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
    name: 'Number of Airlines',
    nameLocation: 'middle',
    nameGap:50,
    nameTextStyle:{
      color:'#115b4d',
      fontSize:14,
      fontWeight:'bold',
    },
  },
  series: [
    {
      data: y_data,
      type: 'line',
      symbol: 'star',
      symbolSize: 10,
      lineStyle: {
        color: '#115b4d',
        width: 3,
        type: 'dashed'
      },
      itemStyle: {
        borderWidth: 1,
        borderColor: '#FF7F50',
        color: '#FF7F50'
      },
      areaStyle:{
         color: "#115b4d",    // Area color with transparency
         opacity: 0.2
      },
    }
  ]
}
}

function resizeChart() {
  if (chartInstance.value) {
    chartInstance.value.resize();
  }
}
onMounted( async() => {
    await loadData()
    await graphAirlinesStateWise()
    window.addEventListener('resize', resizeChart);
})
</script>

<template>
   <div class="tw-flex tw-flex-col tw-justify-center tw-w-full tw-items-center tw-pt-10">
        <div class="tw-m-3 tw-flex-col tw-bg-white tw-text-[#1d7474] tw-flex  tw-items-center tw-justify-center tw-rounded-2xl tw-shadow-2xl tw-w-[97%]  lg:tw-w-[900px] md:tw-w-[750px] tw-gap-3">
            <span class="sm:tw-text-lg tw-text-base tw-font-semibold tw-pt-6 tw-px-6">Graph Showing Number of Airlines Delayed  by the States 
            <span class="tw-text-[#FF7F50]">TX</span> has <span class="tw-text-[#FF7F50]">largest (13)</span> number of flights. </span>
            <span class="tw-block tw-font-bold tw-text-2xl">***</span>
        </div>
        <div
               class="tw-m-3 tw-bg-white tw-text-[#1d7474] tw-flex tw-w-[97%] tw-items-center tw-justify-center tw-rounded-2xl tw-shadow-2xl md:tw-w-[750px] lg:tw-w-[900px]">
               <v-chart
                  class="tw-h-[340px] md:tw-h-[390px] lg:tw-h-[440px] tw-w-11/12  xs:tw-w-[440px] sm:tw-w-[630px] md:tw-w-full"
                  :option="optionsAirlinesStateWise"></v-chart>
            </div>
    </div>

   
</template>

<style scoped></style>
