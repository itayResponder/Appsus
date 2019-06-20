import {bookService} from '../services/book.service.js'

export default {
    template: `
    <form>
        <input ref="txtName" v-model="review.fullName" type="text"/>
        <select v-model="review.planSelected" >
                    <option>Choose Rate</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <input v-model="review.date" type="date" ref="datePicker"/>
                <textarea v-model.trim="review.desc" placeholder="Please describe"></textarea>
                <button @click.prevent="submitReview">Submit</button>
                </form>
    `,
    props:['book'],
    data() {
        return {
            review: {
                fullName: 'Books Reader',
                date: '',
                rateSelected:'Choose Rate',
                desc: '',
            }
        }
    },

    mounted()  
    {
        this.$refs.txtName.focus()
        this.$refs.datePicker.valueAsDate = new Date() ;
    },
    
    
    methods: {
        submitReview() {
            console.log(this.book, this.review)
            bookService.addReview(this.book.id, this.review)
            this.$emit('add-review',this.book.id)
        }
    }

}