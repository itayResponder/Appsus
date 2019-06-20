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
        <email-list :emails="emailsForDisplay" @selected="onSelected"></email-list>
        </div>
        
        <!-- <email-filter @set-filter="setFilter"></email-filter> -->
        
        <!-- <email-details v-if="selectedemail" :email="selectedemail" @close="selectedemail=null"></email-details>  -->
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
    },

    computed: {
        emailsForDisplay() {
            if (!this.filter) return this.emails
            console.log(this.filter.isRead)
            return this.emails.filter(email => {
                console.log(email.message.isRead)
                if (this.filter.isRead === 'true') this.filter.isRead = true
                if (this.filter.isRead === 'false') this.filter.isRead = false
                if (this.filter.isRead === '') this.filter.isRead = email.message.isRead
                
                return email.message.subject.includes(this.filter.txt) &&
                email.message.isRead === this.filter.isRead})
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
    }
}