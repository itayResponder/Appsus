import { noteService } from '../services/notes-service.js'

import noteList from '../cmps/note-list.cmp.js'
import noteSetting from '../cmps/note-settings.cmp.js';
export default {
    template: `
        <section class="notes-app">
                <div class="note-start">
                    <note-setting></note-setting>
                </div>      
            <note-list :notes = "notes"></note-list>
        </section>
    `,

    data() {
        return {
            notes: '',
        }
    },

    created() {
        noteService.query()
        .then(notes => this.notes = notes)
    },

    components: {
        noteList,
        noteSetting
    },
}