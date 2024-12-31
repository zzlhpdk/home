import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'zzlhpdk',
  description: 'A Personal Channel',
  head: [['link', { rel: 'zzlhpdk', href: '/home/favicon.ico' }]],
  base: '/home/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    siteTitle: false,
    outline: [1, 6],
    outlineTitle: '标题',
    nav: [
      {
        text: '组件',
        link: '/view/zzlhpdk-ui/index'
      },
      { text: '博客', link: '/blog/index' }
    ],
    sidebar: [
      {
        text: '导航',
        items: [
          { text: 'zzlhpdk-ui', link: '/view/zzlhpdk-ui/index' },
          { text: 'blog', link: '/view/blog/index' }
        ]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/zzlhpdk' }],
    footer: {
      copyright: '© 2025 zzlhpdk'
    }
  }
});
