// •
// • <email-app>
// • EmailApp Gets emails from service (asynch)t= <teas></teas>
import { emailService } from '../services/email.service.js';
import emailList from '../cmps/email-list.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js'
import emailSideNav from '../cmps/email-side-navbar.cmp.js';
import emailCompose from '../cmps/email-compose.cmp.js';
import emailSort from '../cmps/email.sort.js'
import emailDetails from '../pages/email-details.cmp.js';

export default {
    template: `
        <section class="email-app">
            <email-filter @set-filter="setFilter"></email-filter>
            <email-sort></email-sort>
            <button class="btn-compose" @click="isActivated">Compose</button>
            <div class="container">
                <email-side-nav></email-side-nav>  
                <router-view :emails="emailsForDisplay"></router-view>
            </div>
            <email-compose @send-clicked="isActivated" :isShown="this.isShown"></email-compose>
        </section>
    `,
    data() {
        return {
            emails: '',
            filter: null,
            isShown: false,
        }
    },

    created() {
        if (this.$route.path === '/miss-email') this.$router.push({ path: '/miss-email/inbox' });
        emailService.query()
            .then(emails => {
                this.emails = emails
            })
    },

    computed: {
        emailsForDisplay() {
            if (!this.filter) return this.emails
            return this.emails.filter(email => {

                let currFilter = this.filter.isRead
                if (currFilter === 'true') currFilter = true
                else if (currFilter === 'false') currFilter = false
                if (currFilter === 'all') currFilter = email.message.isRead

                return (email.message.subject.includes(this.filter.txt) ||
                    email.message.desc.includes(this.filter.txt) ||
                    email.from.name.includes(this.filter.txt)) &&
                    email.message.isRead === currFilter
            })
        }
    },

    components: {
        emailList,
        emailSideNav,
        emailCompose,
        emailFilter,
        emailSort,
        emailDetails
    },

    methods: {

        setFilter(filter) {
            this.filter = filter;
        },

        isActivated() {
            this.isShown = !this.isShown;
        }
    }
}