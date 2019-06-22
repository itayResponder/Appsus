import unread from '../cmps/email-status.js'

export default {
    template: `
        <div>
            <nav class="sidenav-bar">
                <ul>
                    <li><router-link exact to="/miss-email/inbox">Inbox <unread></unread></router-link></li>
                    <li><router-link to="/miss-email/starred">Starred</router-link></li>
                    <li><router-link to="/miss-email/sent">Sent</router-link></li>
                    <li><router-link to="/miss-email/trash">Trash</router-link></li> 
                </ul>
            </nav>
        </div>    
    `,

    components: {unread}

}