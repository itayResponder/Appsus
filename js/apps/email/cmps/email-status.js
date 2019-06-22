// • <email-status>
// • Renders how many read from the emails
import { emailService } from '../services/email.service.js'

export default {
    template:`<span :unRead="checkUnread" v-if="unRead">{{ unRead }}</span>`,

    data() {
        return {
            unRead: 0
        }
    },

    methods: {
        checkUnread() {
            this.unRead = emailService.countUnread();  
            console.log('email-status',this.unRead);  
        }
    },
    mounted() {
        this.unRead = emailService.countUnread();
    },
}