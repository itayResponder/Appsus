import noteSettings from './note-settings.cmp.js';

export default {
    template: `
    <section class="note-txt">
        <h1>This is note-txt</h1>
        <note-settings></note-settings>
    </section>
    `,

    data() {
        return {

        }
    },
    components: {
        noteSettings,
    }
}