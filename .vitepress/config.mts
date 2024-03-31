import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';
import markdownItFootnote from 'markdown-it-footnote'
import markdownItMark from 'markdown-it-mark'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dév. Web Notes",
  description: "My personnal notes in my developper journey",
  lastUpdated: true,
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
      capitalizeEachWords: true,
      sortMenusOrderByDescending: true,
      frontmatterOrderDefaultValue: 100
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
        '<h2 id="sources" tabindex="-1">📑 Footnotes<a class="header-anchor" href="#sources" aria-label="Permalink to \'Sources\'"></a></h2>' +
        '<p><b><ins>Légende</ins> :</b> <ul style="list-style:none"><li>📖 Source, référence, ...</li><li>🗝️ Key point : mot clé permettant de comprendre des points important.</li></ul></p>' +
        '<hr class="footnotes-divider">' +
        '<section class="footnotes">\n' +
        '<ol class="footnotes-list">\n'
      )
      md.use(markdownItMark)
    }
  }
})
