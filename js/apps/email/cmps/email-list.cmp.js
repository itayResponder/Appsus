import emailInbox from './email-inbox.cmp.js';
{/* <email-list> renders a list of <email-preview> pass down an email prop */}

export default {
    template: `
    <section class="emails-list">
            <section>
                <email-inbox v-for="currentEmail,idx in emails" :key="idx" v-if="!currentEmail.message.isTrashed" :email="currentEmail">
                    </email-inbox>
            </section>
        </section>
    `,
    props: ['emails'],
    created() {
    },
    components: {
        emailInbox,
    }
}