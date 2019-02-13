export default{
    path:"/home",
    component:()=>import("@views/home"),
    children:[
        {
            name:'main',
            path:"main",
            alias:'',
            component:()=>import("@components/home/home-main"),
        },
        {
            path:'menu/:id/:name',
            component:()=>import("@components/home/home-menu-main"),
            props:true,
        },
        {
            name:'catelist',
            path:"catelist/:id/:name",
            components:{
                default:()=>import("@components/home/home-main"),
                "cg-list":()=>import("@views/home/catelist")
            },
            props:{"cg-list":true}
        }


    ]

}