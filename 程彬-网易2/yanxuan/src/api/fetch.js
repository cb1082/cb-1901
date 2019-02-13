import axios from "axios";
import { Toast } from 'vant';
//get请求数据
export function fetchGetData(url,params={}){
    return new Promise((resolve,reject)=>{
        axios.get(url,{params}).then(response=>{
            resolve(response.data.data);
        }).catch(err=>{
            console.log(err);
            Toast('请求失败');
        })
    })

}


//post请求数据
export function fetchPostData(url,params){
    return new Promise((resolve,reject)=>{
        axios.post(url,params).then(response=>{
            resolve(response.data.data);
        }).catch(err=>{
            console.log(err);
            Toast('请求失败');
        })
    })
}
