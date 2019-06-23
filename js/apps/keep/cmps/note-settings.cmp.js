

export default {

    template: `
        <section class="settings">
            <div>
            <img @click.stop="color" src="../../../../svg/color-plate.svg" :class="{clicked:}"/>
            <img @click.stop="deleteNote" src="../../../../svg/trash-can.svg" :class="{}"/>
            </div>
        </section>
        
        `,

        data() {
            return {

            }
        },

        methods: {
            color() {
                console.log('color-clicked');
            }
        }
    
}