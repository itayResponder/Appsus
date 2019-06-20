//  <email-preview>
// o Has an email prop
// o Renders the subject
// o Gives visual indication for read/unread (i.e.: bold/unbold ; closed or
// open envelop) 
import { emailService } from '../../services/email/email.service.js'


export default {
    template: `
        <section class="email-preview-container" @click.stop = 'goToMail'>
            <h2>{{email.from.name}}</h2>
            <div class="massage-container">
                <span :class="{bold: !email.massage.isRead}">{{email.massage.subject}}</span> 
                <span class="decription">{{email.massage.desc}}</span> 
                test: {{email.massage.isRead}}
            </div>
            <span>{{email.date}}</span>
        </section>
        `,

    props: ['email'],

    methods: {
        goToMail() {
            this.$router.push({ path: '/miss-email/' + this.email.id })
            emailService.emailRead(this.email.id)
        }
    }
}