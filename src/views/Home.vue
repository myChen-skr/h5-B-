<template>
  <div>
    <van-card>
      <form action="/">
        <van-search
          v-model="value"
          shape="round"
          placeholder="请输入搜索关键词"
        >
          <template v-slot:left>
            <van-image
              round
              width="50px"
              height="50px"
              src="http://mychen-skr.oss-cn-beijing.aliyuncs.com/008.jpg"
            />
          </template>

          <template v-slot:action>
            <van-icon name="youxi-0" />
            <van-icon
              name="http://mychen-skr.oss-cn-beijing.aliyuncs.com/%E6%B8%B8%E6%88%8F.png"
            />
          </template>

          <!-- <template v-slot:action>
          <van-icon name1="youjian-0" />
           <van-icon name2="http://mychen-skr.oss-cn-beijing.aliyuncs.com/%E9%82%AE%E4%BB%B6.png" />
        </template> -->
        </van-search>
      </form>
    </van-card>
    <van-tabs
      @click="onClick"
      v-model="active"
      animated
      title-active-color="#FF3E96"
      color="#FF3E96"
    >
      <van-tab title="直播" name="a">直播</van-tab>

      <van-tab title="推荐" name="b">
        <van-swipe :autoplay="3000" width="8px">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
      </van-tab>

      <van-tab title="热门" name="c">
        <van-image width="100" height="100" src="http://mychen-skr.oss-cn-beijing.aliyuncs.com/%E6%8E%92%E8%A1%8C%E6%A6%9C.jpg" />
        <van-image width="100" height="100" src="http://mychen-skr.oss-cn-beijing.aliyuncs.com/%E6%AF%8F%E5%91%A8%E5%BF%85%E7%9C%8B.jpg" />
        <van-image width="100" height="100" src="http://mychen-skr.oss-cn-beijing.aliyuncs.com/%E5%85%A5%E7%AB%99%E5%BF%85%E5%88%B7.jpg" />
      </van-tab>

      <van-tab title="追番" name="d">
        <van-swipe :autoplay="3000" width="8px">
          <van-swipe-item v-for="(image, index) in images1" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
          
        </van-swipe>
      </van-tab>

      <van-tab title="影视" name="e">内容</van-tab>
      <van-tab title="抗击肺炎" name="f">内容</van-tab>
      <van-tab title="建党百年" name="g">内容</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "http://mychen-skr.oss-cn-beijing.aliyuncs.com/QQ%E5%9B%BE%E7%89%8720210412203817.jpg",
        "http://mychen-skr.oss-cn-beijing.aliyuncs.com/QQ%E5%9B%BE%E7%89%8720210412203925.jpg",
        "http://mychen-skr.oss-cn-beijing.aliyuncs.com/QQ%E5%9B%BE%E7%89%8720210412203934.jpg",
      ],
      images1: [
        'https://i0.hdslb.com/bfs/bangumi/image/ba59792ab20197087291883a79e3663d85be9745.jpg@2320w_664h.jpg',
        'https://i0.hdslb.com/bfs/bangumi/image/928db2e3b2d694a2b1e20b578cd7c181bf891aed.png@2320w_664h.png',
        'https://i0.hdslb.com/bfs/bangumi/image/d14db471c753e135c84e0e2ea898a888d8ef0647.jpg@2320w_664h.jpg',
        'https://i0.hdslb.com/bfs/bangumi/image/60eb2168ac8c249f3251f9bbd30caf915fb97822.png@2320w_664h.png',
        'https://i0.hdslb.com/bfs/bangumi/image/08b3c97c5d2ec8f19d6f75dd72ad015ab222f662.png@2320w_664h.png',


      ],
      value: "",
      active: 2,
    };
  },
  name: "Home",
};
</script>

<style scoped></style>
