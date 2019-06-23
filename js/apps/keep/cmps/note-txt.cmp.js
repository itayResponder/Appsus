import {noteService} from '../services/notes-service.js'
import noteSettings from './note-settings.cmp.js';

export default {
    template: `
    <section class="note">
        <div class="note-txt">
            <textarea v-model.lazy="txt" :txt="pushText"></textarea>
            <pre>{{this.txt}}</pre>
            
            <note-settings></note-settings>
        </div>
    </section>
    `,

    data() {
        return {
            txt:''
        }
    },
    components: {
        noteSettings,
        noteService,
    },
    methods: {
        pushText() {
            noteService.add(this.txt);
            noteService.query()
            .then(notes => console.log(notes))
        }
    }
}