import { noteService } from '../services/notes-service.js'
import { NOTE_IMAGE, NOTE_TEXT, NOTE_TODO } from '../pages/notes-app.cmp.js';

export default {
    template: `
        <div class="settings">
            <div>
                <img @click.stop="noteTxt" src="../../../../svg/text.svg"/>
                <img @click.stop="noteImage" src="../../../../svg/image.svg"/>
                <img @click.stop="noteTodo" src="../../../../svg/todo.svg"/>
            </div>
        </div>
        `,

    methods: {
        noteTxt() {
            this.$emit('component-change', NOTE_TEXT);
        },
        noteImage() {
            this.$emit('component-change', NOTE_IMAGE);
        },
        noteTodo() {
            this.$emit('component-change', NOTE_TODO);
        },
    },
    compononets: {
        noteService
    },
}