// •
// • <email-app>
// • EmailApp Gets emails from service (asynch)t= <teas></teas>
import { emailService } from '../services/email.service.js';
import emailList from '../cmps/email-list.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js'
import sideNav from '../cmps/email-side-navbar.cmp.js';

export default {
    template: `
    <section class="email-app">
        <email-filter @set-filter="setFilter"></email-filter>
        <div class="container">
            <side-nav></side-nav>
            <router-view :emails="emailsForDisplay" @selected="onSelected"></router-view>
        </div>
    </section>
    `,

    data() {
        return {
            emails: '',
            filter: null

        }
    },

    created() {
        emailService.query()
            .then(emails => {
                this.emails = emails
            })
        this.$router.push({path: '/miss-email/inbox'});    
        console.log(this.$route.params);
    },

    computed: {
        emailsForDisplay() {
            if (!this.filter) return this.emails
            console.log(this.filter.isRead)
            return this.emails.filter(email => 
                email.message.subject.includes(this.filter.txt) &&
                email.message.isRead === this.filter.isRead)
                // (email => email.message.desc.includes(this.filter.txt)) ||
                // (email => email.message.desc.includes(this.filter.txt)))
        }
    },

    components: {
        emailList,
        sideNav,
        // emailDetails,
        emailFilter
    },
    methods: {
        onSelected(emailId) {
            this.selectedEmail = this.emails.find(email => email.id === emailId)
        },
        setFilter(filter) {
            console.log(filter)
            this.filter = filter;
        }
    },

    watch: {
        '$route.params.path': {
            handler(val) {
                console.log(val);
            },
            deep: true
        }
    }
}