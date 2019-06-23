import noteTxt from '../cmps/note-txt.cmp.js';
import todoList from '../cmps/note-todo.cmp.js'

export default {
    template: `
        <section class="notes-app">
            <h1>Notes-App</h1>
            <note-txt />
            <todo-list />
        </section>
    `,

    data() {
        return {

        }
    },
    components: {
        noteTxt,
        todoList
    }

}