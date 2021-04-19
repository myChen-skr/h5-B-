<template>
  <div class="body">
    <div>
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
        </van-search>
      </form>
    </div> 

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
        <div>
          <div class="rank" style="alight: center">
            <van-image
              width="50"
              height="50"
              src="http://mychen-skr.oss-cn-beijing.aliyuncs.com/icon_rank.png"
            >
              <div>排行榜</div>
            </van-image>
          </div>

          <div class="weekly" @click="weekly">
            <van-image
              width="50"
              height="50"
              src="http://mychen-skr.oss-cn-beijing.aliyuncs.com/icon_weekly.png"
            >
              <div>每周必看</div>
            </van-image>
          </div>

          <div class="history" @click="history">
            <van-image
              width="50"
              height="50"
              src="http://mychen-skr.oss-cn-beijing.aliyuncs.com/icon_history.png"
            >
              <div>入站必刷</div>
            </van-image>
          </div>
        </div>

        <div class="clean"></div>

        <view>
          <view v-for="(hot, index) in hots" :key="index">
            <div class="row">
              <!-- <div class="pic" > -->
               
              <img
                :src="hot.pic"
                style="
                  height: 100px;
                  width: 200px;
                  background-color: pink;
                  margin-top: 20px;
                  border-radius: 5%;
                "
              />
              <!-- <text>{{ hot.short_link }}</text> -->
              <!-- </div> -->

             <div  class="text" style="display: flex;flex-direction: column;margin-left: 10px;margin-top: 10px;width: 200px; height: 100px;">
                <text class="title" style=" margin-top: 10px; margin-left: 5px; width: 200px; text-align: left; font-weight: bold; font-size: 10px;">
                  {{hot.title.length > 20? hot.title.substring(0, 21): hot.title}}
                </text>  
                <text style="margin-left: 5px; margin-top: 10px; width: 100px; text-align: left; color: #ee8262; ">
                  {{ hot.rcmd_reason.content }}
                </text>

                <div class="icon_three">
                  <div class="row" style=" margin-top: 10px; margin-left: 5px; width: 200px; text-align: left; font-weight: bold; font-size: 10px;">
                    <div style="height: 18px; width: 18px; margin-top: -1px">
                      <van-image src="http://mychen-skr.oss-cn-beijing.aliyuncs.com/icon_%E4%BF%A1%E6%81%AF_UP%E4%B8%BB.png" />
                    </div>
                    <div>
                      <text style=" margin-top: 10px; margin-left: 5px; width: 200px; text-align: left; font-weight: bold; color: #8a8a8a;">
                        {{ hot.owner.name }}
                      </text>
                    </div>
                  </div>
                  <div class="row1">
                    <div style="height:18px;width:18px;margin-top:2px;margin-left:5px">
                      <van-image src="http://mychen-skr.oss-cn-beijing.aliyuncs.com/%E6%92%AD%E6%94%BE.png" />
                    </div>
                    <div>
                      <div style="margin-top:3px;">
                        <text class="stat" style="height: 15px;;margin-left:5px;color: #8a8a8a;">
                          {{ (hot.stat.view / 10000).toFixed(1) }}万观看
                        </text>
                      </div>
                    </div>
                  </div>

                  <div class="clean"></div>

                  <div class="icon-three;" style="width:30px;margin-left:170px;margin-top:-30px">
                    <van-image src="http://mychen-skr.oss-cn-beijing.aliyuncs.com/icon_threedot.png"/>
                  </div>
                </div> 

              </div>
            </div>
          </view>
        </view>
      </van-tab>

      <van-tab title="追番" name="d">
        <van-swipe :autoplay="2000">
          <van-swipe-item v-for="(image, index) in images1" :key="index">
            <img :src="image" style="height: 100%; width: 100%" />
          </van-swipe-item>
        </van-swipe>

        <div class="rank" style="alight: center">
          <van-image
            width="50"
            height="50"
            src="http://mychen-skr.oss-cn-beijing.aliyuncs.com/icon_%E5%85%A8%E9%83%A8%E5%86%85%E5%AE%B9%20(1).png"
          >
            <div>全部内容</div>
          </van-image>
        </div>
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
      navbarHeight:0,
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
  
  computed: {
    //计算属性，文章摘要的长度超出，就用。。。代替
    title() {
      let title = this.hot.title;
      console.log(title);
      if (title && title.length > 20) {
        title = title.substring(0, 21) + "...";
      }
      return title;
    },
    stat() {
      let view = this.hot.stat.view;
      console.log(view);
      if (view && hot.stat.view.length > 3) {
        view = view.substring(0, s.indexOf("") + 3);
        console.log(">>>>>>>>>" + view);
      }
      return view;
    },
  },

  //调用接口数据
  created() {
    this.axios.get("http://localhost:3000/popular").then((res) => {
      this.hots = res.data.data;
      console.log(this.hots);
    });
  },
  //跳转
  methods: {
    weekly: function () {
      this.$router.push({ path: "/weekly" });
    },
    history: function () {
      this.$router.push({ path: "/history" });
    },
  },
};
</script>

<style scoped>

.body {
  margin-top: -1.6rem;
}
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
  height: 100%;
}
.clean {
  clear: both;
}
.row {
  display: flex;
  flex-direction: row;
  margin-left: -30rpx;
}
.row1 {
  display: flex;
  flex-direction: row;
  margin-left: -30rpx;
}
</style>
