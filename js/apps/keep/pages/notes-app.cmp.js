import { noteService } from '../services/notes-service.js'

import noteTxt from '../cmps/note-txt.cmp.js';
import todoList from '../cmps/note-todo.cmp.js'
import noteList from '../cmps/note-list.cmp.js'

export default {
    template: `
        <section class="notes-app">
            <h1>Notes-App</h1>
            <note-txt />
            <!-- <todo-list /> -->
            <note-list :notes = "notes"></note-list>            
        </section>
    `,

    data() {
        return {
            notes: ''
        }
    },

    created() {
        noteService.query()
        .then(notes => this.notes = notes)
    },

    components: {
        noteTxt,
        todoList,
        noteList
    }

}