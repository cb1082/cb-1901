
import {fetchGetData} from "@api/fetch";

import API from "@api/api";
const state={
    BannerUrls:[],
    GoodInfo:{},
    GoodDetail:'',
}

const mutations={
    
    setBannerUrls(state,params){
        state.BannerUrls=params;
    },
    setGoodInfo(state,params){
        state.GoodInfo=params;
    },
    setGoodDetail(state,params){
        state.GoodDetail=params;
    }

}

const actions={
    async getgoodsdata({commit},params){
        let data = await fetchGetData(API.ITEM_DETAIL_URL,{
            id:params,
        });
        
        // 处理商品轮播图
        let bannerUrls = [data.primaryPicUrl, 
                            data.itemDetail.picUrl1,
                            data.itemDetail.picUrl2,
                            data.itemDetail.picUrl3,
                            data.itemDetail.picUrl4];
        bannerUrls = bannerUrls.filter(item=>item);
        commit('setBannerUrls', bannerUrls);
        // 商品主要信息
        let info = {
            characteristicList: data.characteristicList,
            retailPrice: data.retailPrice,
            counterPrice: data.counterPrice,
            itemTagList: data.itemTagList.map(({name})=>({name})),
            name: data.name,
            simpleDesc: data.simpleDesc,
            commentCount: data.commentCount>999?'999+':data.commentCount
        }
        commit('setGoodInfo', info);
        console.log(info);
        // 详情
        commit('setGoodDetail', data.itemDetail.detailHtml);
        
    },
    removedata({commit}){
        commit("setBannerUrls",[]);
        commit("setGoodInfo",{});
        commit("setGoodDetail","");
    }

}


export default{
    namespaced:true,
    state,
    mutations,
    actions
}

