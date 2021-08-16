import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { PLASMIC } from "../init";
import { PlasmicComponent } from "@plasmicapp/loader-vue";

Vue.use(VueRouter);

const CatchAllPage = {
  data() {
    return {
      loading: true,
      pageData: null,
    };
  },
  created() {
    this.fetchData();
  },
  render() {
    if (this.loading) {
      return <div>Loading...</div>;
    }
    if (!this.pageData) {
      return <div>Not found</div>;
    }
    return (
      <PlasmicComponent component={location.pathname} />
    );
  },
  methods: {
    async fetchData() {
      const pageData = await PLASMIC.maybeFetchComponentData(location.pathname);
      this.pageData = pageData;
      this.loading = false;
    },
  },
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "*",
    component: CatchAllPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
