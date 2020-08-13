import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Table from "./views/Table.vue";
import Add from "./views/Add.vue";
import Update from "./views/Update.vue";
import Errorpage from "./views/Error.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/table",
      name: "table",
      component: Table,
    },
    {
      path: "/add",
      name: "add",
      component: Add,
    },
    {
      path: "/update",
      name: "update",
      component: Update,
    },
    {
      path: "/error/:msg",
      name: "error",
      component: Errorpage,
    },
  ],
});
