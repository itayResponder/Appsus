// • <email-details>
// • Routable component (page)
// • show the entire email
// • allow deleting an email (using a service)



// import bookReview from '../cmps/book-review.cmp.js'
// import { bookService } from '../services/book.service.js'

// export default {

//     // • Show entire details
//     template: `
//     <section class="book-details" v-if="book">
//     <img :src="book.thumbnail"/>
//     <router-link to="/book-store">Back</router-link>
//     <h1>{{book.title}}</h1>
//     <h3>Authors: {{...book.authors}}</h3>
//     <h4>Categories: <span v-for="category in book.categories">{{category}} </span></h4>
//     <p>Description: {{trimStr}}</p>
//     <h5>Pages:{{this.book.pageCount}} {{countLength}}</h5>
//     <h5>{{countYears}}</h5>
//     <h3 :class="priceClass">Price {{this.book.listPrice.amount}} <span v-if="this.book.listPrice.isOnSale">On Sale!</span></h3>
//     <book-review :book="book" @add-review='updateBook'></book-review>
//     <section class="book-review">
//     <h1>Book Review</h1>
//     <div className="reviews" v-for="review in book.reviews"></div>
//     </section>

//     </section>
//     `,
//     // • If the book is on sale – show a nice SALE sign

//     // • Props: book
//     data() {
//         return {
//             book: null
//         }
//     },

//     created() {
//         const bookId = this.$route.params.BookId;
//         console.log(bookId)
//         bookService.get(bookId)
//             .then(book => this.book = book)
//     },

//     computed: {
//         // • Use class binding: based on price, show in color:
//         // o > 150 – Red
//         // o < 20 – Green
//         priceClass() {
//             return {
//                 red: this.checkPriceRed,
//                 green: this.checkPriceGreen
//             }
//         },
//         // • Use computed: based on pageCount, display also the text:
//         // o > 500 – Long reading
//         // o > 200 – Decent Reading
//         // o < 100 – Light Reading
//         countLength() {
//             const lng = this.book.pageCount
//             if (lng > 500) return 'Long Reading'
//             if (lng > 200) return 'Decent Reading'
//             if (lng < 100) return 'Light Reading'
//             return ''
//         },
//         // • Use computed: based on publishedDate, display also the text:
//         // o > 10 years ago – Veteran Book
//         // o < 1 Year – New!
//         countYears() {
//             const publishYear = this.book.publishedDate
//             const currYear = new Date().getFullYear()
//             const difference = currYear - publishYear;
//             if (difference > 10) return `Publish Year:${publishYear}, Veteran Book`
//             if (difference <= 1) return `Publish Year:${publishYear}, NEW!`
//         },

//         checkPriceRed() {
//             return (this.book.listPrice.amount > 150) ? true : false;
//         },

//         checkPriceGreen() {
//             return (this.book.listPrice.amount < 20) ? true : false;
//         },

//         trimStr() {
//             return this.book.description.substring(0, 100)
//         },

//     },
//     methods: {
//         closeModal() {
//             this.$emit('close')
//         },
//         updateBook(bookId) {
//             bookService.get(bookId)
//                 .then(book => {this.book = book
//                 console.log(this.book,' after updating');
                
//                 })
//         }
//     },
//     components: {
//         bookReview
//     }
// }


// // • Show only 100 characters of the description and add read more/less that toggles the rest of the text
// // TIP: build a component that can be used like this: <long-text v-bind:txt="book.desc"></long-text>