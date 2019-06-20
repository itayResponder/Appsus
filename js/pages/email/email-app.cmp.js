// •
// • <email-app>
// • EmailApp Gets emails from service (asynch)t= <teas></teas>

import { emailService } from '../../services/email/email.service.js'
import emailList from '../../cmps/email/email-list.cmp.js'

export default {
    template: `
    <section class="email-app">
        <h1>Email App</h1>
        <!-- <email-filter @set-filter="setFilter"></email-filter> -->
        <email-list :emails="emailsForDisplay" @selected="onSelected"></email-list>
        <!-- <email-details v-if="selectedemail" :email="selectedemail" @close="selectedemail=null"></email-details>  -->
    </section>
    `,

    data() {
        return {
            emails: ''
        }
    },

    created() {
        // V an array of books, on created – get the books from the service.
        emailService.query()
            .then(emails => this.emails = emails)
    },

    computed: {
        booksForDisplay() {
            if (!this.filter) return this.books;
            // return this.books.filter(book => book.title.includes(this.filter.txt) &&
            //     book.listPrice.amount > this.filter.fromNum &&
            //     book.listPrice.amount < this.filter.toNum)
        }
    },

    components: {
        emailList,
        emailDetails,
        emailFilter
    },
}