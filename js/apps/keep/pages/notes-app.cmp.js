import noteTxt from '../cmps/note-txt.cmp.js';

export default {
    template: `
        <section class="notes-app">
            <h1>Notes-App</h1>
            <note-txt></note-txt>
        </section>
    `,

    data() {
        return {

        }
    },
    components: {
        noteTxt,
    }

}