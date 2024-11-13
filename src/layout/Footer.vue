<script setup>
import { ref } from 'vue';

const fotterArray = ref(['About Us', 'Careers', 'Press releases', 'Sponsorship', 'Sustainability', 'Environmental']);

</script>
<template>
    <div class="tw-w-full tw-bg-[#115b4d] tw-flex tw-flex-col tw-gap-10 tw-items-center tw-justify-center">
        <div class="tw-w-4/5  tw-p-1 tw-flex tw-justify-around tw-flex-wrap md:tw-mt-10">
            <div v-for="n in 1" class="tw-flex tw-flex-col ">
                <span class="tw-text-base tw-font-bold tw-text-white hover:tw-text-[#ff6f4b] tw-transition-all tw-duration-700 tw-cursor-pointer hover:tw-underline">US Airways</span>
                <span v-for="(item, index) in fotterArray" :key="index" class="tw-text-[12px] tw-text-white hover:tw-text-[#ff6f4b] tw-transition-all tw-duration-700 tw-cursor-pointer ">{{item}}</span>
            </div>
            <div v-for="n in 2" class="md:tw-flex tw-hidden tw-flex-col ">
                <span class="tw-text-base tw-font-bold tw-text-white hover:tw-text-[#ff6f4b] tw-transition-all tw-duration-700 tw-cursor-pointer hover:tw-underline">US Airways</span>
                <span v-for="(item, index) in fotterArray" :key="index" class="tw-text-[12px] tw-text-white hover:tw-text-[#ff6f4b] tw-transition-all tw-duration-700 tw-cursor-pointer ">{{item}}</span>
            </div>
     
            <div class="tw-flex tw-flex-col tw-gap-2 tw-mt-10 md:tw-mt-0 md:tw-p-10">
                <span class="tw-text-white tw-text-[13px]">Let's Stay Connected</span>
                <div class="tw-flex tw-gap-3">
                    <i class="ri-facebook-fill tw-border  hover:tw-border-[#ff6f4b] hover:tw-text-[#ff6f4b] tw-transition-all tw-duration-700 tw-rounded-[50%] tw-w-8 tw-h-8 tw-flex tw-justify-center tw-items-center tw-text-white tw-border-white tw-cursor-pointer"></i>
                    <i class="ri-instagram-line tw-border   hover:tw-border-[#ff6f4b] hover:tw-text-[#ff6f4b] tw-transition-all tw-duration-700 tw-rounded-[50%] tw-w-8 tw-h-8 tw-flex tw-justify-center tw-items-center tw-text-white tw-border-white tw-cursor-pointer"></i>
                    <i class="ri-linkedin-fill tw-border  hover:tw-border-[#ff6f4b] hover:tw-text-[#ff6f4b] tw-transition-all tw-duration-700 tw-rounded-[50%] tw-w-8 tw-h-8 tw-flex tw-justify-center tw-items-center tw-text-white tw-border-white tw-cursor-pointer"></i>
                </div>
            </div>
        </div> 
        <div class="tw-w-full tw-bg-gray-900 tw-p-4 tw-text-center">
            <span class="tw-text-white tw-text-[13px]" >Copyright &copy; 2024 US Airways. All Rights Reserved. Terms of Use</span>
        </div>
        </div>
</template>