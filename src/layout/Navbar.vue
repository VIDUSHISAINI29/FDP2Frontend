<script setup>
import { useGlobalStore } from "@/stores/global";
const global = useGlobalStore();
function displayMenubar() {
   global.isMenuBarVisible = !global.isMenuBarVisible;
   console.log(global.isMenuBarVisible);
}
function displayMenubarFalse() {
   global.isMenuBarVisible = false;
   console.log(global.isMenuBarVisible);
}
</script>

<template>

   <div class="tw-w-full tw-flex tw-flex-col tw-items-center">
    <div class="tw-relative tw-flex tw-w-full tw-flex-col">
            <div
               v-if="global.isMenuBarVisible"
               class="tw-fixed tw-top-0 tw-z-50 tw-flex tw-h-[50%] tw-w-full tw-flex-col tw-gap-4 tw-bg-gradient-to-br tw-from-[#ffaf90]  tw-to-[#56ffe0] tw-p-2 tw-transition-all">
               <div class="tw-flex tw-justify-end">
                  <i
                     @click="displayMenubar"
                     class="cross ri-close-line tw-h-7 tw-w-7 tw-text-center tw-text-3xl tw-text-[#156355]"></i>
               </div>
               <div
                  class="tw-flex tw-w-full tw-flex-col tw-gap-4 tw-items-center tw-justify-center">
                  <router-link to="/home"
                     class="tw-w-full tw-border-b-2 tw-border-[#156355] tw-p-2 tw-text-center tw-text-lg tw-font-bold tw-leading-none tw-text-[#156355] sm:tw-text-xl">
                     Home
                  </router-link>
                  <router-link to="/details"
                     class="tw-w-full tw-border-b-2 tw-border-[#156355] tw-p-2 tw-text-center tw-text-lg tw-font-bold tw-leading-none tw-text-[#156355] sm:tw-text-xl">
                     Details
                  </router-link>
                
                  <a href="#sectionContacts"
                     class="tw-w-full tw-border-b-2 tw-border-[#156355] tw-p-2 tw-text-center tw-text-lg tw-font-bold tw-leading-none tw-text-[#156355] sm:tw-text-xl">
                     Contact Us
                  </a>

                  <button
                     @click="logout"
                     class="tw-w-full tw-border-b-2 tw-border-[#156355] tw-p-2 tw-text-center tw-text-lg tw-font-bold tw-leading-none tw-text-[#156355] sm:tw-text-xl">
                     Logout
                  </button>
               </div>
            </div>

            <div
               @click="displayMenubarFalse"
               v-if="global.isMenuBarVisible"
               class="overlay tw-fixed tw-bottom-0 tw-z-10 tw-h-[50%] tw-w-full tw-bg-black tw-bg-opacity-50 tw-transition-transform"></div>
         </div>
      <div
         class="navbar tw-m-1 tw-flex tw-w-[93vw] tw-items-center tw-justify-between tw-rounded-[100px] tw-bg-[#156355] tw-p-2 tw-px-8 tw-text-lg tw-font-semibold tw-text-white">
       
         <div class="tw-cursor-pointer tw-flex tw-flex-col tw-items-center">
            <img
               class="tw-h-9 tw-w-11 tw-rounded-md md:tw-h-10 md:tw-w-14 tw-gap-0"
               src="/Images/flightlogo.png"
               alt="" />
               <span class="tw-text-[10px] sm:tw-text-sm  tw-text-white">US Airways</span>
         </div>
         <div class="tw-hidden tw-gap-10 md:tw-flex">
            <router-link to="/home" @click="add" class="tw-cursor-pointer">Home</router-link>
            <router-link to="/details" class="tw-cursor-pointer">Details</router-link>
            <a class="tw-cursor-pointer" href="#sectionContacts">Contact Us</a>
         </div>
         <div
            class="tw-hidden tw-w-20 tw-items-center tw-justify-center tw-rounded-md tw-bg-gradient-to-b tw-from-[#fe8f5a] tw-to-[#e1570f] tw-p-1 md:tw-flex">
            <span class="tw-cursor-pointer">Logout</span>
         </div>
         <div @click="displayMenubar" class="tw-flex md:tw-hidden">
            <i class="ri-menu-3-line tw-text-3xl tw-text-[#FF7F50]"></i>
         </div>
      </div>
   </div>
</template>

<style scoped></style>
