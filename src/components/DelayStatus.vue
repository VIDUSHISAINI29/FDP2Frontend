<script setup>
import axios from "axios"
import { onMounted, ref, watch } from "vue";
import Select from "primevue/select";
import * as echarts from 'echarts';


const delayStatusData = ref(null);
const delayStatusOptions = ref(null);
const splittedAirline = ref(null);

const fetchDelayStatus = async (url) => {
    try {
        const result = await axios.get(url);
        return result.data;
    } catch (error) {
        console.error("error in fetching Delay Status from Api", error);
        
    }
}
let i = 0;
let dataAxis = []
let data = []
async function loadData(){
    delayStatusData.value = await fetchDelayStatus(`${import.meta.env.VITE_BACKEND_URL}/delay-status`);
   
    for( i = 0; i < 9 ; i++){
        splittedAirline.value = delayStatusData.value[i].AIRLINE_1.split(' ')[0]
        dataAxis.push(splittedAirline.value )
        data.push(delayStatusData.value[i].Late_Arrivals)
    }
    
    
}


let yMax = 500;
let dataShadow = [];
for (let i = 0; i < data.length; i++) {
  dataShadow.push(yMax);
}

const graphOfDelayStatus = async() => {
    delayStatusOptions.value =  {
  title: {
    text: 'Delay Status of airlines',
    padding: 20,
    left: 'center',
  },
  grid: {
      left: '5%',     // Adjust this value to increase/decrease space on the left
      right: '1%',    // Adjust this to remove extra space on the right
      top: '15%',     // Adjust top space if necessary
      bottom: '15%',  // Adjust bottom space if necessary
      containLabel: true,  // Ensures labels are contained within the grid
    },
  xAxis: {
    data: dataAxis,
    show:true,
    inside:true,
    name: 'Airlines',  // Label for X-axis
    nameLocation: 'middle', // Position of the label (top, middle, end)
    nameGap: 40,            // Gap between the axis and label
    nameTextStyle: {
      color: '#115b4d',
      fontSize: 14,
      fontWeight: 'bold',
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    z: 10
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
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#999'
    },
    name: 'Count of Delayed Flights', 
    nameLocation: 'middle', // Position of the label (top, middle, end)
    nameGap: 65,            // Gap between the axis and label
    nameTextStyle: {
      color: '#115b4d',
      fontSize: 14,
      fontWeight: 'bold',
    },
  },
  dataZoom: [
    {
      type: 'inside'
    }
  ],
  series: [
    {
      type: 'bar',
      showBackground: true,
      barWidth: 50,
      barCategoryGap:'50',
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#FF7F50' },
          { offset: 0.5, color: '#008080' },
          { offset: 1, color: '#115b4d' }
        ])
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#115b4d' },
            { offset: 0.7, color: '#008080' },
            { offset: 1, color: '#FF7F50' }
          ])
        }
      },
      data: data,
      label: {  // Add labels on top of bars
        show: true,
        position: 'top',  // Position labels on top
        color: '#fff',     // Label color
        fontSize: 12,
        fontWeight: 'bold',
        color: '#115b4d'
      }
    }
  ]
};

}

// Enable data zoom when user click bar.
// const zoomSize = 6;
// myChart.on('click', function (params) {
//   console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
//   myChart.dispatchAction({
//     type: 'dataZoom',
//     startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
//     endValue:
//       dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
//   });
// });

onMounted(async() => {
    await loadData()
    await graphOfDelayStatus()
});
</script>
<template>

    <div class="tw-flex tw-flex-col tw-justify-center tw-w-full tw-items-center tw-pt-10">
        <div class="tw-m-3 tw-flex-col tw-bg-white tw-text-[#1d7474] tw-flex tw-w-[97%]  lg:tw-w-[900px] md:tw-w-[750px] tw-items-center tw-justify-center tw-rounded-2xl tw-shadow-2xl  tw-gap-3">
            <span class="sm:tw-text-lg tw-text-base tw-font-semibold tw-pt-6 tw-px-6">Graph Showing Number of Flights Delayed  by the airline 
            <span class="tw-text-[#FF7F50]">Southwest Airlines Inc. </span>has <span class="tw-text-[#FF7F50]">largest</span> number of delayed flights, on the contrary  <span class="tw-text-[#FF7F50]">Virgin Airlines Inc. </span> has  <span class="tw-text-[#FF7F50]">smallest</span> number of delayed flights </span>
            <span class="tw-block tw-font-bold tw-text-2xl">***</span>
        </div>
        <div
               class="tw-m-3 tw-bg-white tw-text-[#1d7474] tw-flex tw-w-[97%] tw-items-center tw-justify-center tw-rounded-2xl tw-shadow-2xl md:tw-w-[750px] lg:tw-w-[900px]">
               <v-chart
                  class="tw-h-[340px] md:tw-h-[390px] lg:tw-h-[440px] tw-w-11/12  xs:tw-w-[440px] sm:tw-w-[630px] md:tw-w-full"
                  :option="delayStatusOptions"></v-chart>
            </div>
    </div>

</template>