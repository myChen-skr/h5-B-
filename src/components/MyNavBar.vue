// 底部导航栏组件
<template>
  <van-tabbar v-model="active" active-color="#FF3E96" inactive-color="#AAAAAA">
    <van-tabbar-item
      name="home"
      color="#FF3E96"
      @click="link('/')"
      >
      <span>首页</span>
      <template #icon="props">
        <img :src="props.active ? icon.active : icon.inactive">
      </template>
    </van-tabbar-item>

    <van-tabbar-item
      name="channel"
      @click="link('/channel')"
      >
        <span>频道</span>
      <template #icon="props">
        <img :src="props.active ? icon.active1 : icon.inactive1">
      </template>
      </van-tabbar-item
    >
    <van-tabbar-item
      name="dynamic"
      icon="http://mychen-skr.oss-cn-beijing.aliyuncs.com/%E5%8A%A8%E6%80%81.png"
      @click="link('/dynamic')"
      >
      <!-- dot="right" -->
       <span>动态</span>
      <template #icon="props">
        <img :src="props.active ? icon.active2 : icon.inactive2">
      </template>
      </van-tabbar-item
    >
    <van-tabbar-item
      name="purchase"
      @click="link('/purchase')"
      >
       <span>会员购</span>
      <template #icon="props">
        <img :src="props.active ? icon.active3 : icon.inactive3">
      </template>
      </van-tabbar-item
    >
    <van-tabbar-item
      name="profile"
      icon="http://mychen-skr.oss-cn-beijing.aliyuncs.com/%E7%94%B5%E8%A7%86%E6%9C%BA.png"
      @click="link('/profile')"
      > <!-- badge="99+" -->
       <span>我的</span>
      <template #icon="props">
        <img :src="props.active ? icon.active4 : icon.inactive4">
      </template>
      </van-tabbar-item
    >
  </van-tabbar>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  data() {
    return {
      active: 0,
      icon: {
          active:'http://mychen-skr.oss-cn-beijing.aliyuncs.com/%E9%A6%96%E9%A1%B5%20(2).png',
          inactive:'http://mychen-skr.oss-cn-beijing.aliyuncs.com/home.png',
          active1:'http://mychen-skr.oss-cn-beijing.aliyuncs.com/%E9%A2%91%E9%81%93%20(2).png',
          inactive1:'http://mychen-skr.oss-cn-beijing.aliyuncs.com/%E9%A2%91%E9%81%93%20(1).png',
          active2:'http://mychen-skr.oss-cn-beijing.aliyuncs.com/%E5%8A%A8%E6%80%81%20(2).png',
          inactive2:'http://mychen-skr.oss-cn-beijing.aliyuncs.com/%E5%8A%A8%E6%80%81%20(1).png',
          inactive3:'http://mychen-skr.oss-cn-beijing.aliyuncs.com/purchase.jpg',
          active3:'http://mychen-skr.oss-cn-beijing.aliyuncs.com/purchase1.jpg',
          inactive4:'http://mychen-skr.oss-cn-beijing.aliyuncs.com/profile.jpg',
          active4:'http://mychen-skr.oss-cn-beijing.aliyuncs.com/prifile1.jpg'
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

<style>

</style>
