//  <email-preview>
// o Has an email prop
// o Renders the subject
// o Gives visual indication for read/unread (i.e.: bold/unbold ; closed or
// open envelop) 
import { emailService } from '../../email/services/email.service.js'


export default {
    template: `
        <section class="email-preview-container" @click.stop = 'goToMail'>
            <h2>{{email.from.name}}</h2>
            <div class="message-container">
                <span :class="{bold: !email.message.isRead}">{{email.message.subject}}</span> 
                <span class="decription">{{email.message.desc}}</span>
                <img @click.stop='deleteEmail' src='../../../../svg/trash-can.svg'/>
            </div>
            <span>{{email.date}}</span>
        </section>
        `,

    props: ['email'],

    methods: {
        goToMail() {
            this.$router.push({ path: '/miss-email/' + this.email.id })
            emailService.emailRead(this.email.id)
        },
        deleteEmail() {
            emailService.deleteEmail(this.email.id)
        }
    },
}