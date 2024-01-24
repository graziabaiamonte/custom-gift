import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Customize from '../components/Customize.vue'
import ColorsTop from '../components/ColorsTop.vue'
import ColorsBody from '../components/ColorsBody.vue'
import ColorsBottom from '../components/ColorsBottom.vue'
import Completed from '../components/Completed.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/customize', name: 'Customize', component: Customize},
    {path: '/colorsTop', name: 'ColorsTop', component: ColorsTop},
    {path: '/colorsBody', name: 'ColorsBody', component: ColorsBody},
    {path: '/colorsBottom', name: 'ColorsBottom', component: ColorsBottom},
    {path: '/completed', name: 'Completed', component: Completed},
];
    
const router = createRouter({
     history: createWebHistory(),
     routes
})

export default router