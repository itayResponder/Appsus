// •
// • <email-app>
// • EmailApp Gets emails from service (asynch)t= <teas></teas>
import { emailService } from '../services/email.service.js';
import emailList from '../cmps/email-list.cmp.js';
import sideNav from '../cmps/email-side-navbar.cmp.js';

export default {
    template: `
    <section class="email-app">
        
        <h1>Email App</h1>
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
            emails: ''
        }
    },

    created() {
        emailService.query()
            .then(emails => {
                this.emails = emails
                console.log(emails)
            })
    },

    computed: {
        emailsForDisplay() {
            if (!this.filter) return this.emails;
            // return this.emails.filter(email => email.title.includes(this.filter.txt) &&
            //     email.listPrice.amount > this.filter.fromNum &&
            //     email.listPrice.amount < this.filter.toNum)
        }
    },


    components: {
        emailList,
        sideNav,
        // emailDetails,
        // emailFilter
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