import { noteService } from '../services/notes-service.js'

export default {
    template: `
    <section :style = "styleObject">
    <p v-if="note.txt"> {{note.txt}} </p>
    <img v-else-if="note.img" :src="note.img" alt="" width="200px" />
    <ul v-else-if="note.todo">
        <li v-for='todo in note.todo'></li>
    </ul>
    <input type="color" v-model='styleObject.backgroundColor' @change="colorPicked" name="" id=""/>
    </section>
    `,

    props: ['note'],

    data() {
        return {
            styleObject: {
                backgroundColor: ''
            }
        }
    },

    created() {
        this.styleObject.backgroundColor = this.note.bgc
    },

    methods: {
        colorPicked() {
            noteService.changeBGC(this.note.id, this.styleObject.backgroundColor)
        }
    }
}