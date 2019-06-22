// • <email-status>
// • Renders how many read from the emails
import { emailService } from '../services/email.service.js'

export default {
    template:`<span>{{ unRead }}</span>`,

    data() {
        return {
            unRead: 0
        }
    },

    mounted() {
        this.unRead = emailService.countUnread()
    },
}