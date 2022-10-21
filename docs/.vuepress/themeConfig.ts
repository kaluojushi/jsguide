import nav from './nav';
import vdoingConfig from "./vdoingConfig";

export default {
  logo: '/assets/logo.png',
  nav,
  lastUpdated: '上次更新于',
  repo: 'kaluojushi/jsguide',
  repoLabel: 'GitHub',
  docsDir: 'docs',
  docsBranch: 'main',
  editLinks: true,
  editLinkText: '在 GitHub 中编辑此页',
  ...vdoingConfig,
};