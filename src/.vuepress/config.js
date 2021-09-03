module.exports = {
  title: '为帮前端',
  description: '为帮前端开发文档',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // logo: '/logo.png',
    nav: [
      {
        text: '文档',
        ariaLabel: '文档菜单',
        items: [
          {
            text: '移动端开发文档',
            link: '/development/'
          },
          {
            text: 'css文档',
            link: '/css/'
          }
        ]
      },
      {
        text: 'JavaScript',
        link: '/JavaScript/'
      },
      {
        text: 'chameleon',
        link: 'http://cml.didi.cn/'
      },
      {
        text: 'loadsh',
        link: 'https://www.lodashjs.com/'
      },
      {
        text: 'natjs',
        link: 'https://natjs.com/#/zh-cn/?id=%e5%bf%ab%e9%80%9f%e5%bc%80%e5%a7%8b'
      },
      {
        text: 'weex',
        link: 'https://weex.apache.org/zh/guide/introduction.html'
      }
    ],
    editLinks: false,
    editLinkText: 'Edit this on GitHub!',
    lastUpdated: 'Last updated',
    docsDir: 'src',
    sidebarDepth: 2,
    sidebar: {
      collapsable: false,
      '/css/': [
        {
          title: '入门',
          collapsable: false,
          children: [
            '/css/configure',
            '/css/@apply',
            '/css/remind'
          ]
        },
        {
          title: '布局',
          collapsable: false,
          children: [
            '/css/box-sizing',
            '/css/display',
            '/css/overflow',
            '/css/position',
            '/css/top'
          ]
        },
        {
          title: '弹性布局',
          collapsable: false,
          children: [
            '/css/flex-direction',
            '/css/flex-wrap',
            '/css/flex-grow',
            '/css/flex-shrink',
            '/css/top'
          ]
        },
        {
          title: '盒对齐',
          collapsable: false,
          children: [
            '/css/justify-content',
            '/css/justify-items',
            '/css/justify-self',
            '/css/align-content',
            '/css/align-items',
            '/css/align-self',
            '/css/place-content',
            '/css/place-items',
            '/css/place-self'
          ]
        },
        {
          title: '间距',
          collapsable: false,
          children: [
            '/css/padding',
          ]
        },
        {
          title: '尺寸',
          collapsable: false,
          children: [
            '/css/width',
            '/css/height'
          ]
        },
        {
          title: '排版',
          collapsable: false,
          children: [
            '/css/font-size',
            '/css/font-weight',
            '/css/letter-spacing',
            '/css/line-height',
            '/css/font-variant-numeric',
            '/css/text-align',
            '/css/text-color',
            // '/css/text-opacity',
            '/css/text-decoration',
            '/css/text-overflow',
            '/css/vertical-align'
          ]
        },
        {
          title: '背景',
          collapsable: false,
          children: [
            '/css/background-color',
          ]
        },
        {
          title: '边框',
          collapsable: false,
          children: [
            '/css/border-radius',
            '/css/border-width',
            '/css/border-color',
            '/css/border-style'
          ]
        },
        {
          title: '特效',
          collapsable: false,
          children: [
            '/css/opacity',
          ]
        },
      ],
      '/development/': [

        {
          title: '',
          collapsable: false,
          children: [
            '',
          ]
        }
      ],
      '/JavaScript/': [
        {
          title: '',
          collapsable: false,
          children: [
            '/JavaScript/',
            '/JavaScript/语言基础',
          ]
        },
      ]
    },
    smoothScroll: false
  }
}
