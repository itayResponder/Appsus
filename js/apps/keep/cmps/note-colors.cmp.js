export const THEME_BLUE = 'THEME_BLUE', THEME_GREEN = 'THEME_GREEN', THEME_RED = 'THEME_RED',
    THEME_YELLOW = 'THEME_YELLOW', THEME_GREY = 'THEME_GREY', THEME_WHITE = 'THEME_WHITE';

export default {
    template: `
    <section class="colors-container">
        <div class="color-box theme-white" @click="colorPicked('${THEME_WHITE}')"></div>
        <div class="color-box theme-blue" @click="colorPicked('${THEME_BLUE}')"></div>
        <div class="color-box theme-green" @click="colorPicked('${THEME_GREEN}')"></div>
        <div class="color-box theme-yellow" @click="colorPicked('${THEME_YELLOW}')"></div>
        <div class="color-box theme-grey" @click="colorPicked('${THEME_GREY}')"></div>
        <div class="color-box theme-red" @click="colorPicked('${THEME_RED}')"></div>
    </section>
    `,

    methods: {
        colorPicked(theme) {
            this.$emit('theme-changed', theme)
        }
    }
}