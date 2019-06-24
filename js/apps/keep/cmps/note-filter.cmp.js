export default {
    template: `
        <section>
                <input class="notes-txt-search" type="text" v-model="filterBy.txt" @input="emitFilter" placeholder="Search Note"/>
        </section>
            `,

    data() {
        return {
            filterBy: {
                txt: '',
            }
        }
    },

    methods: {
        emitFilter() {
            this.$emit('set-filter', this.filterBy);
        }
    }
}