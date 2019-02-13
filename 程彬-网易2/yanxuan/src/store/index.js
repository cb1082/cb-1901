import Vue from "vue";
import Vuex from "vuex";
import home from "./modules/home";
import category from './modules/category';
import goods from './modules/goods';
import cart from './modules/cart';
import state from './state';
import mutations from './mutations';
import actions from './actions';
import discover from "./modules/discover"

Vue.use(Vuex);



export default  new Vuex.Store({
    state,
    mutations,
    actions,
    modules:{
        home,
        category,
        goods,
        cart,
        discover
    }
})
