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
import emailStarred from '../cmps/email-starred.cmp.js';
import emailSent from '../cmps/email-sent.cmp.js';
import emailTrash from '../cmps/email-trash.cmp.js';
import emailInbox from '../cmps/email-inbox.cmp.js';

export default {
    template: `
        <section class="email-app">
            <email-filter @set-filter="setFilter"></email-filter>
            <email-sort></email-sort>
            <button class="email-btn btn-compose" @click="isActivated">Compose</button>
            <div class="container">
                <email-side-nav></email-side-nav>
                <section class="emails-list">
                    <section v-if="$route.path === '/miss-email/inbox'">
                        <email-inbox v-for="currentEmail,idx in emails" :key="idx" :email="currentEmail"></email-inbox>
                    </section>
                    <section v-if="$route.path === '/miss-email/starred'">
                        <email-starred v-for="currentEmail,idx in emails" :key="idx" :email="currentEmail"></email-starred>
                    </section>
                    <section v-if="$route.path === '/miss-email/sent'">
                        <email-sent v-for="currentEmail,idx in emails" :key="idx" :email="currentEmail"></email-sent>
                    </section>
                    <section v-if="$route.path === '/miss-email/trash'">
                        <email-trash v-for="currentEmail,idx in emails" :key="idx" :email="currentEmail"></email-trash>
                    </section>
                </section>
                <!-- <router-view :emails="emailsForDisplay"></router-view> -->
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
        emailDetails,
        emailStarred,
        emailSent,
        emailTrash,
        emailInbox
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