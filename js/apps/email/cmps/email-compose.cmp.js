//• Has a form with subject and body
// • Use the service to add email to the list
// • Yes, we are only supporting selfi-emails for now (-:

export default {

    template: `
    <section class="compose-modal">
    <div class="my-form" v-show="isShown">
        <form @submit.prevent="sendEmail">
            <input type="text" v-model="email.to" placeholder="To"/>
            <input type="text" v-model="email.subject" placeholder="Subject"/>
            <textarea v-model="email.msg" rows="3" max-rows="6"></textarea>
            <button type="submit" @click="send">Send</button>
        </form>
    </div>
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

    methods: {

        sendEmail() {
            this.date = Date.now();
            console.log('saving email...');
        },

        send() {

        }
    }
}