// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './custom.css'

// Custom Badges
// ** Vue JS
import BadgeVueJunior from '/assets/vue/composants/vue-js-badge-junior.vue'
import BadgeVueSenior from '/assets/vue/composants/vue-js-badge-senior.vue'
import BadgeVueExpert from '/assets/vue/composants/vue-js-badge-expert.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // Vue JS
    app.component('BadgeVueJunior', BadgeVueJunior)
    app.component('BadgeVueSenior', BadgeVueSenior)
    app.component('BadgeVueExpert', BadgeVueExpert)
  }
} satisfies Theme
