<template>
  <!-- 展示路由组件的地方 -->
  <!-- <div id="nav">
    <router-link to="/">Home</router-link>  |
    <router-link to="/find">Find</router-link> |
    <router-link to="/profile">Profile</router-link> 
  </div> -->
  <router-view />
  <MyNavBar v-if="show"/>

</template>

<script>
import MyNavBar from './components/MyNavBar.vue';
import { useRouter } from "vue-router";
import { reactive, toRefs } from "vue"; 
import './assets/css/icon.css'

export default {
  name: 'App',
  components: {
    MyNavBar,
  },
  setup() {
    const state = reactive({
      menu: ["/", "/purchase", "/profile","/channel","/dynamic"],
      show: false
    });
    const router  = useRouter();
    router.afterEach(() =>{
      //menu数组内的路由都是需要展示底部导航栏的
      state.show = state.menu.includes(router.currentRoute.value.path);
    });
    return {
      ...toRefs(state)
    };
  },
};
</script>
<style>
/* #nav {
  padding: 0px;
  background-color: #CF6FA7;
}
a {
  font-size: 18px;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0px;
}

.router-link-exact-active {
  color: #f6f6f6;
} */
*{
    padding: 0;
    margin: 0;
  }
</style>
