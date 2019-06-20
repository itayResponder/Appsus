export default {
    name: 'mainAppHeader',
    template: `
        <header>
            <nav class="nav-bar">
                <ul>
                    <li><router-link exact to="/">Home</router-link></li>
                    <li><router-link to="/miss-email">Miss Email</router-link></li>
                    <li><router-link to="/miss-keep">Miss keep</router-link></li> 
                    <li><router-link to="/miss-book">Miss Book</router-link></li>
                </ul>
            </nav>
            <h1>main-header</h1>
        </header>    
    `,
}