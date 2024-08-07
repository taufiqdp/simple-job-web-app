import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import JobsView from "../views/JobsView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import JobView from "../views/JobView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/jobs", name: "jobs", component: JobsView },
    { path: "/jobs/:id", name: "job", component: JobView },
    { path: "/:cacthAll(.*)", name: "not-found", component: NotFoundView },
  ],
});

export default router;
