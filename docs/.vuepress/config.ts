import themeConfig from './themeConfig';

module.exports = {
  port: 3080,
  title: 'JS Guide',
  description: 'JS Guide for Frontend Development Interviews',
  dest: './dist',
  head: [
    ['link', { rel: 'icon', href: '/assets/favicon.ico' }],
  ],
  themeConfig,
  markdown: {
    lineNumbers: true
  },
};