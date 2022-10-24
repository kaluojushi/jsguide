import themeConfig from './themeConfig';

module.exports = {
  port: 3080,
  title: 'JS Guide',
  description: 'JS Guide for Frontend Development Interviews',
  head: [
    ['link', { rel: 'icon', href: '/assets/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', href: '/assets/apple-touch-icon.png' }],
    ['meta', { name: 'author', content: 'Carlo' }],
    ['meta', { name: 'keywords', content: 'JavaScript, 前端, 面经, 面试, 前端面试, 前端面经, 前端开发, 面试指南' }],
    ['meta', { name: 'referrer', content: 'no-referrer' }],
  ],
  theme: 'vdoing',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  plugins: [
    'one-click-copy',
    'element-ui',
  ],
};