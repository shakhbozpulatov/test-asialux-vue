import { createWebHistory, createRouter } from "vue-router";
import { routes } from "./routes";
import { checkRouteIsExist } from "./middleware";
// import { useAuthStore } from "@/stores/auth.js";

const router = createRouter({
  history: createWebHistory(),
  mode: "history",
  routes,
});
router.beforeEach(checkRouteIsExist);

export default router;
