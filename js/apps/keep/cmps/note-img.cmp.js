import { createImg, updateNote, getById } from '../services/notes-service.js'
import noteColors from './note-colors.cmp.js';
import { THEME_GREY } from './note-colors.cmp.js';

const themeToClass = (theme) => theme.toLowerCase().replace('_', '-');

export default {
    name: 'note-img',
    template: `
    <section :class="note.theme" class="note-txt">
        <input type="text" v-model="note.url" placeholder= 'url..' />
        <note-colors @theme-changed="changeTheme" />
        <button @click="create">{{this.inEdit ? 'Update' : 'Save'}}</button>
    </section>
    `,

    props: ['id'],

    data() {
        return {
            note: {
                title: "",
                url: "",
                theme: themeToClass(THEME_GREY),
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
                createImg(this.note);
            }
            
        }
    },

    components: {
        noteColors
    }
}