import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Modal from '../components/ui/Modal.vue';
import Components from '../components/ui/Index.vue';


export const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/modal', component: Modal },
    { path: '/components', component: Components },
]
