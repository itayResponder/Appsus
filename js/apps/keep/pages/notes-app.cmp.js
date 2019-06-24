import { noteService } from '../services/notes-service.js'
import noteTxt from '../cmps/note-txt.cmp.js'
import noteImg from '../cmps/note-img.cmp.js'
import noteTodo from '../cmps/note-todo.cmp.js'
import noteList from '../cmps/note-list.cmp.js'
import noteSetting from '../cmps/note-settings.cmp.js';
import noteFilter from '../cmps/note-filter.cmp.js'
import {EventBus, NOTE_UPDATED } from '../../../event-bus.js';

export const NOTE_TEXT = 'NOTE_TEXT', NOTE_IMAGE = 'NOTE_IMAGE', NOTE_TODO = 'NOTE_TODO';

export default {
    template: `
        <section class="notes-app">
            <div class="new-note">
                <note-filter @set-filter="setFilter"></note-filter>    
                <component :is="currentComponent"></component>
                <note-setting @component-change="changeComponent"></note-setting>
            </div>
            <note-list :notes="notesForDisplay"></note-list>
        </section>
    `,

    data() {
        return {
            notes: '',
            currentComponent: noteTxt,
            filter: null
        }
    },

    created() {
        noteService.query()
            .then(notes => this.notes = notes);
        
            EventBus.$on(NOTE_UPDATED, () => {
                noteService.query()
                .then(notes => this.notes = notes);});
    },

    computed: {
        notesForDisplay() {
            if (!this.filter) return this.notes
            return this.notes.filter(note => note.title.includes(this.filter.txt))
        }
    },

    methods: {
        setFilter(filter) {
            this.filter = filter;
        },
        changeComponent(componentType) {
            switch (componentType) {
                case NOTE_TEXT:
                    this.currentComponent = noteTxt;
                    break;
                case NOTE_IMAGE:
                    this.currentComponent = noteImg;
                    break;
                    case NOTE_TODO:
                        this.currentComponent = noteTodo;
                    break;
            }
        }
    },

    components: {
        noteList,
        noteSetting,
        noteTxt,
        noteImg,
        noteTodo,
        noteFilter
    },
}