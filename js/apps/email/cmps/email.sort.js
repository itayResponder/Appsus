import { emailService } from '../services/email.service.js'

export default {
    template: `
    <select v-model="sortBy" @change="sortEmails">
        <option value="date">By Date</option>
        <option value="name">By Name</option>
    </select>`,

    data() {
        return {
            sortBy: 'date'
        }
    },

    methods: {
        sortEmails() {
            emailService.sortEmails(this.sortBy)
        }
    }
}