import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from 'vue-router';
import HomePage from "@/views/HomePage.vue";
import InventoryPage from "@/views/InventoryPage.vue";
import InventoryCases from "@/components/InventoryCases/InventoryCases.vue";
import InventoryItem from "@/components/InventoryCases/InventoryItem.vue";
import OpenCasesPage from "@/views/OpenCasesPage.vue";
import SkinsPage from "@/views/SkinsPage.vue";

const routes: RouteRecordRaw[] = [
  { path: '/', component: HomePage },
  {
    path: '/inventory',
    component: InventoryPage,
    children: [
      { path: '', component: InventoryCases },
      { path: '/inventory/case/:id', component: InventoryItem }
    ]
  },
  { path: '/open', component: OpenCasesPage },
  { path: '/skins', component: SkinsPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;