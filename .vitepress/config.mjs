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
    outline: [1, 3],
    outlineTitle: '标题',
    nav: [
      {
        text: '组件',
        link: '/view/business/component/zzlhpdk-ui/index'
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
        link: '/view//blog/javascript/index.md'
      }
    ],
    sidebar: [
      {
        text: '业务',
        items: [
          {
            text: '组件库',
            items: [
              {
                text: 'zzlhpdk-ui',
                link: '/view/business/component/zzlhpdk-ui'
              }
            ]
          },
          {
            text: '工具库',
            items: [
              { text: '网络请求', link: '/view/business/function/request' },
              { text: '文件下载', link: '/view/business/function/file' }
            ]
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
          { text: 'Js面试题', link: '/view/blog/javascript/index' },
          {
            text: 'Vue面试题',
            link: '/view/blog/vue/index'
          },
          {
            text: '网络传输面试题',
            link: '/view/blog/internet/index'
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
