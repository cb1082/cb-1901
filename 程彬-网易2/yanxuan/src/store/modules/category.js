import {fetchGetData} from "@api/fetch";

import API from "@api/api";

const state={
    categorymenu:[],
    categorylist:{},
    selectmenuId:'109245003',
    groupdata:[],
}
const getters={
    gettitle(state){
        if(state.categorymenu.length<=0){
            return;
        }
        let item = state.categorymenu.find(item=>{
            return state.selectmenuId==item.id;
        })
        return  item.name;
    }

}
const mutations={
    setcategorymenu(state,params){
        state.categorymenu=params;
     },
     setcategorylist(state,params){
        state.categorylist=params;
    },
    setselectmenuId(state,params){
        state.selectmenuId=params;
        console.log(params);
    },
    setgroupdata(state,params){
        state.groupdata=params;
    }

}
const actions={
      //获取侧边栏数据
      async getcategorymenu({commit}){
        let data = await fetchGetData(API.CATEGOEY_LIST_URL);
     
        let newdate= data.map(({name,id,subCateList,wapBannerUrl})=>{
           return{
               name,
               id,
               wapBannerUrl,
               subCateList:subCateList.map(({bannerUrl,id,name})=>({bannerUrl,id,name})),
           }
        });
       commit("setcategorymenu",newdate);
   },
   //获取列表数据
   async getcategorygroup({commit},params){
       console.log(params);
    let data = await fetchGetData(API.CATEGOEY_LIST_GROUP_URL,{
        categoryId:params,
    });
    let newdata={
        wapBannerUrl:data.currentCategory.wapBannerUrl,
        subCateList:data.categoryGroupList.map(item=>{
            return{
                id:item.id,
                name:item.name,
                categoryList:item.categoryList.map(({name,id,wapBannerUrl})=>({name,id,wapBannerUrl}))
            }
        })
        
    }
    console.log(newdata);
    commit("setcategorylist",newdata);
    },
    async getgroupitem({commit},params){
        let data = await fetchGetData(API.CATEGOEY_LIST_GROUP_ITEM_URL,params);
        let items = data.itemList.map(item1=>{
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
      commit("setgroupdata",items);

 },
}

export default{
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}