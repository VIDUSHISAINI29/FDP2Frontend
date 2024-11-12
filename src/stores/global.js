import { computed, ref } from "vue";
import { defineStore } from "pinia";
export const useGlobalStore = defineStore('global', () => {
    const isMenubarVisible = ref(false);
    return { isMenubarVisible }
})