import {fetchGetData} from "@api/fetch";
import API from "@api/api";


const  state={
    tabsdata:[],
    tabs:[],
    TabShowData:[],
    page:1
};

const mutations={
    settabsdata(state,params){
        state.tabsdata=params
    },
    settabs(state,params){
        state.tabs=params;
    },
    setTabShowData(state,params){
        state.TabShowData=[...state.TabShowData,...params];
        state.page+=1;
    }

};

const actions={
    async gettabsdata({commit},params={}){
        let data = await fetchGetData(API.TOPIC_FIND_TABS_URL);
        let newdata= data.map(({tabId,tabName})=>({tabId,tabName}))
        commit("settabsdata",newdata);
        
    },
    async gettabs({commit},params){
        let data =await fetchGetData(API.TOPIC_FIND_TAB_DATA_URL,params);
      
        let newdata = data.result.map(item=>{
            return{
                subTitle:item.subTitle,
                avatar:item.avatar,
                nickname:item.nickname,
                picUrl:item.picUrl,
                readCount:item.readCount,
                title:item.title,
                topicId:item.topicId,
                style:item.style,
                itemList:item.itemList==null?item.itemList:item.itemList.map(({itemId,itemUrl})=>({itemId,itemUrl}))
            }
        })
        console.log(newdata);
        commit("settabs",newdata);

    },
    async getTabShowData({commit},params){
        let data = await fetchGetData(API.TOPIC_FIND_SHOW_DATA_URL,{
            page:params.page,
            size:params.size,
            type:params.type
        })
        console.log(data);
        let newdata = data.topicList.map(({bannerInfo,topicId,content,nickName})=>({picUrl:bannerInfo.picUrl,topicId,height:bannerInfo.height,width:bannerInfo.width,content,nickName}));
        commit("setTabShowData",newdata);

    }
};


export default{
    namespaced:true,
    state,
    mutations,
    actions
}