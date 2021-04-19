<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" style="width:100%" />
      </van-swipe-item>
    </van-swipe>
    <h2>用于测试效果</h2>
  </div>
</template>

<script>
export default {
  name: "Dynamic",
   data() {
    return {
      images: [
        'http://mychen-skr.oss-cn-beijing.aliyuncs.com/1.jpg',
        'http://mychen-skr.oss-cn-beijing.aliyuncs.com/2.jpg',
        'http://mychen-skr.oss-cn-beijing.aliyuncs.com/3.jpg',
      ],
    };
   }
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 50px;
  text-align: center;
}
.img {
  width: 100%;
  height: 100%;
}
</style>
