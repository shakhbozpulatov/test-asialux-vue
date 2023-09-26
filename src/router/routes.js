export const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/dashboard",
    component: () => import("@/layout/TheDefault.vue"),
    children: [
      {
        path: "/dashboard",
        name: "Главная",
        component: () => import("@/pages/PHomeView.vue"),
      },
      {
        path: "/employees",
        name: "Сотрудники",
        component: () => import("@/pages/PEmployees.vue"),
      },
      {
        path: "/subagents",
        name: "Субагенты",
        component: () => import("@/pages/PSubAgents.vue"),
      },
      {
        path: "/corporation",
        name: "Корпорации",
        component: () => import("@/pages/PCorporation.vue"),
      },
      {
        path: "/search",
        name: "Поиск",
        component: () => import("@/pages/PSearch.vue"),
      },
      {
        path: "/orders",
        name: "Заказы",
        component: () => import("@/pages/POrders.vue"),
      },
      {
        path: "/reports",
        name: "Отчеты",
        component: () => import("@/pages/PReports.vue"),
      },
      {
        path: "/settings",
        name: "Настройки",
        component: () => import("@/pages/PSettings.vue"),
      },
      {
        path: "/services",
        name: "Cервисы",
        component: () => import("@/pages/PServices.vue"),
      },
      {
        path: "/calendar",
        name: "Календарь",
        component: () => import("@/pages/PCalendar.vue"),
      },
      {
        path: "/analyse",
        name: "Аналитика",
        component: () => import("@/pages/PAnalyse.vue"),
      },
    ],
  },
  {
    // the 404 route, when none of the above matches
    path: "/404",
    name: "404",
    component: () => import("@/pages/PError.vue"),
  },
  {
    path: "/500",
    name: "500",
    component: () => import("@/pages/PError.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/pages/PError.vue"),
  },
];
