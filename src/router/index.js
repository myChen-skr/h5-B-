//从vue-router中按需引入所需要的功能
import {createRouter,createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'
// import Find from '../views/Find.vue'
// import Profile from '../views/Profile.vue'

//通过createRouter创建路由实例router
//路由采用hash模式（带#的模式）
   //定义routes路由数组
   const   routes= [
        {
            path:'/',
            name:"Home",
            component:Home,
        },
        {
            path:'/find',
            name:"Find",
            component:()=> import("../views/Find.vue"),//懒加载

        },
        {
            path:'/profile',
            name:"Profile",
            component:()=> import("../views/Profile.vue"),
        },
        {
            path:'/login',
            name:"Login",
            component:()=> import("../views/Login.vue"),
        },
        {
            path:'/channel',
            name:"Channel",
            component:()=> import("../views/Channel.vue"),
        },
        {
            path:'/dynamic',
            name:"Dynamic",
            component:()=> import("../views/Dynamic.vue"),
        },
        {
            path:'/purchase',
            name:"Purchase",
            component:()=> import("../views/Purchase.vue"),
        },
        {
            path:'/search',
            name:"Search",
            component:()=> import("../views/Search.vue"),
        },
        {
            path:'/sign-in',
            name:"Sign-in",
            component:()=> import("../views/Sign-in.vue"),
        },
        {
            path:'/rank',
            name:"Rank",
            component:()=> import("../views/Rank.vue"),
        },
        {
            path:'/weekly',
            name:"Weekly",
            component:()=> import("../views/Weekly.vue"),
        },
        {
            path:'/history',
            name:"History",
            component:()=> import("../views/History.vue"),
        }
    ]

    const router = createRouter({
        history: createWebHashHistory(),
        routes
    })

// router跑出去，让main.js引用
export default router