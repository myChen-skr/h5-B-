// 底部导航栏组件
<template>
  <van-tabbar v-model="active" active-color="#FF3E96" inactive-color="#AAAAAA">
    <van-tabbar-item
      name="home"
      color="#FF3E96"
      icon="http://mychen-skr.oss-cn-beijing.aliyuncs.com/%E9%A6%96%E9%A1%B5%20(1).png"
      @click="link('/')"
      >首页</van-tabbar-item
    >
    <van-tabbar-item
      name="channel"
      icon="http://mychen-skr.oss-cn-beijing.aliyuncs.com/%E9%A2%91%E9%81%93.png"
      @click="link('/channel')"
      >频道</van-tabbar-item
    >
    <van-tabbar-item
      name="dynamic"
      icon="http://mychen-skr.oss-cn-beijing.aliyuncs.com/%E5%8A%A8%E6%80%81.png"
      @click="link('/dynamic')"
      dot="right"
      >动态</van-tabbar-item
    >
    <van-tabbar-item
      name="purchase"
      icon="http://mychen-skr.oss-cn-beijing.aliyuncs.com/%E8%B4%AD%E7%89%A9.png"
      @click="link('/purchase')"
      >会员购</van-tabbar-item
    >
    <van-tabbar-item
      name="profile"
      icon="http://mychen-skr.oss-cn-beijing.aliyuncs.com/%E7%94%B5%E8%A7%86%E6%9C%BA.png"
      @click="link('/profile')"
      badge="99+"
      >我的</van-tabbar-item
    >
  
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  data() {
    return {
      active: 0,
      icon: {
          active:'#FF3E96',
          inactive:'#AAAAAA'
      }
    };
  },
  name: "NavBar",
  props: {
    msg: String,
  },
  setup() {
    const router = useRouter();
    const active = ref(0);
    const link = (path) => {
      router.push({ path });
    };
    return {
      active,
      link,
    };
  },
};
</script>

<style></style>
