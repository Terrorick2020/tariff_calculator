import { createRouter, createWebHashHistory } from "vue-router";
import CalculatorPage from '../view/CalculatorPage.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/calculator', alias: '/', component: CalculatorPage, meta: { title: 'Калькулятор' } }
    ]
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

export default router;