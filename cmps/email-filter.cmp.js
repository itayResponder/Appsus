// Allow the user to filter the books list by name and by price range
// • Emits: filtered with a filterBy object: {byName: 'xx', fromPrice:0, toPrice:Infinity}
// • Emits the current filter when Filter button is clicked

export default {
    template: `
        <section class="book-filter">
        <h3>books Filter</h3>
        <div className="filters-container">
        <span>By Title</span><input type="text" v-model="filterBy.txt" @input="emitFilter" /> 
        <span>Min Price</span><input type="number" v-model="filterBy.fromNum" @input="emitFilter" /> 
        <span>Max price</span><input type="number" v-model="filterBy.toNum" @input="emitFilter" /> 
        </div>
            </section>
            `,

    data() {
        return {
            filterBy: {
                txt: '',
                fromNum: -Infinity,
                toNum: Infinity,
            }
        }
    },

    methods: {
        emitFilter() {
            this.$emit('set-filter', this.filterBy);
        }
    }
}