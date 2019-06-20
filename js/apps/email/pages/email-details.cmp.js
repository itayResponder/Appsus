// • <email-details>
// • Routable component (page)
// • show the entire email
// • allow deleting an email (using a service)

import { emailService } from '../services/email.service.js';

export default {

    // • Show entire details
    template: `
    <section class="email-details" v-if="email">
    <h1>{{email}}</h1>
    <h1>{{email.message.subject}}</h1>
    <p>{{email.from.name}}</p>
    <p><{{email.from.email}}></p>
    <p>{{email.message.desc}}</p>

    </section>
    `,

    data() {
        return {
            email: null
        }
    },

    created() {
        const emailId = this.$route.params.emailId;
        console.log(emailId)
        emailService.getById(emailId)
            .then(email => {
                this.email = email})
    },

}