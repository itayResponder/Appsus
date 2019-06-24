import emailPreview from './email-preview.cmp.js';
{/* <email-list> renders a list of <email-preview> pass down an email prop */}

export default {
    template: `
    <section class="emails-list">
            <section>
                <email-preview v-for="currentEmail,idx in emails" :key="idx" :email="currentEmail">
                    </email-preview>
            </section>
        </section>
    `,
    props: ['emails'],
    created() {
    },
    components: {
        emailPreview,
    }
}