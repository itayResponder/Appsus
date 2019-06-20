// • <email-filter>
// • Allow filtering by text and Read / Unread


export default {
    template: `
        <section class="book-filter">
            <h3>books Filter</h3>
            <div class="filters-container">
                <span>Search Email</span><input type="text" v-model="filterBy.txt" @input="emitFilter" />
                <select @change="emitFilter">
                    <option value="all">All</option>
                    <option value="true">Read</option>
                    <option value="false">unread</option>
                </select> 
            </div>
        </section>
            `,

    data() {
        return {
            filterBy: {
                txt: '',
                read: ''
            }
        }
    },

    methods: {
        emitFilter() {
            console.log('emit fil')
            this.$emit('set-filter', this.filterBy);
        }
    }
}