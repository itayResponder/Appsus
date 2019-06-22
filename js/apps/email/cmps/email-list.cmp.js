import emailPreview from './email-preview.cmp.js';
{/* <email-list> renders a list of <email-preview> pass down an email prop */}

export default {
    template: `
    <section class="emails-list">
            <section>
                <email-preview v-for="currentemail,idx in emails" :key="idx" v-bind:email="currentemail">
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