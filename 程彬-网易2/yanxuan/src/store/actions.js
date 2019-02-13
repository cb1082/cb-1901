import {fetchPostData} from "@api/fetch";

import API from "@api/api";

export default{
    async getuserdata({commit},params){
        let data = await fetchPostData(API.LOGIN_URL,{
            username:params.username,
             password:params.pwd})
        localStorage.setItem('userToken',data.token);
        commit("setusername",data.username);
        commit("setuserimg",data.headerImg);
        
        return 0
    }    

    
}