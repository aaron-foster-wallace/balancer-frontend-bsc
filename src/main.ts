import { createApp } from 'vue';
import { createWebHashHistory, createRouter } from 'vue-router';
import store from './store';
import '@/utils/fathom';

import BscTestnetSubgraph from "./bsc_testnet_subgraph_pool/BscTestnetSubgraph.vue";

import App from './App.vue';

import Swap from './pages/Swap.vue';

const routerHistory = createWebHashHistory();
const router = createRouter({
    history: routerHistory,
    routes: [
        { path: '/', redirect: '/swap' },
        { path: '/swap/:assetIn?/:assetOut?', name: 'swap', component: Swap },
     ],
});

const app = createApp(App);

app.directive('autofocus', {
    mounted(el) {
        el.focus();
    },
});
/*
router.addRoute(
    {
        path: '/bsc_testnet_subgraph_pool',
        name: 'bsc_testnet_subgraph_pool',
        component: BscTestnetSubgraph,
    },
);*/
    
app.use(router);
app.use(store);

app.mount('#app');

export {
    routerHistory,
    router,
    store,
};
