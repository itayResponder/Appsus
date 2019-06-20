import homePage from '../pages/homepage.cmp.js';
import emailApp from '../pages/email/email-app.cmp.js';
// import aboutCmp from './pages/about.cmp.js';
// import bookDetails from './pages/book-details.cmp.js';
// import addBook from './pages/book-add.cmp.js';

export default [
    { path: '/', component: homePage },
    { path: '/miss-email', component: emailApp },
    // { path: '/books', component: bookApp },
    // { path: '/book/:bookId', component: bookDetails },
    // { path: '/addBook', component: addBook },
]