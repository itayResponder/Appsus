// • <email-status>
// • Renders how many read from the emails
import { emailService } from '../services/email.service.js'
import { EventBus, EMAIL_READ } from '../../../event-bus.js';

export default {
    template: `<span  v-if="unRead">{{ unRead }}</span>`,

    data() {
        return {
            unRead: 0
        }
    },
    mounted() {
        this.unRead = emailService.countUnread();
        
        EventBus.$on(EMAIL_READ, () => {
            this.unRead = emailService.countUnread();
        });
    },
}