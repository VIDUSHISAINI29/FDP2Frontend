<script setup>
import { ref, onMounted } from "vue";

const isScrolled = ref(false);

onMounted(() => {
   window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
         isScrolled.value = true;
      } else {
         isScrolled.value = false;
      }
   });
});
</script>

<template>
    <nav
:class="[
   'tw-fixed  tw-top-0 tw-w-[90%]  tw-rounded-full tw-px-8 tw-py-4 tw-shadow-lg tw-transition tw-duration-500 tw-ease-in-out',
   isScrolled
      ? 'tw-bg-gradient-to-r tw-from-teal-700 tw-to-green-600'
      : 'tw-bg-gradient-to-r tw-from-sky-500 tw-to-teal-500 tw-opacity-100',
]">
<ul class="tw-flex tw-items-center tw-justify-between tw-gap-6">
   <li class="tw-group tw-relative">
      <a
         href="#"
         class="tw-px-4 tw-py-2 tw-text-lg tw-font-bold tw-text-white tw-transition tw-duration-300 tw-ease-in-out ">
         Contact
      </a>
      <span
         class="tw-absolute tw-bottom-0 tw-left-0 tw-h-[3px] tw-w-0 tw-bg-green-300 tw-transition-all tw-duration-500 group-hover:tw-w-full"></span>
   </li>
   <li class="tw-group tw-relative">
      <a
         href="#"
         class="tw-px-4 tw-py-2 tw-text-lg tw-font-bold  tw-text-gray-300  tw-transition tw-duration-200 tw-ease-in-out hover:tw-text-black">
        <span class=" hover:tw-shadow-2xl tw-transition tw-duration-300 hover:tw-transition tw-ease-in-out">Contact</span>
      </a>
      <span
         class="tw-absolute tw-bottom-0 tw-left-0 tw-h-[3px] tw-w-0 tw-bg-black tw-transition-all tw-duration-500 group-hover:tw-w-full"></span>
   </li>
   <li class="tw-group tw-relative">
      <a
         href="#"
         class="tw-px-4 tw-py-2 tw-text-lg tw-font-bold tw-text-white tw-transition tw-duration-300 tw-ease-in-out hover:tw-text-green-300">
         Contact
      </a>
      <span
         class="tw-absolute tw-bottom-0 tw-left-0 tw-h-[3px] tw-w-0 tw-bg-green-300 tw-transition-all tw-duration-500 group-hover:tw-w-full"></span>
   </li>
   <li class="tw-group tw-relative">
      <a
         href="#"
         class="tw-px-4 tw-py-2 tw-text-lg tw-font-bold tw-text-white tw-transition tw-duration-300 tw-ease-in-out hover:tw-text-green-300">
         Contact
      </a>
      <span
         class="tw-absolute tw-bottom-0 tw-left-0 tw-h-[3px] tw-w-0 tw-bg-green-300 tw-transition-all tw-duration-500 group-hover:tw-w-full"></span>
   </li>
</ul>
</nav>

<div class="tw-mt-20 tw-py-32 tw-text-center">
<p class="tw-text-2xl tw-text-gray-800">
   Scroll to see the navbar change on scroll!
</p>
</div>
</template>
