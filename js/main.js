'use strict';

import mainHeader from './pages/main-app/main-header.cmp.js';
import myRoutes from '../js/services/routes.js';

const myRouter = new VueRouter({routes: myRoutes})


var app = new Vue({
    el: '#app',
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
