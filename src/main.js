import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";

//按需引入vant的按钮组件
import { Button, Tabbar, TabbarItem, Icon , Search, Toast, Skeleton, Swipe, SwipeItem, Tab, Tabs, PullRefresh, Lazyload, Image as VanImage} from "vant";

import "vant/lib/index.css";

//引入移动端ren适配
import "lib-flexible/flexible";

//链式写法
createApp(App)
  .use(router)
  .use(Button)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Icon)
  .use(Search)
  .use(Toast)
  .use(Skeleton)
  .use(Swipe)
  .use(SwipeItem)
  .use(Tab)
  .use(Tabs)
  .use(PullRefresh)
  .use(Lazyload)
  .use(VanImage)
  .mount("#app");
//vue2写法
// import { createApp } from 'vue'
// import App from './App.vue'
// import './index.css'
// import router from './router'
// //全局引入vant组件库样式
// import "vant/lib/index.css"

// //按需引入vant的按钮组件
// import {Button} from 'vant'

// const app = createApp(App)
// app.use(router)
// app.use(Button)
// app.mount('#app')
