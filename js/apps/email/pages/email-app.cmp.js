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
                <email-side-nav :unReadCounter="this.unReadCounter"></email-side-nav>
                <router-view :emails="emailsForDisplay"></router-view>
            </div>
            <email-compose :isShown="this.isShown"></email-compose>
    </section>
    `,

    data() {
        return {
            emails: '',
            filter: null,
            isShown: false,
            unReadCounter: 0,
        }
    },

    created() {
        emailService.query()
            .then(emails => {
                this.emails = emails
            })
        this.$router.push({path: '/miss-email/inbox'});
    },

    watch: {
        unReadCounter() {
            console.log('the Counter has changed!!');
        }
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
        },
        updateCounter() {
            this.unReadCounter = emailService.countUnread();
            console.log('email-app-count',this.unReadCounter);
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
        onSelected(emailId) {
            console.log('aui')
            this.selectedEmail = this.emails.find(email => email.id === emailId)
            // eventBus.$emit(SHOW_MSG,
            //     { txt: 'Welcome to the team', type: 'success' });
            // this.displayUnreadMailsCount()
            this.filter = null;
        },
        
        setFilter(filter) {
            this.filter = filter;
        },

        isActivated () {
            this.isShown = !this.isShown;
        }
    }
}