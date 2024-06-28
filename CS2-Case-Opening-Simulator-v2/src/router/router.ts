import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from 'vue-router';
import HomePage from "@/views/HomePage.vue";
import InventoryPage from "@/views/InventoryPage.vue";
import InventoryCaseDisplay from "@/components/Cases/InventoryCaseDisplay.vue";
import CaseOpenDisplay from "@/components/Cases/CaseOpenDisplay.vue";
import OpenCasesPage from "@/views/OpenCasesPage.vue";
import SkinsPage from "@/views/SkinsPage.vue";
import InvPage from "@/views/InvPage.vue";



const routes: RouteRecordRaw[] = [
  { path: '/', component: HomePage },
  { path: '/open', component: OpenCasesPage },
  { 
    path: '/inventory', component: InvPage,
    children: [
      { path: '', component: InventoryCaseDisplay },
      { path: '/inventory/case/:id', component: CaseOpenDisplay },
      { path: '/skins', component: SkinsPage },

    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;