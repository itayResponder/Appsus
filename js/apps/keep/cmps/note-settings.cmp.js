import { noteService } from '../services/notes-service.js'

export default {

    template: `
        <div class="settings">
            <div>
                <textarea v-model.onchange="txt"></textarea>
                <img @click.stop="noteTxt" src="../../../../svg/text.svg"/>
                <img @click.stop="noteImage" src="../../../../svg/image.svg"/>
                <img @click.stop="noteTodo" src="../../../../svg/todo.svg"/>
                <img @click.stop="colorNote" src="../../../../svg/color-plate.svg" :class="{colorClicked: this.isColorClicked}"/>
                <img @click.stop="pinNote" src="../../../../svg/pin.svg"/>
                <img @click.stop="deleteNote" src="../../../../svg/trash-can.svg"/>
            </div>
        </div>
        
        `,

        data() {
            return {
                txt:'',
                isColorClicked: false,
                colors: []
            }
        },

        compononets: {
            noteService     
        },
        
        created() {
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