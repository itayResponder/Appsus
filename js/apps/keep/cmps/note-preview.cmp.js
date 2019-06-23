import { noteService } from '../services/notes-service.js'

export default {
    template: `
    <section class="note-preview" :style = "{backgroundColor: this.note.bgc}">
        <p v-if="note.txt"> {{note.txt}} </p>
        <img v-else-if="note.img" :src="note.img" alt="" width="200px" />
        <ul v-else-if="note.list">
            <li v-for='list in note.list'>{{list}}</li>
        </ul>
        <div class="input-color-container">
            <input id="input-color" v-model='styleObject.backgroundColor' @change="colorPicked" class="input-color" type="color">
        </div>
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

    methods: {
        colorPicked() {
            noteService.changeBGC(this.note.id, this.styleObject.backgroundColor)
        }
    }
}