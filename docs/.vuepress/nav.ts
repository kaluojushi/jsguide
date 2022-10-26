export default [
  { text: '首页', link: '/' },
  { text: '指南',
    link: '/guide/',
    items: [
      { text: 'JS 部分', link: '/guide/js/points/' },
      { text: 'HTML 部分', link: '/guide/html/points/' },
      { text: 'CSS 部分', link: '/guide/css/points/' },
      { text: 'Vue', link: '/guide/vue/points/' },
      { text: 'React & Angular', link: '/guide/react-angular/react-points/' },
      { text: '数据结构、算法、OS', link: '/guide/ds-algo-os/ds-points/' },
      { text: '计网、浏览器', link: '/guide/cn-browser/cn-points/' },
      { text: '杂项', link: '/guide/sundry/points/' },
    ],
  },
  { text: '笔试', link: '/exam/' },
  { text: '面试', link: '/interview/' },
  { text: '资源', link: '/resources/' },
  {
    text: '更多',
    ariaLabel: 'more',
    items: [
      { text: '关于本站', link: '/about/jsguide/' },
      { text: '更新历史', link: '/about/timeline/' },
      { text: '贡献指南', link: '/about/contribution/' },
      { text: '文档规范', link: '/standard/' },
      { text: '常见问题', link: '/about/faq/' },
    ],
  },
];