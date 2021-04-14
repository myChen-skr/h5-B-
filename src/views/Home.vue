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
        <van-swipe :autoplay="2000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img :src="image" style="width: 100%" />
          </van-swipe-item>
        </van-swipe>

        <van-image
          style="height: 100%; width: 100%"
          src="http://mychen-skr.oss-cn-beijing.aliyuncs.com/5.jpg"
        >
        </van-image>
        <van-image
          style="height: 100%; width: 100%"
          src="http://mychen-skr.oss-cn-beijing.aliyuncs.com/6.jpg"
        >
        </van-image>
        <van-image
          style="height: 100%; width: 100%"
          src="http://mychen-skr.oss-cn-beijing.aliyuncs.com/7.jpg"
        >
        </van-image>
      </van-tab>

      <van-tab title="热门" name="c">
        <div class="Hot" style="height: 100%; width: 100%">
          <div class="rank" style="alight: center">
            <van-image
              width="50"
              height="50"
              src="http://mychen-skr.oss-cn-beijing.aliyuncs.com/icon_rank.png"
            >
              <div>排行榜</div>
            </van-image>
          </div>

          <div class="weekly">
            <van-image
              width="50"
              height="50"
              src="http://mychen-skr.oss-cn-beijing.aliyuncs.com/icon_weekly.png"
            >
              <div>每周必看</div>
            </van-image>
          </div>

          <div class="history">
            <van-image
              width="50"
              height="50"
              src="http://mychen-skr.oss-cn-beijing.aliyuncs.com/icon_history.png"
            >
              <div>入站必刷</div>
            </van-image>
          </div>
        </div>

        <div class="home">
          <view>
            <view v-for="(hot, index) in hots" :key="index">
              <div>
                <img :src="hot.pic" />
                <text>{{ hot.title }}</text>
              </div>
            </view>
          </view>
        </div>
      </van-tab>

      <van-tab title="追番" name="d">
        <van-swipe :autoplay="2000">
          <van-swipe-item v-for="(image, index) in images1" :key="index">
            <img :src="image" style="height: 100%; width: 100%" />
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
  name: "Home",
  data() {
    hots: [];
    return {
      images: [
        "http://mychen-skr.oss-cn-beijing.aliyuncs.com/4.jpg",
        "http://mychen-skr.oss-cn-beijing.aliyuncs.com/3.jpg",
        "http://mychen-skr.oss-cn-beijing.aliyuncs.com/1.jpg",
      ],
      images1: [
        "http://mychen-skr.oss-cn-beijing.aliyuncs.com/A.jpg",
        "http://mychen-skr.oss-cn-beijing.aliyuncs.com/B.jpg",
        "http://mychen-skr.oss-cn-beijing.aliyuncs.com/C.jpg",
        "http://mychen-skr.oss-cn-beijing.aliyuncs.com/D.jpg",
        "http://mychen-skr.oss-cn-beijing.aliyuncs.com/E.jpg",
        "http://mychen-skr.oss-cn-beijing.aliyuncs.com/F.jpg",
      ],

      value: "",
      active: 2,
    };
  },
  created() {
    this.axios.get("http://localhost:3000/popular").then((res) => {
      this.hots = res.data.data;
      console.log(this.hots);
    });
  },
};
</script>

<style scoped>
.Hot {
  float: left;
  margin-left: 0%;
  width: 80%;
  margin-bottom: 0%;
  height: 100%;
}
.rank,
.weekly,
.history {
  float: left;
  margin-top: 2%;
  margin-left: 2.5%;
  margin-bottom: 0%;
  width: 30%;
  height: 150px;
}

</style>
