export default {
    template: `
        <div>
            <nav class="sidenav-bar">
                <ul>
                    <li><router-link exact to="/miss-email">Inbox</router-link></li>
                    <li><router-link to="/miss-email/email-starred">Starred</router-link></li>
                    <li><router-link to="/miss-email/trash">Trash</router-link></li> 
                </ul>
            </nav>
            <h1>email-side-bar</h1>
        </div>    
    `,
}