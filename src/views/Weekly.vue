<template >
  <div class="body">
    <div  @click="back">
    <van-image src="http://mychen-skr.oss-cn-beijing.aliyuncs.com/%E8%BF%94%20%E5%9B%9E%20(4).png" style="background-image: url(http://mychen-skr.oss-cn-beijing.aliyuncs.com/banner_weekly.png);height:30px;width:30px;position:absolute;left:0px"/>
    </div>
    <van-image  src="http://mychen-skr.oss-cn-beijing.aliyuncs.com/page-share.png" style="background-image: url(http://mychen-skr.oss-cn-beijing.aliyuncs.com/banner_weekly.png);height:30px;width:30px;position:absolute;right:0px"/>
    <van-button style="height:30px;width:80px;background-image: url(http://mychen-skr.oss-cn-beijing.aliyuncs.com/banner_weekly.png);margin-top:45px;margin-left:300px;color:white"> + 订阅</van-button>
    <van-text style="color:white;font-size:30px">bilibili每周必看</van-text>
    <h2 style="color:white;font-size:15px;margin-top:10px">每周五18:00更新</h2>
    <h2 style="color:white;font-size:10px;text-align:left;margin-top:30px;">第108期  手工复刻三星堆</h2>
    <van-image src="http://mychen-skr.oss-cn-beijing.aliyuncs.com/icon_down.png" style="background-image: url(http://mychen-skr.oss-cn-beijing.aliyuncs.com/banner_weekly.png);height:15px;width:15px;top:-16px;left:-45px" />

    <div class="card">
      <view v-for="(watch , index) in watches" :key="index">
        <div class="row" style="background-color:white;margin-left:10px;margin-right:10px;border-radius:5%;margin-top:20px">
          <div style="height:160px;width:100px;margin-top:10px;">
          <img :src="watch.pic" style="height:100px;width:200px; margin-top:20px; border-radius:5%;margin-left:10px;margin-top:10px">
          </div>

          <div style="width:350px;height:120px;margin-left:120px;margin-top:20px;margin-right:-40px;text-align:left;">
            <div class="title">
            <text>{{ watch.title.length > 20 ? watch.title.substring(0, 25) : watch.title }}</text>
            </div>
            <div style="margin-top:25px">
            <text >{{ watch.owner.name }}</text>
            </div>
            <div>
            <text>{{ (watch.stat.view /10000).toFixed(1) }}万观看</text>
            </div>
          </div>
          <div style="background-color: #f5f5f5;height:30px;width:340px;margin-top:130px;margin-left:-300px;margin-right:10px">
              <van-image src="http://mychen-skr.oss-cn-beijing.aliyuncs.com/icon_yinyong.png" style="height:15px;width:15px;margin-top:3px;margin-left:-280px"/>
              <div style="margin-top:-12px;margin-left:40px;width:300px;text-align:left">
                <text style="color:#cdcdcd;">{{ watch.rcmd_reason }}</text>
              </div>
          </div>
        </div>
        
      </view>
    </div>
  </div>
</template> 

<script>



export default {
 
    name: "Weekly",
    data() {
       
        return {
          
          watches: []
        }
    },
    computed: {
      title() {
        let title = this.watch.title;
        console.log(title);
        if(title && title.length > 20 ){
          title = title.substring(0, 25) + "...";
        }
      },
      stat() {
        let view = this.watch.stat.view;
        console.log(view);
        if(view && watch.stat.view.length > 3){
          view = view.substring(0, s.indexOf("") + 3);
          console.log(">>>>>>>>>" + view);
        }
      }

    },
    methods: {
      back: function() {
        this.$router.push({ path: "/" });
      }

    },
    created() {
     
        this.axios.get("http://localhost:3000/weekly").then((res) =>{
            this.watches = res.data.data;
            console.log(this.watches)
        })
    }

}
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  margin-left: -30rpx;
}
.body {
  margin-top:-1.6rem;
  background-image: url(http://mychen-skr.oss-cn-beijing.aliyuncs.com/banner_weekly.png);
}

</style>