<template>
  <div>
      <h2 style="font-size:20px">哔哩哔哩入站必刷</h2>
      <h2 style="font-size:10px">值得N刷的宝藏视频，一起来看吧~</h2>
      <van-button style="height:90%">订阅</van-button>
      <view v-for="(station, index) in stations" :key="index"> 
      <div class="card">
          <div class="achieve" style="height:15px;width:300px;">
          <text style="margin-left: 0px;margin-top: 10px;width:100px;text-align:left;color:#ff9900">{{ station.achievement }}</text>
          </div>

          <div class="row" >
              <div class="pic" style>
                  <img :src="station.pic" style="height:100px;width:200px; margin-top:0px; border-radius:5%" />
              </div>
              <div class="text" style="height:100px;width:200px">
                  <text class="title" style="margin-top: 10px;margin-left:5px; width:200px;text-align:left ;font-weight:bold ;font-size:10px;">{{ station.title }}</text>
                  <text style="margin-left: 5px;margin-top: 5px;width:150px; text-align:left">{{ station.owner.name}}</text>
              </div>
          </div>
      </div>
  </view>
  </div>
</template>

<script>
export default {
    name: "History",
    data() {
        stations: [];
        return {

        }
    },
    created() {
        this.axios.get("http://localhost:3000/history").then((res) =>{
            this.stations = res.data.data;
            console.log(this.stations)
        })
    }

}
</script>

<style>
.row {
  display: flex;
  flex-direction: row;
  margin-left: -30rpx;
}
</style>