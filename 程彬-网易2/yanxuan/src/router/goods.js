export default{
    name:'goodslist',
    path:'/goodslist/:id',
    components:{
        'goodslist':()=>import("@views/common/goods-list"),
    },
    props:{'goodslist':true},
    children:[
        {
            name:'buy',
            path:'buy',
            component:()=>import("@views/common/buy.vue")
        }

    ]



}