// •
// • <email-app>
// • EmailApp Gets emails from service (asynch)t= <teas></teas>
import { emailService } from '../services/email.service.js';
import emailList from '../cmps/email-list.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js'

export default {
    template: `
    <section class="email-app">
        <h1>Email App</h1>
        <email-filter @set-filter="setFilter"></email-filter>
        <email-list :emails="emailsForDisplay" @selected="onSelected"></email-list>
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
            console.log(this.filter.txt)
            return this.emails.filter(email => (email.message.subject.includes(this.filter.txt))&&
            email.message.isRead === this.filter.isRead)
                // (email => email.message.desc.includes(this.filter.txt)) ||
                // (email => email.message.desc.includes(this.filter.txt)))
        }
    },


    components: {
        emailList,
        // emailDetails,
        emailFilter
    },
    methods: {
        onSelected(emailId) {
            this.selectedEmail = this.emails.find(email => email.id === emailId)
        },
        setFilter(filter) {
            this.filter = filter;
        }
    }
}