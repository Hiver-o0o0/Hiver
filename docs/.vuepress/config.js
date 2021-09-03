module.exports = {
  base: '/',
  description: '',
  title: '春风十里的笔记',
  plugins: {
    "vuepress-plugin-auto-sidebar": {}
  },
 themeConfig: {
    repo: 'hua1995116/vuepress-blog',
    nav: [
      { text: '主页', link: '/' },
      {
        text: '前端系列', items: [
          {text: 'js文章', link: '/frontend/' },
          {text: 'react实践', link: '/react/' },
          {text: 'vue实践', link: '/vue/' },
          {text: 'debug系列', link: '/debug/' },
          {text: 'webpack系列', link: '/webpack/' },
          {text: 'canvas系列', link: '/canvas/' },
      ]},
      { text: 'Node 实践', link: '/node/' },
      { text: '面试', link: '/interview/' },
      // { text: '机器学习', link: '/machine/' },
      { text: '算法', link: '/algorithm/' },
      { text: '前端运维', link: '/op/' },
      { text: '我的开源项目', link: '/open/' },
      // { text: 'react 实践', link: '/react/' },
      // { text: 'vue 实践', link: '/vue/' },
      // { text: '关于我', link: '/about' },
      // {
      //   text: '笔记', items: [
      //     { text: 'flutter', link: '/post/flutter-guide/' },
      //     { text: 'Grid Layout', link: '/post/Grid-Guide/' },
      //     { text: 'spark', link: '/post/learning-spark/' },
      //     { text: 'scala', link: '/post/learning-scala/' },
      //   ]
      // },
    ],
    sidebar: {
      // '/algorithm/': algorithm,
      // '/node/': node,
      // '/vue/': vue,
      // '/react/': react,
      // '/open/': open,
      // '/frontend/': frontend,
      // '/debug/': debug,
      // '/op/': op,
      // '/webpack/': webpack,
      // '/interview/': interview,
      // '/canvas/': canvas,
    },
    lastUpdated: 'Last Updated'
  },
}