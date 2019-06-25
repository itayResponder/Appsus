import emailList from './email-list.cmp.js';
import {emailService} from '../services/email.service.js'

export default {
    template: `
        <section class="email-preview-container" @click.stop = 'goToMail' v-show="email.message.isStarred">      
            <img @click.stop="starredEmail" src="svg/star.svg" :class="{yellowed: email.message.isStarred}"/>
            <h2>{{email.from.name}}</h2>
            <div class="massage-content">
                <div class="message-container">
                    <span :class="{bold: !email.message.isRead}">{{email.message.subject}}</span> 
                    <span class="decription">{{email.message.desc}}</span>
                </div>
                <div class="right-side">
                    <span>{{date}}</span>
                    <img @click.stop='deleteEmail' src='svg/trash-can.svg' alt="Delete mail"/>
                    <img @click.stop='changeReadorUnread' src='svg/message.svg'/>
                </div>
            </div>
        </section>
    `,

    props:['email'],
    data() {
        return {
            date: moment(this.email.date).format('LLL')
        }
    },

    methods: {
        goToMail() {
            this.$router.push({ path: '/miss-email/' + this.email.id })
            emailService.emailRead(this.email.id)
        },
        deleteEmail() {
            emailService.deleteEmail(this.email.id)
        },
        changeReadorUnread() {
            emailService.changeReadStatus(this.email.id)
        },
        starredEmail() {
            emailService.changeStarStatus(this.email.id);
        },
    },
    components: {
        emailList,
        emailService
    }
}