import themeConfig from './themeConfig';

module.exports = {
  port: 3080,
  title: 'JS Guide',
  description: 'JS Guide for Frontend Development Interviews',
  head: [
    ['link', { rel: 'icon', href: '/assets/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', href: '/assets/apple-touch-icon.png' }],
  ],
  theme: 'vdoing',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
};