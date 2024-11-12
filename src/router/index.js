import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
     
      {
         path: "/",
         component: () => import("@/layout/AppLayout.vue"),
         children: [
            {
               path: "/home",
               name: "home",
               component: () => import("@/pages/Home/Home.vue"),
            },
            {
               path: "/test",
               name: "test",
               component: () => import("@/pages/Test.vue"),
            },
            {
               path: "/details",
               name: "details",
               component: () => import("@/pages/Details.vue"),
            },
         ],
      },
   ],
});

export default router;
