
export default {
    template: `
    <p v-if="note.txt"> {{note.txt}} </p>
    <img v-else-if="note.img" :src="note.img" alt="" width="200px" />
    <ul v-else-if="note.todo">
        <li v-for='todo in note.todo'></li>
    </ul>
    `,

    props: ['note']
}