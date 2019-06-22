// •
// • <email-app>
// • EmailApp Gets emails from service (asynch)t= <teas></teas>
import { emailService } from '../services/email.service.js';
import emailList from '../cmps/email-list.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js'
import sideNav from '../cmps/email-side-navbar.cmp.js';
import emailCompose from '../cmps/email-compose.cmp.js';

export default {
    template: `
        <section class="email-app">
            <email-filter @set-filter="setFilter"></email-filter>
            <button class="btn-compose" @click="isActivated">Compose</button>
            <div class="container">
                <side-nav></side-nav>
                <router-view :emails="emailsForDisplay" @selected="onSelected"></router-view>
            </div>
            <email-compose :isShown="this.isShown"></email-compose>
    </section>
    `,

    data() {
        return {
            emails: '',
            filter: null,
            isShown: false
        }
    },

    created() {
        emailService.query()
            .then(emails => {
                this.emails = emails
            })
        this.$router.push({path: '/miss-email/inbox'});    
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
        sideNav,
        emailCompose,
        emailFilter
    },
    methods: {
        onSelected(emailId) {
            this.selectedEmail = this.emails.find(email => email.id === emailId)
            this.filter = null;
        },
        
        setFilter(filter) {
            this.filter = filter;
        },

        // setShow() {
        //     return this.isShown;
        // },

        isActivated () {
            this.isShown = !this.isShown;
            
        }
    }
}