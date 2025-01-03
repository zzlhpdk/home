import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'zzlhpdk',
  description: 'A Personal Channel',
  head: [['link', { rel: 'zzlhpdk', href: '/favicon.ico' }]],
  // base: '/home/',
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
      {
        text: '后管系统',
        items: [
          { text: 'Pikachu-Admin', link: '/view/manage/pikachu-admin' },
          { text: 'bulbasaur-admin', link: '/view/manage/bulbasaur-admin' }
        ]
      },
      {
        text: '博客',
        link: '/view/zzlhpdk-ui/index'
      }
    ],
    sidebar: [
      {
        text: '业务',
        items: [
          {
            text: 'component',
            items: [{ text: 'zzlhpdk-ui', link: '/view/zzlhpdk-ui/index' }]
          },
          {
            text: 'function',
            items: [{ text: 'axios封装', link: '/view/zzlhpdk-ui/index' }]
          }
        ]
      },
      {
        text: '后管系统',
        items: [
          { text: 'Pikachu-Admin', link: '/view/manage/pikachu-admin' },
          { text: 'bulbasaur-admin', link: '/view/manage/bulbasaur-admin' }
        ]
      },
      {
        text: '博客',
        items: [
          { text: 'Javascript', link: '/view/blog/javascript/index' },
          {
            text: 'Vue',
            link: '/view/blog/vue/index'
          },
          {
            text: 'work',
            link: '/view/blog/work/index'
          }
        ]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/zzlhpdk' }],
    footer: {
      copyright: '© 2025 zzlhpdk'
    }
  }
});
