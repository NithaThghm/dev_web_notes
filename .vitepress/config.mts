import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';
import markdownItFootnote from 'markdown-it-footnote'

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
    outline: [2, 3],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    config: (md) => {
      md.use(markdownItFootnote)
      md.renderer.rules.footnote_block_open = () => (
        '<h2 id="sources" tabindex="-1">📖 Sources<a class="header-anchor" href="#sources" aria-label="Permalink to \'Sources\'"></a></h2>' +
        '<section class="footnotes">\n' +
        '<ol class="footnotes-list">\n'
      );
    }
  }
})
