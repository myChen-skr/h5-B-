<template>
  <form action="/">
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
    />
  </form>
  <router-link to="/">返回</router-link>

</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("取消");
    },
  }
};
</script>

<style scoped></style>
