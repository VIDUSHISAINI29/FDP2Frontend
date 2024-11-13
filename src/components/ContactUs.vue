<script setup>
import emailjs from "@emailjs/browser";
import { ref } from "vue";

const form = ref({
   name: "",
   email: "",
   message: "",
});
const statusMessage = ref("");

function sendEmail() {
   emailjs
      .send(
         "service_xkgfmnh",
         "template_yskfgsl",
         {
            from_name: form.value.name,
            from_email: form.value.email,
            message: form.value.message,
         },
         "YqUOTxOFSO_7y80hb",
      )
      .then(
         (response) => {
            console.log("SUCCESS!", response.status, response.text);
            statusMessage.value = "Message sent successfully!";
            form.value.name = "";
            form.value.email = "";
            form.value.message = "";
         },
         (error) => {
            console.error("FAILED...", error);
            statusMessage.value = "Failed to send message. Please try again.";
         },
      );
}
</script>

<template>
      <div id="sectionContacts"
               class="  tw-flex tw-w-4/5 tw-flex-col tw-bg-gray-300 tw-items-center sm:tw-w-full">
               <div
                  class="tw-m-2 tw-flex tw-w-11/12 tw-rounded-lg tw-justify-center tw-items-center tw-p-1 tw-text-2xl tw-font-semibold tw-text-[#156355] sm:tw-w-full md:tw-py-3 md:tw-text-4xl">
                  <span class=" tw-cursor-pointer">Contact Us</span>
                 
               </div>


                  
               <div
                  class="tw-flex tw-w-4/5 md:tw-w-4/5 tw-flex-col  tw-justify-center md:tw-items-start tw-gap-10 md:tw-gap-28 md:tw-flex md:tw-flex-row ">
                  
                  <form
                     class="tw-flex tw-w-[200px] tw-flex-col tw-items-center  tw-gap-5 tw-p-2 sm:tw-w-80"
                     @submit.prevent="sendEmail"
                     id="contactForm">
                     <input
                        class="tw-w-full tw-rounded-sm tw-border tw-border-[#ff6f4b] tw-bg-[#fff] tw-p-1 tw-text-[#ff6f4b] tw-outline-none"
                        type="text"
                        v-model="form.name"
                        placeholder="Your Name"
                        required />
                     <input
                        class="tw-w-full tw-rounded-sm tw-border tw-border-[#ff6f4b] tw-bg-[#fff] tw-p-1 tw-text-[#ff6f4b] tw-outline-none"
                        type="email"
                        v-model="form.email"
                        placeholder="Your Email"
                        required />
                     <textarea
                        class="tw-w-full tw-rounded-sm tw-border tw-border-[#ff6f4b] tw-bg-[#fff] tw-p-1 tw-text-[#ff6f4b] tw-outline-none"
                        v-model="form.message"
                        placeholder="Your Message"
                        required></textarea>
                     <button
                        class="tw-w-32 tw-my-6 tw-rounded-lg tw-border-[#ff6f4b] tw-bg-[#156355]  tw-p-1 tw-text-[#fff] tw-outline-none tw-transition-all tw-duration-700 hover:tw-shadow-my"
                        type="submit">
                        Send Message
                     </button>
                  </form>
                


               </div>

               <span class="tw-text-white">{{ statusMessage }}</span>
            </div>
</template>