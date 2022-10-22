export default [
  { text: '首页', link: '/' },
  { text: '指南',
    link: '/guide/',
    items: [
      { text: 'JS 部分', link: '/guide/js/exp/' },
      { text: 'HTML 部分', link: '/guide/html/exp/' },
      { text: 'CSS 部分', link: '/guide/css/exp/' },
      { text: 'Vue', link: '/guide/vue/exp/' },
      { text: 'React & Angular', link: '/guide/react-angular/react-exp/' },
      { text: '数据结构、算法、OS', link: '/guide/ds-algo-os/ds-exp/' },
      { text: '计网、浏览器', link: '/guide/cn-browser/cn-exp/' },
      { text: '杂项', link: '/guide/sundry/exp/' },
    ],
  },
  { text: '笔试', link: '/exam/' },
  { text: '面试', link: '/interview/' },
  { text: '资源', link: '/resources/' },
  {
    text: '更多',
    ariaLabel: 'more',
    items: [
      { text: '关于本站', link: '/about/' },
      { text: '更新历史', link: '/changelog/' },
      { text: '文档规范', link: '/standard/' },
    ],
  },
];