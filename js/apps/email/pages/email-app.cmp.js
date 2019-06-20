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
            return this.emails.filter(email => {
                let currFilter = this.filter.isRead
                if (currFilter === 'true') currFilter = true
                else if (currFilter === 'false') currFilter = false
                if (currFilter === 'all') currFilter = email.message.isRead
                console.log(email.message.isRead)
                return email.message.subject.includes(this.filter.txt) &&
                        email.message.isRead === currFilter
            })
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
            this.filter = null;
        },
        
        setFilter(filter) {
            this.filter = filter;
        }
    }
}