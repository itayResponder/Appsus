import { noteService } from '../services/notes-service.js'

import todoList from '../cmps/note-todo.cmp.js'
import noteList from '../cmps/note-list.cmp.js'

export default {
    template: `
        <section class="notes-app">
            <h1>Notes-App</h1>
            <section>
                <div class="note-txt">
                    <textarea v-model.onchange="txt" :txt="pushText"></textarea>
                </div>
                <div class="settings">
                    <img @click.stop="color" src="../../../../svg/color-plate.svg" :class="{colorClicked: this.isColorClicked}"/>
                    <img @click.stop="deleteNote" src="../../../../svg/pin.svg" :class="{}"/>
                    <img @click.stop="deleteNote" src="../../../../svg/trash-can.svg" :class="{}"/>
                </div>
            </section>         
            <note-list :notes = "notes"></note-list>
        </section>
    `,

    data() {
        return {
            txt:'',
            notes: ''
        }
    },

    created() {
        noteService.query()
        .then(notes => this.notes = notes)
    },

    components: {
        todoList,
        noteList
    },
    methods: {
        pushText() {
            noteService.add(this.txt);
            noteService.query()
            .then(notes => console.log(notes))
        }
    }

}