import Vue from "vue";
import Router from "vue-router";
import Homepage from "./pages/Homepage.vue";
import Info from "./pages/Info.vue";
import Team from "./pages/Team.vue";
import Roadmap from "./pages/Roadmap.vue";
import GetXya from "./pages/GetXya.vue";
import Stake from "./pages/Stake.vue";
import Chart from "./pages/Chart.vue";
import Faucet from "./pages/Faucet.vue";
import HoldersList from "./pages/HoldersList.vue";
import Bounties from "./pages/Bounties.vue";

Vue.config.productionTip = false;

Vue.use(Router);

const router = new Router({
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    mode: "history",
    routes: [
        {
            path: "/",
            name: "homepage",
            component: Homepage,
        },
        {
            path: "/info",
            name: "info",
            component: Info,
        },
        {
            path: "/team",
            name: "team",
            component: Team,
        },
        {
            path: "/roadmap",
            name: "roadmap",
            component: Roadmap,
        },
        {
            path: "/get-xya",
            name: "get-xya",
            component: GetXya,
        },
        {
            path: "/stake",
            name: "stake",
            component: Stake,
        },
        {
            path: "/chart",
            name: "chart",
            component: Chart,
        },
        {
            path: "/faucet",
            name: "faucet",
            component: Faucet,
        },
        {
            path: "/holders-list",
            name: "holders-list",
            component: HoldersList,
        },
        {
            path: "/bounties",
            name: "bounties",
            component: Bounties,
        }
    ]
});

export default router;
