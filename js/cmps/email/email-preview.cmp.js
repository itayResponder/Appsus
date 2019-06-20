export default {}

{/* <email-preview>
o Has an email prop
o Renders the subject
o Gives visual indication for read/unread (i.e.: bold/unbold ; closed or
open envelop) 

// import { bookService } from '../services/book.service.js'

// export default {
//     props: ['book'],
//     // <router-link :to="bookUrl" class="book-list">
//     // </router-link>
//     template: `
//     <div @click.stop ="checkBook" class="book-list">
//         <img :src="book.thumbnail"/>
//         <h2>{{book.title}}</h2>
//         <h4>{{currencyChange.format(book.listPrice.amount)}}</h4>
//     </div>
//     `,

//     computed: {
//         currencyChange() {
//             return new Intl.NumberFormat('en-US', {
//                 style: 'currency',
//                 currency: this.book.listPrice.currencyCode,
//                 minimumFractionDigits: 2
//             })
//         },
//         bookUrl() {
//             return '/book-store/' + this.book.id
//         },

        
    },
    methods: {
        checkBook() {
            console.log('succeed')
            bookService.addBookIfNew(this.book)
        }
    }
} */}