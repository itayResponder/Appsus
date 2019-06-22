import { emailService } from '../services/email.service.js'

export default {
    props: ['unReadCounter'],
    template: `
        <div>
            <nav class="sidenav-bar">
                <ul>
                    <li><router-link exact to="/miss-email/inbox">Inbox ({{unReadCounter}})</router-link></li>
                    <li><router-link to="/miss-email/starred">Starred</router-link></li>
                    <li><router-link to="/miss-email/sent">Sent</router-link></li>
                    <li><router-link to="/miss-email/trash">Trash</router-link></li> 
                </ul>
            </nav>
        </div>    
    `,
    data() {
        return {
        }
    },
    computed: {
    },
    created() {
        console.log('side-nav-count',this.unReadCounter);
        },
}