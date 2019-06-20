import homePage from '../pages/homepage.cmp.js';
import emailApp from '../pages/email/email-app.cmp.js';
import emailDetails from '../pages/email-details.cmp.js';
// import aboutCmp from './pages/about.cmp.js';
// import addemail from './pages/email-add.cmp.js';

export default [
    { path: '/', component: homePage },
    { path: '/miss-email', component: emailApp },
    { path: '/miss-email/:emailId', component: emailDetails },
    // { path: '/emails', component: emailApp },
    // { path: '/addemail', component: addemail },
]