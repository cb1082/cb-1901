const state={
    cartgoods:[],

};
const mutations={
    setcartgoods(state,params){
       if(state.cartgoods.length==0){
           state.cartgoods.push(params);
       }else{
            let index = state.cartgoods.findIndex(item=>{
                return params.id==item.id;
            }) 
            if(index==-1){
                state.cartgoods.push(params);
            }else{
                state.cartgoods[index].count+=1;
            }
       }
       
    },
    //更改商品数量
    setgoodscount(state,params){
          let index = state.cartgoods.findIndex(item=>{
              return item.id==params.item.id;
          })
          if(index>=0){
            state.cartgoods[index].count=params.count;
          }
          
    },
    //删除商品
    removegoods(state,params){
        state.cartgoods=state.cartgoods.filter(item=>{
            return item.id !=params.id;
        })
    }
};
const actions={


};


export default{
    namespaced:true,
    state,
    mutations,
    actions
}