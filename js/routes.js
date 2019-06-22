
import homePage from './apps/main/pages/homepage.cmp.js';
import emailApp from './apps/email/pages/email-app.cmp.js';
import emailDetails from './apps/email/pages/email-details.cmp.js';
import emailList from './apps/email/cmps/email-list.cmp.js';

export default [
    { path: '/', component: homePage },
    { path: '/miss-email/', component: emailApp,
        children: [
            {
                path:'inbox',
                component: emailList
            },
            {
                path:':emailId',
                component: emailDetails
            },
        ]
    },
]