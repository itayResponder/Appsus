// import {noteService} from '../services/notes-service.js'
// import noteSettings from './note-settings.cmp.js';
import { createText, updateNote, getById } from '../services/notes-service.js'
import noteColors from './note-colors.cmp.js';
import { THEME_WHITE } from './note-colors.cmp.js';

const themeToClass = (theme) => theme.toLowerCase().replace('_', '-');

export default {
    name: 'note-txt',
    template: `
    <section :class="note.theme" class="note-txt">
        <input type="text" v-model="note.title" placeholder= 'Title..' />
        <textarea type="text" v-model="note.text" placeholder='Write your note...' />
        <note-colors @theme-changed="changeTheme" />
        <button @click="create">{{this.inEdit ? 'Update' : 'Save'}}</button>
    </section>
    `,

    props: ['id'],

    data() {
        return {
            note: {
                title: "",
                text: "",
                theme: themeToClass(THEME_WHITE),
            }
        }
    },

    created() {
        if (this.id) {
            getById(this.id)
                .then(note => {
                    this.note = note;
                    this.inEdit = true;
                });
        }
    },
    methods: {
        changeTheme(theme) {
            this.note.theme = themeToClass(theme);
        },
        create() {
            if (this.inEdit) {
                updateNote(this.note);
                this.$emit('edit-finished')
            } else {
                createText(this.note);
            }
            
        }
    },

    components: {
        noteColors
    }
}