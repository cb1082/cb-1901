import {fetchGetData} from "@api/fetch";

import API from "@api/api";


const state={
    //头部数据
    totalData:null,
    catelist:[{id:-1,label:"推荐"}],
    bannerlist:[],
    policylist:[],
    homecatelist:[],
    topcatelist:[],
    itemlist:[],
    bannerimg:[]
    
};

const mutations={
    //设置头部数据
    setTotalData(state,params){
        state.totalData=params;
    },
    //设置首页分类导航数据
    setcatelist(state,params){
        state.catelist=[...state.catelist,...params];
    },
    //设置首页轮播图数据
    setbannerlist(state,params){
        state.bannerlist=params;

    },
    //设置协议数据
    setpolicylist(state,params){
        state.policylist=params;
    },
    //设置首页分类数据
    sethomecatelist(state,params){
        state.homecatelist=params;

   },
   //设置TOP榜数据
   settopcatelist(state,params){
    state.topcatelist=params;
    },
    setitemlist(state,params){
        state.bannerimg=params.bannerimg;
        state.itemlist=params.itemlist;
   },

};
const actions={
    //获取头部数据
    async getTotalData({commit},params={}){
       let data= await fetchGetData(API.GOODS_TOTAL_URL,params)
       let newdata=data.total;
        commit("setTotalData",newdata);
    },
    //获取首页分类导航数据
    async getcatelist({commit},params){
        let data = await fetchGetData(API.CATE_LIST_URL,params);
        let newdata=data.map(({id,name})=>({id,label:name}));
       commit("setcatelist",newdata);
    },
    //获取首页轮播图数据
    async getbannerlist({commit}){
        let data = await fetchGetData(API.HOME_BANNER_LIST_URL);
        let newdata= data.map(({id,picUrl})=>({id,picUrl}));
        commit('setbannerlist',newdata);

    },
    //获取协议数据
    async getpolicylist({commit}){
        let data =await fetchGetData(API.POLICY_LIST_URL);
        let newdata=data.map(({icon,desc})=>({icon,desc}));
        commit("setpolicylist",newdata);
    },
    //获取首页分类数据
    async gethomecatelist({commit}){
        let data= await fetchGetData(API.HOME_CATE_LIST_URL);
        let newdata = data.kingKongList.map(({text,picUrl})=>({text,picUrl}));
        commit("sethomecatelist",newdata);
    },
    //获取TOP榜数据
    async gettopcatelist({commit}){
        let data = await fetchGetData(API.HOME_TOP_CATELIST_URL);
    
        let newdata= data.map(item=>{
            return {
                titlePicUrl:item.titlePicUrl,
                itemList:item.itemList.map(item1=>{
                    return{
                        id:item1.id,
                        retailPrice:item1.retailPrice,
                        counterPrice:item1.counterPrice,
                        primaryPicUrl:item1.primaryPicUrl,
                        name1:item1.name,
                        name2:item1.itemTagList.map(({name})=>({name})),
                    }
                    
                })
            }   
        })
        commit("settopcatelist",newdata);
    },
     //获取分类列表数据
     async  getitemlist({commit},params){
        let data=await fetchGetData(API.HOME_CATE_ITEM_LIST_URL,{id:params});
        let bannerimg = data.currentCategory.bannerUrl;
        let itemlist = data.categoryItemList.map(item=>{
               let info = {
                   name:item.category.name,
                   frontName:item.category.frontName
               };
               let itemList= item.itemList.map(item1=>{
                   return{
                       id:item1.id,
                       listPicUrl:item1.listPicUrl,
                       simpleDesc:item1.simpleDesc,
                       retailPrice:item1.retailPrice,
                       name2:item1.itemTagList.map(({name})=>({name})),
                       name1:item1.name,
                       counterPrice:item1.counterPrice,
                   }
               })
               return{
                   info,
                   itemList
               }
        })
        commit("setitemlist",{bannerimg,itemlist});
     },
     removedata({commit}){
        commit('setitemlist',{});

     }

};



export default{
    namespaced:true,
    state,
    mutations,
    actions

}