// • <email-details>
// • Routable component (page)
// • show the entire email
// • allow deleting an email (using a service)

import { emailService } from '../services/email.service.js';

export default {

    // • Show entire details
    template: `
    <section class="email-details" v-if="email">
        <div class="sender">
            <p>From: {{email.from.name}}</p>
            <img :src="email.from.thumbnail"/>
        </div>
        <p>Mail: {{email.from.email}}</p>
        <h1>Subject: {{email.message.subject}}</h1>
        <p>Description: {{email.message.desc}}</p>
    </section>
    `,
    data() {
        return {
            email: null
        }
    },

    created() {
        const emailId = this.$route.params.emailId;
        emailService.getById(emailId)
            .then(email => {
                this.email = email
                console.log(this.email);
            })
    },
}