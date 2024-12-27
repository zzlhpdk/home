import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'zzlhpdk',
  description: 'A Personal Channel',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      {
        text: '首页',
        items: [
          { text: '首页', link: '/' },
          { text: '示例', link: '/markdown-examples' }
        ]
      },
      { text: '示例', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/zzlhpdk' }],
    footer: {
      copyright: '© 2023 zzlhpdk'
    }
  }
});
