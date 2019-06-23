import notePreview from '../cmps/note-preview.cmp.js'

export default {
    template: `
    <section>
    <note-preview v-for = 'note, idx in notes' :key='idx' :note = "note" />
    </section>
    `,

    props:['notes'],

    components: {
        notePreview
    }

}

