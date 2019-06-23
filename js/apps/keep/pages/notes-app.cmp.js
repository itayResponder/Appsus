import { noteService } from '../services/notes-service.js'

import todoList from '../cmps/note-todo.cmp.js'
import noteList from '../cmps/note-list.cmp.js'

export default {
    template: `
        <section class="notes-app">
            <h1>Notes-App</h1>
            <section>
                <div class="note-txt">
                    <textarea v-model.onchange="txt"></textarea>
                </div>
                <div class="settings">
                    <img @click.stop="noteTxt" src="../../../../svg/text.svg"/>
                    <img @click.stop="noteImage" src="../../../../svg/image.svg"/>
                    <img @click.stop="noteTodo" src="../../../../svg/todo.svg"/>
                    <img @click.stop="colorNote" src="../../../../svg/color-plate.svg" :class="{colorClicked: this.isColorClicked}"/>
                    <img @click.stop="pinNote" src="../../../../svg/pin.svg"/>
                    <img @click.stop="deleteNote" src="../../../../svg/trash-can.svg"/>
                </div>
            </section>         
            <note-list :notes = "notes"></note-list>
        </section>
    `,

    data() {
        return {
            txt:'',
            notes: '',
            isColorClicked: false,
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
        colorNote() {
            this.isColorClicked = !this.isColorClicked;
        },
        noteTxt() {
            noteService.add('txt',this.txt);
            this.txt = '';
        },
        noteImage() {
            noteService.add('img',this.txt);
            this.txt = '';
        },

        noteTodo() {
            noteService.add('todo',this.txt);
            this.txt = '';
        },
    }

}