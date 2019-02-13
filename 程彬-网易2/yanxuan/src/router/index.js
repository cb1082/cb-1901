
import Router from "vue-router";
import  Vue from "vue";

import home from "./homerouter";
import category from "./categoryrouter";
import cart from "./cartrouter";
import discover from "./discoverrouter";
import mine from "./minerouter";
import goods from './goods'

Vue.use(Router)



export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[  
        home,
        category,
        discover,
        cart,
        mine,
        goods,
        {
            path:"/",
            redirect:"/home/main"
        }
    ]  
})