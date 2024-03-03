import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dév. Web Notes",
  description: "My personnal notes in my developper journey",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Notes', link: '/notes/index.md' }
    ],
    sidebar: generateSidebar({
      documentRootPath: '/',
      scanStartPath: '/notes/',
      useTitleFromFrontmatter: true,
      collapsed: true,
      hyphenToSpace: true,
      underscoreToSpace: true,
      capitalizeEachWords: true
    }),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
