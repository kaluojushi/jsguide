<template>
  <div id="app">
    <el-button type="primary" @click="handleClick">Click me</el-button>
  </div>
</template>

<script>
export default {
  name: "demo-1",
  data() {
    return {
      value: "Hello VuePress"
    };
  },
  methods: {
    handleClick() {
      alert(this.value);
    }
  }
}
</script>

<style scoped>

</style>
