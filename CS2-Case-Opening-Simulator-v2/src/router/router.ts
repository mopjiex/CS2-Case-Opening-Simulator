import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from 'vue-router';
import HomePage from "@/views/HomePage.vue";
import InventoryPage from "@/views/InventoryPage.vue";
import InventoryCases from "@/components/Inventory/InventoryCases.vue";
import InventoryItem from "@/components/Inventory/InventoryItem.vue";
import OpenCasesPage from "@/views/OpenCasesPage.vue";

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
  {path: '/open', component: OpenCasesPage} // Используйте компонент, а не строку
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;