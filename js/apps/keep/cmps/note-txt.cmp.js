import noteSettings from './note-settings.cmp.js';

export default {
    template: `
    <section class="note">
        <div class="note-txt">
            <textarea v-model="text"></textarea>
            <pre>{{this.text}}</pre>
            <note-settings></note-settings>
        </div>
    </section>
    `,

    data() {
        return {
            text:''
        }
    },
    components: {
        noteSettings,
    }
}