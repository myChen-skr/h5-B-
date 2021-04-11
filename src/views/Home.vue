<template>
  <form action="/">
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
    >
    <template #action>
  <router-link to="/search" >搜索</router-link>

  </template>
    </van-search>
  </form>

  <van-tabs
    v-model="active"
    animated
    title-active-color="#FF3E96"
    color="#FF3E96"
  >
    <van-tab title="直播" name="a">内容</van-tab>
    <van-tab title="推荐" name="b">内容</van-tab>
    <van-tab title="热门" name="c">内容</van-tab>
    <van-tab title="追番" name="d">内容</van-tab>
    <van-tab title="影视" name="e">内容</van-tab>
    <van-tab title="抗击肺炎" name="f">内容</van-tab>
    <van-tab title="建党百年" name="g">内容</van-tab>
  </van-tabs>

  <van-button loading type="primary" loading-type="spinner" />


</template>

<script>
export default {
  data() {
    return {
      value: "",
      active: 2,
    };
  },
  methods: {
      onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast('取消');
    },
  },
  name: "Home",
};
</script>

<style scoped>
</style>
