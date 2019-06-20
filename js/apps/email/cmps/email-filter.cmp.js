// • <email-filter>
// • Allow filtering by text and Read / Unread


export default {
    template: `
        <section class="book-filter">
            <div class="filters-container">
                <input class="txt-search" type="text" v-model="filterBy.txt" @input="emitFilter" placeholder="Search Email"/>
                <select v-model="filterBy.isRead" @change="emitFilter">
                    <option value=''>All</option>
                    <option value=true>Read</option>
                    <option value=false>unread</option>
                </select> 
            </div>
        </section>
            `,

    data() {
        return {
            filterBy: {
                txt: '',
                isRead: ''
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