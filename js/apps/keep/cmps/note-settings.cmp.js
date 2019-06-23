

export default {

    template: `
        <section class="settings">
            <div>
            <img @click.stop="color" src="../../../../svg/color-plate.svg" :class="{colorClicked: this.isColorClicked}"/>
            <img @click.stop="deleteNote" src="../../../../svg/trash-can.svg" :class="{}"/>
            </div>
        </section>
        
        `,

        data() {
            return {
                isColorClicked: false
            }
        },

        methods: {
            color() {
                this.isColorClicked = !this.isColorClicked;
                console.log(this.isColorClicked);
            }
        }
    
}