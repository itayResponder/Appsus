'use strict';
import mainHeader from './apps/main/cmps/main-header.cmp.js';
import myRoutes from './routes.js';

const myRouter = new VueRouter({routes: myRoutes})

new Vue({
    el: '#Appsus',
    template: ` 
    <section>
        <main-header></main-header>
        <router-view></router-view>
    </section>
`,
    components: {
        mainHeader
    },
    router: myRouter
})
