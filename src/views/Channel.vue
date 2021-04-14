<template>
  <div class="home">
      <!-- <img src="../assets/logo.png" /> -->
     <view>
       <view v-for="(hot,index) in hots" :key="index" >
         <div>
          <img :src="hot.pic" />
          <!-- <text>{{hot.aid}}</text> -->
          <text>{{ hot.title }}</text>
          <!-- <text>{{ hot.owner.name }}</text> -->
        </div>
       </view>
     </view>
      <!-- <div>
      {{title}}
      </div> -->
     <!-- <hr> -->
    <!-- <button @click="convert">获取数据</button> -->
  </div>
</template>

<script>
export default {
    name:"Channel",
    data() {
      hots:[]
      return {
        // title: "静态数据",
       
      }
    },
    created() {
        this.axios.get("http://localhost:3000/popular").then((res) => {
          // this.title = res.data;
          // this.desc = res.data;
          // this.bili = res.data.data.pic;
           this.hots = res.data.data;
           console.log(this.hots)
            // console.log(res.data);

            // console.log(res.data.data.list[1].aid)
            // console.log(res.data.data.list[2].aid)
            // console.log(res.data.data.list[19].bvid)
            // console.log(res.data.data.list[19].aid)
            // console.log(res.data.data.list[0].desc)

            // console.log(res.data)
            
           
        });
    },
}
</script>
<style scoped>
/* .a {
  flex-direction:column-reverse
} */
</style>
