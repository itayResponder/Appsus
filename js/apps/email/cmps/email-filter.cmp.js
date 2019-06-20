// • <email-filter>
// • Allow filtering by text and Read / Unread


// export default {
//     template: `
//         <section class="book-filter">
//         <h3>books Filter</h3>
//         <div className="filters-container">
//         <span>By Title</span><input type="text" v-model="filterBy.txt" @input="emitFilter" /> 
//         <span>Min Price</span><input type="number" v-model="filterBy.fromNum" @input="emitFilter" /> 
//         <span>Max price</span><input type="number" v-model="filterBy.toNum" @input="emitFilter" /> 
//         </div>
//             </section>
//             `,

//     data() {
//         return {
//             filterBy: {
//                 txt: '',
//                 fromNum: -Infinity,
//                 toNum: Infinity,
//             }
//         }
//     },

//     methods: {
//         emitFilter() {
//             this.$emit('set-filter', this.filterBy);
//         }
//     }
// }