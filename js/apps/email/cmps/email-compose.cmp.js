//• Has a form with subject and body
// • Use the service to add email to the list
// • Yes, we are only supporting selfi-emails for now (-:
import {emailService} from '../services/email.service.js';

export default {

    template: `
    <section class="compose-modal">
        <transition name="fade">
            <div class="my-form" v-show="isShown">
                <form class="test" @submit.prevent="sendEmail">
                    <input type="text" v-model="email.to" placeholder="To" required autofocus/>
                    <input type="text" v-model="email.subject" placeholder="Subject"/>
                    <textarea v-model="email.msg"></textarea>
                    <button class="email-btn" type="submit" @click="send">Send</button>
                </form>
            </div>
        </transition>
    </section>

    `,
    props: ['isShown'],
    data() {
        return {
            email: {
                to: '',
                subject: '',
                msg: '',
                date: ''
            },
        }
    },
    compononets: {
        emailService,
    },

    methods: {
        sendEmail() {
            this.email.date = Date.now();
            emailService.addEmail(this.email.to, this.email.subject, this.email.msg, this.email.date);
            this.$emit('send-clicked')
        },

        send() {
            
        }
    }
}