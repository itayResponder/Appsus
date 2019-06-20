import homepageCmp from './pages/homepage.cmp.js';
// import bookApp from './pages/book-app.cmp.js';
// import aboutCmp from './pages/about.cmp.js';
// import bookDetails from './pages/book-details.cmp.js';
// import addBook from './pages/book-add.cmp.js';

export default [
    { path: '/', component: homepageCmp },
    { path: '/about', component: aboutCmp },
    { path: '/books', component: bookApp },
    { path: '/book/:bookId', component: bookDetails },
    { path: '/addBook', component: addBook },
]