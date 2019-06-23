import { noteService } from '../services/notes-service.js'

export default {
    template: `
    <section>
    <p v-if="note.txt"> {{note.txt}} </p>
    <img v-else-if="note.img" :src="note.img" alt="" width="200px" />
    <ul v-else-if="note.todo">
        <li v-for='todo in note.todo'></li>
    </ul>
    <input type="color" @change="colorPicked" name="" id=""/>
    </section>
    `,

    props: ['note'],

    methods: {
        colorPicked() {
            console.log(this.note.id)
            noteService.changeBGC(this.note.id)
        }
    }
}