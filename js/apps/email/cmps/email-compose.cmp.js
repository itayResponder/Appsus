//• Has a form with subject and body
// • Use the service to add email to the list
// • Yes, we are only supporting selfi-emails for now (-:

export default {

    template: `
    <section class="compose-modal">
    <button class="btn-compose" @click="compose">Compose</button>
    <div class="my-form" v-show="isActivated">
        <form @submit.prevent="sendEmail">
            <input type="text" v-model="email.to" rows="3" max-rows="6"/>
            <input type="text" v-model="email.subject"/>
            <textarea v-model="email.msg"></textarea>
            <!-- <button type="submit" @click="send">Send</button> -->
        </form>
    </div>
    </section>

    `,
    data() {
        return {
            email: {
                to: '',
                subject: '',
                msg: '',
                date: ''
            },
            isActivated: false
        }
    },

    methods: {
        compose() {
            this.isActivated = !this.isActivated;
        },

        sendEmail() {
            this.date = Date.now();
            console.log('saving email...');
        },

        send() {

        }
    }
}