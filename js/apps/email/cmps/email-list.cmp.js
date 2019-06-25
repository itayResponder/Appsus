{/* <email-list> renders a list of <email-preview> pass down an email prop */ }
import emailInbox from './email-inbox.cmp.js';
import emailStarred from './email-starred.cmp.js';
import emailSent from './email-sent.cmp.js';
import emailTrash from './email-trash.cmp.js';

export default {
    template: `
    <section class="emails-list">
        <h1>EMAIL_LIST</h1>
            <section>
                <section v-if="$route.path === '/miss-email/inbox'">
                    <email-inbox v-for="currentEmail,idx in emails" :key="idx" :email="currentEmail"></email-inbox>
                </section>
                <section v-if="$route.path === '/miss-email/starred'">
                    <email-starred v-for="currentEmail,idx in emails" :key="idx" :email="currentEmail"></email-starred>
                </section>
                <section v-if="$route.path === '/miss-email/sent'">
                    <email-sent v-for="currentEmail,idx in emails" :key="idx" :email="currentEmail"></email-sent>
                </section>
                <section v-if="$route.path === '/miss-email/trash'">
                    <email-trash v-for="currentEmail,idx in emails" :key="idx" :email="currentEmail"></email-trash>
                </section>
            </section>
        </section>
    `,
    props: ['emails'],
    created() {
    },
    components: {
        emailInbox,
        emailStarred,
        emailSent,
        emailTrash
    }
}