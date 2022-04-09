import { createWebHistory, createRouter } from "vue-router";
import Layout from "../Layout/Layout.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        component: () => import("../components/home/main/Main.vue"),
      },
        // {
        //   path: "/blog",
        //   component: () => import("../components/blog/Blog.vue"),
        //   children: [
        //     {
        //       path: "",
        //       component: () => import("../components/blog/resent/Resent.vue"),
        //     },
        //     {
        //       path: "/blog/recommend",
        //       component: () =>
        //         import("../components/blog/recommend/Recommend.vue"),
        //     },
        //     {
        //       path: "/blog/most-read",
        //       component: () => import("../components/blog/mostRead/MostRead.vue"),
        //     },
        //   ],
        // },
        // {
        //   path: "/blog-inner",
        //   component: () => import("../components/blogInner/BlogInner.vue"),
        // },
        // {
        //   path: "/vacancies",
        //   component: () => import("../components/vacancies/Vacancies.vue"),
        // },
        // {
        //   path: "/vacancy-info",
        //   component: () => import("../components/vacancyInfo/VacancyInfo.vue"),
        // },
        // {
        //   path: "",
        //   component: () => import("../components/portfolio/Portfolio.vue"),
        //   children: [
        //     {
        //       path: "/portfolio",
        //       component: () => import("../components/portfolio/all/All.vue"),
        //     },
        //     {
        //       path: "/web-development",
        //       component: () =>
        //         import(
        //           "../components/portfolio/webDevelopment/WebDevelopment.vue"
        //         ),
        //     },
        //     {
        //       path: "/mobile-development",
        //       component: () =>
        //         import(
        //           "../components/portfolio/mobileDevelopment/MobileDevelopment.vue"
        //         ),
        //     },
        //     {
        //       path: "/ceo-services",
        //       component: () =>
        //         import("../components/portfolio/ceoServices/CeoServices.vue"),
        //     },
        //     {
        //       path: "/uxui-design",
        //       component: () =>
        //         import("../components/portfolio/uxUiDesign/UxUiDesign.vue"),
        //     },
        //     {
        //       path: "/software-development",
        //       component: () =>
        //         import(
        //           "../components/portfolio/softwareDevelopment/SoftwareDevelopment.vue"
        //         ),
        //     },
        //     {
        //       path: "/it-consulting",
        //       component: () =>
        //         import("../components/portfolio/itConsulting/ITConsulting.vue"),
        //     },
        //     {
        //       path: "/all",
        //       component: () => import("../components/portfolio/all/All.vue"),
        //     },
        //   ],
        // },
        // {
        //   path: "/404",
        //   component: () => import("../components/404/404.vue"),
        // },
        // {
        //   path: "/503",
        //   component: () => import("../components/503/503.vue"),
        // },
        // {
        //   path: "/502",
        //   component: () => import("../components/502/502.vue"),
        // },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
