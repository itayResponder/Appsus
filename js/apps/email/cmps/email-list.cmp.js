import emailPreview from './email-preview.cmp.js';
import sideNav from '../cmps/email-side-navbar.cmp.js';
{/* <email-list> renders a list of <email-preview> pass down an email prop */}

export default {
    template: `
    <section>
            <section class="emails-list">
                <email-preview v-for="currentemail,idx in emails" class='email-preview' :key="idx" v-bind:email="currentemail">
                </email-preview>
            </section>
        </section>
    `,
    props: ['emails'],
    created() {
    },
    components: {
        emailPreview,
        sideNav
    }
}