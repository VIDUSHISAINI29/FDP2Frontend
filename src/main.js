import './assets/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createAuth0 } from '@auth0/auth0-vue';


import App from './App.vue'
import router from './router'

import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(PrimeVue, {
    unstyled: false,
    theme: {
       preset: Aura,
       options: {
          darkModeSelector: ".tw-dark",
       },
    },
 });
 app.use(
   createAuth0({
     domain: import.meta.env.VITE_DOMAIN,
     clientId: import.meta.env.VITE_CLIENTID,

     authorizationParams: {
       redirect_uri: import.meta.env.VITE_CALLBACK_URL
     }
   })
 );

import {setupEcharts} from "./composables/echarts.js"
import VChart from "vue-echarts"
setupEcharts()
app.component("v-chart", VChart)


app.mount('#app')
