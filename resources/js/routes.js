import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import Main from "./components/pages/Main"
import PostShow from "./components/pages/PostShow"
import Error404 from "./components/pages/Error404"

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "active",
  routes:[
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/blog",
      name: "blog",
      component: Main
    },
    {
      path: "/post-show/:slug",
      name: "post-show",
      component: PostShow
    },
    {
      path: "*",
      component: Error404
    },
  ]
});

export default router;