import { noteService } from '../services/notes-service.js'

export default {

    template: `
        <section class="settings">
            <div>
                <img @click.stop="color" src="../../../../svg/color-plate.svg" :class="{colorClicked: this.isColorClicked}"/>
                <img @click.stop="deleteNote" src="../../../../svg/pin.svg" :class="{}"/>
                <img @click.stop="deleteNote" src="../../../../svg/trash-can.svg" :class="{}"/>
            </div>
        </section>
        
        `,

        data() {
            return {
                isColorClicked: false,
                colors: []
            }
        },

        compononets: {
            noteService     
        },
        
        created() {
            noteService.query().then(colors => {
                // console.log(colors);
                this.colors.push(colors[0].color);
            })
            console.log(this.colors);
        },

        methods: {
            color() {
                this.isColorClicked = !this.isColorClicked;
            }
        }
    
}