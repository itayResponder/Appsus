import { noteService, remove } from '../services/notes-service.js'
import noteTxt from '../cmps/note-txt.cmp.js'
import noteImg from '../cmps/note-img.cmp.js'
import noteTodo from '../cmps/note-todo.cmp.js'

export default {
    template: `
    <section class="note-preview" :class="this.note.theme">
        <component :is="currentComponent" :id='this.note.id' @edit-finished="hideNote"></component>
        <div  class="note-preview-type" v-if="note.type === 'TEXT' && !currentComponent">
            <h2>{{note.title}}</h2>
            <p>{{note.text}}</p>
            <div class="buttons">
                <img @click.stop="changeComponent" class="svg" src="svg/edit.svg"/>
                <img @click.stop="deleteNote" class="svg" src="svg/trash-can.svg"/>
            </div>
        </div>
        <div class="note-preview-type" v-if="note.type === 'IMAGE' && !currentComponent">
            <h2>{{note.title}}</h2>
            <img class="note-img" :src="this.note.url" />
            <div class="buttons">
                <img @click.stop="changeComponent" class="svg" src="svg/edit.svg"/>
                <img @click.stop="deleteNote" class="svg" src="svg/trash-can.svg"/>
            </div>
        </div>
        <div class="note-preview-type" v-if="note.type === 'TODO' && !currentComponent">
            <h2>{{note.title}}</h2>
            <ul>
                <li 
                v-for="(todo, i) in note.todos" 
                @click="toggleTodo(i)" 
                :class="{'todo-done' : todo.isDone}">
                {{ i+1 }}. {{todo.text}}
            </li>
        </ul>
        <div class="buttons">
            <img @click.stop="changeComponent" class="svg" src="svg/edit.svg"/>
            <img @click.stop="deleteNote" class="svg" src="svg/trash-can.svg"/>
        </div>
        </div>
    </section>
    `,

    props: ['note'],

    data() {
        return {
            currentComponent: ''
        }
    },
    methods: {
        deleteNote() {
            remove(this.note.id)
        },

        changeComponent() {
            switch (this.note.type) {
                case 'TEXT':
                    this.currentComponent = noteTxt;
                    break;
                case 'IMAGE':
                    this.currentComponent = noteImg;
                    break;
                case 'TODO':
                    this.currentComponent = noteTxt;
                    break;
            }
        },

        toggleTodo(idx) {
            this.note.todos[idx].isDone = !this.note.todos[idx].isDone
        },

        hideNote() {
            this.currentComponent = ''
        }
    },

    components: {
        noteTxt,
        noteImg,
        noteTodo
    }
}