
import appHeader from './cmps/app-header.cmp.js'
import routes from './routes.js'



new Vue({
    el: '#app',

    template: ` <section>
                    <app-header></app-header>
                    <router-view></router-view>
                </section>
`,

    components: {
        appHeader
    },

    router: myRouter
})
