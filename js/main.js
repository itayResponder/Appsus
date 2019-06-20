'use strict';
import mainHeader from './cmps/main-app/main-header.cmp.js';
import myRoutes from '../js/services/routes.js';

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
