import { noteService } from '../services/notes-service.js'

export default {
    template: `
    <section class="note-preview" :style = "{backgroundColor: this.note.bgc}">
        <div class="note-container">
            <p v-if="note.txt"> {{note.txt}} </p>
            <img v-else-if="note.img" :src="note.img" alt="" width="100%" />
            <ul v-else-if="note.list">
                <li v-for='list in note.list'>{{list}}</li>
            </ul>
        </div>
        <div class="controler">
            <div class="input-color-container">
                <input id="input-color" v-model='styleObject.backgroundColor' @change="colorPicked" class="input-color" type="color">
            </div>
            <img @click.stop="pinNote" v-if="!note.isPinned" src="../../../../svg/pin.svg"/>
            <img @click.stop="pinNote" v-else src="../../../../svg/pinned.svg"/>
            <img @click.stop="deleteNote" src="../../../../svg/trash-can.svg"/>
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
        },
        deleteNote() {
            noteService.remove(this.note.id)
        },
        pinNote() {
            this.note.isPinned = !this.note.isPinned;
            noteService.changePinned(this.note.id, this.note.isPinned);
            console.log(this.note.isPinned);
        }
    }
}