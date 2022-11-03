<template>
  <div id="app">
    <el-timeline :reverse="true">
      <el-timeline-item
        v-for="(item, index) in items"
        :key="index"
        :timestamp="item.timestamp"
        :size="item.size"
        :icon="item.icon"
        :color="item.color"
        >
        {{ item.content }}
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  name: "timeline",
  data() {
    return {
      items: [{
        content: '域名注册，网站上线',
        timestamp: '2021-10-20',
        size: 'large',
        color: '#409EFF',
        icon: 'el-icon-star-on',
      }, {
        content: '将主题切换为 vuepress-theme-vdoing',
        timestamp: '2021-10-21',
      }, {
        content: '完成大部分面经文档的部署',
        timestamp: '2021-10-23',
      }, {
        content: '添加 vuepress-plugin-one-click-copy 和 vuepress-plugin-element-ui 插件',
        timestamp: '2021-10-24',
        size: 'large',
        color: '#0BBD87',
        icon: 'el-icon-more',
      }],
    };
  },
}
</script>

<style scoped>
#app {
  margin: 30px 0;
}
</style>
