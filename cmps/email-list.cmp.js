import bookPreview from './book-preview.cmp.js';

export default {
    template: `
    <section>
            <h1>Books</h1>
            <section class="books-list">
                <book-preview v-for="currentbook in books" v-bind:book="currentbook">
                </book-preview>
            </section>
        </section>
    `,
    props: ['books'],
    
    components: {
        bookPreview
    }
}