// • <email-filter>
// • Allow filtering by text and Read / Unread


export default {
    template: `
        <section class="email-filter">
            <div class="filters-container">
                <input class="txt-mail" type="text" v-model="filterBy.txt" @input="emitFilter" placeholder="Search Email"/>
                <select class="txt-mail" v-model="filterBy.isRead" @change="emitFilter">
                    <option value='all'>All</option>
                    <option value= 'true'>Read</option>
                    <option value= 'false'>unread</option>
                </select> 
            </div>
        </section>
            `,

    data() {
        return {
            filterBy: {
                txt: '',
                isRead: 'all',
            }
        }
    },

    methods: {
        emitFilter() {
            this.$emit('set-filter', this.filterBy);
        }
    }
}