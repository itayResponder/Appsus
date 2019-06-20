

//  <email-preview>
// o Has an email prop
// o Renders the subject
// o Gives visual indication for read/unread (i.e.: bold/unbold ; closed or
// open envelop) 

// import { emailService } from '../services/email.service.js'

export default {
    props: ['email'],
    // <router-link :to="emailUrl" class="email-list">
    // </router-link>
    template: `
    <!-- <div @click.stop ="checkemail" class="email-list"> -->
    <section class="email-preview-container">
        <h2>{{email.from.name}}</h2>
        <h4>{{email.massage.subject}}</h4> 
        <h4>{{email.massage.desc}}</h4> 
    </section>
    `,
}
    // computed: {
    //     emailUrl() {
    //         return '/email-store/' + this.email.id
    //     },  
    // },
//     methods: {
//         checkemail() {
//             console.log('succeed')
//             emailService.addemailIfNew(this.email)
//         }
//     }
// }