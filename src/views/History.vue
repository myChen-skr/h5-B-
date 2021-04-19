<template>
<div class="body">
  <div  @click="back">
  <van-image src="http://mychen-skr.oss-cn-beijing.aliyuncs.com/%E8%BF%94%20%E5%9B%9E%20(4).png" style="height:30px;width:30px;position:absolute;left:0px"/>
  </div>
  <van-image  src="http://mychen-skr.oss-cn-beijing.aliyuncs.com/page-share.png" style="height:30px;width:30px;position:absolute;right:0px"/>
  <van-image src="http://mychen-skr.oss-cn-beijing.aliyuncs.com/bili_title.png" style="margin-top:50px;margin-left:60px;margin-right:60px"/>
  <h2 style="color:white;font-size:20px">值得N刷的宝藏视频，一起来看吧~</h2>
  <van-button style="height:30px;width:80px;margin-top:15px;margin-left:0px;color:brown"> 订阅</van-button>
  <van-image src="http://mychen-skr.oss-cn-beijing.aliyuncs.com/new_video.png" style="margin-top:20px"/>

  <div class="card" >
      <view v-for="(station , index) in stations" :key="index">
        <div style="background-color:#fff8e1;margin-top:20px;margin-left:10px;margin-right:10px;border-radius:5%;">
          <div class="row" style="height:30px;width:60px;margin-left:10px;margin-top:10px;">
            <van-image src="http://mychen-skr.oss-cn-beijing.aliyuncs.com/ic_achievement.png" style="margin-top:5px"/>
          </div> 
          <div style="width:280px;margin-left:80px;text-align:left;margin-top:-10px;color:#f57f17">
            <text>{{ station.achievement }}</text>
          </div>
          <div class="row">
            <div style="height:120px;width:240px;margin-top:0px;margin-left:10px">
            <img :src="station.pic" style="height:100px;width:190px; margin-top:10px; border-radius:5%;">
            </div>
            <div style="font-weight:bold;height:40px;width:200px;margin-top:10px;text-align:left;margin-left:10px;margin-right:10px">
              <text>{{ station.title.length > 20 ? station.title.substring(0, 21) : station.title }}</text>
            </div>
          </div>

          <div class="own" style="width:180px;text-align:left;margin-left:210px;">
              <text style="margin-top:-30px">{{ station.owner.name }}</text>
          </div>
          <div class="view" style="width:180px;text-align:left;margin-left:210px;">
            <text>{{ (station.stat.view /10000).toFixed(1)}}万观看</text>
          </div>
          <div class="dot" style="width:50px;margin-left:310px;margin-top:-40px">
            <van-image src="http://mychen-skr.oss-cn-beijing.aliyuncs.com/icon_threedot.png" style="height:30px;width:40px"/>
          </div>
        </div>
        
<!--        
        <div class="row" style="background-color:#f9fbe7;margin-left:10px;margin-right:10px;border-radius:5%;margin-top:20px">

          <div class="row">
            <div style="height:120px;width:240px;margin-top:30px;">
            <img :src="station.pic" style="height:100px;width:200px; margin-top:20px; border-radius:5%;margin-left:-5px;margin-top:10px">
            </div>
            <div style="width:130px;height:100px;margin-left:-15px;margin-top:40px;text-align:left;">
              <div class="title">
                <text>{{ station.title.length > 18 ? station.title.substring(0, 20) : station.title }}</text>
              </div>

              <div style="margin-top:30px;width:120px">
                <text >{{ station.owner.name }}</text>
              </div>

              <div>
                <text>{{ (station.stat.view /10000).toFixed(1) }}万观看</text>
              </div>

              <div>
                <van-image src="http://mychen-skr.oss-cn-beijing.aliyuncs.com/icon_threedot.png" style="height:30px;width:30px;margin-left:100px;margin-top:-20px"/>
              </div>
            </div>
          </div>
        </div> -->
        
      </view>
    </div>



</div>
 
</template>

<script>
export default {
  name: "History",
  data() {
    return {
    stations: []

    };
  },
   computed: {
      title() {
        let title = this.watch.title;
        console.log(title);
        if(title && title.length > 18 ){
          title = title.substring(0, 20) + "...";
        }
      },
    },
  created() {
    this.axios.get("http://localhost:3000/history").then((res) => {
      this.stations = res.data.data;
      console.log(this.stations);
    });
  },
   methods: {
      back: function() {
        this.$router.push({ path: "/" });
      }

    },
};
</script>

<style scopde>
.row {
  display: flex;
  flex-direction: row;
  margin-left: -30rpx;
  transform: translateY(10px);

}
.body {
  margin-top: -1.6rem;
  background-image: url(http://mychen-skr.oss-cn-beijing.aliyuncs.com/banner_history.jpg);
}
.clean {
  clear: both;
}
.own{
  transform: translateY(-50px);

}
.view{
  transform: translateY(-50px);
}
.dot{
  transform: translateY(-20px);


}
</style>
