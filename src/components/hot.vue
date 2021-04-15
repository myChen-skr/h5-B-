<template>
  <view class="my-card" @click="open">
    <view class="thumb">
      <image src="../assets/logo.png" class="img" mode="aspectFill" />
    </view>
    <view class="detail">
      <view class="mid">
        <view class="title">
        <!-- {{popular.title}} -->
        <!-- {{ popular.title.length > 12 ? popular.title.substring(0,12) : popular.title }} -->
        <h2>111,222</h2>
        </view>
        <view class="tag" >
          <!-- {{popular.rcmd_reason.content}} -->
          <h2>111,222</h2>
        </view>
        <view class="author">
          <!-- {{popular.owner.name}} -->
          up：快乐星球
        </view>
        <view class="content">
          100万人次观看
        </view>
      </view>
      <view class="right"></view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'MyCard',
  props: ['popular'], //通过props传值，父组件中将article传过来
  computed:{
    //计算属性，文章摘要的长度超出，就用。。。代替
    title() {
      let title = this.popular.title;
      if (title && title.length > 12) {
        title = title.substring(0,12) + '...';
      }
      return title;
    }
  },
  methods:{
    open() {
      console.log("click");
      //在子组件my-card.vue中将点击事件传回父组件index.vue
      this.$emit('open');
    }
  }
};  
</script>

<style lang="scss" scoped>
.my-card {
  padding: 20rpx 20rpx;
  border-bottom: 1px dashed   #ddd;
  display: flex;
  background-color: #fff;
  font-size: 14px;
    .thumb {
      width: 200rpx;
    height: 240rpx;
    position: relative;
    .img  {
      width: 300rpx;
      height: 240rpx;
      border-radius: 10%;
      position: absolute;
      top: 10rpx;
      left: 10rpx;
    }
    
    }
  .detail {
    padding-left: 110px;
    word-wrap: break-word;
    width: 550rpx;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .mid {
      .title {
        font-weight: bold;
      }
    }
    .right {
      width: 70px;
      text-align: right;
    }
    .tag {
      display: flex;
      flex-direction: row;
      margin: 5rpx;
      font-size: 24rpx;
      width: auto;
      display: inline-block !important; 
      padding: 1px 3px;
      opacity: 0.7;
      background-image: linear-gradient(to right, #eee 0%,  #FFB6C1 100%);
      box-shadow: 0.2x 5px 0 rgba(0,0,0,0.16),0 7px 10px 0 rgba(0,0,0,0.12);
    }
    .author {
      color: #BEBEBE;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      font-size: 24rpx;
      width: auto; 
      padding: 1px 3px;
    }
    .content {
      color: #BEBEBE;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      font-size: 24rpx;
      width: auto; 
      padding: 1px 3px;
    }

  }
}
</style>
