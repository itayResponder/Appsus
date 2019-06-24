

export default {
    template: `
    <section class="email-preview-container" @click.stop = 'goToMail'>
            <h1>Email Starred</h1>
            <!-- <img @click.stop="starredEmail" src="../../../../svg/star.svg" :class="{yellowed: email.message.isStarred}"/>
            <h2>{{email.from.name}}</h2>
            <div class="massage-content">
                <div class="message-container">
                    <span :class="{bold: !email.message.isRead}">{{email.message.subject}}</span> 
                    <span class="decription">{{email.message.desc}}</span>
                </div>
                <div class="right-side">
                <span>{{date}}</span>
            <img @click.stop='deleteEmail' src='../../../../svg/trash-can.svg' alt="Delete mail"/>
            <img @click.stop='changeReadorUnread' src='../../../../svg/message.svg'/>
            </div>
            </div> -->
        </section>
    `,

    props:['email'],
    data() {
        return {

        }
    }
}