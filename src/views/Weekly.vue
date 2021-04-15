<template >
  <div style="background-color:#ffcc00">
<h2>bilibili每周必看</h2>
<h2>每周五18:00更新</h2>
  <view v-for="(watch, index) in watches" :key="index">
      <div class="row">
          <img :src="watch.pic" style="height:100px;width:200px;background-color:pink; margin-top:20px; border-radius:5%" />

          <text>{{ watch.title }}</text>

      </div>
  </view>
  </div>
</template>

<script>
export default {
    name: "Weekly",
    data() {
        watches: [];
        return {

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

<style>

</style>