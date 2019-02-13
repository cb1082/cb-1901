export default{
    name:"category",
    path:"/category",
    component:()=>import("@views/category"),
    children:[
        {
            name:'group',
            path:'group/:id',
            components:{
                'cg-group':()=>import("@views/category/categorygroup")
            },
            props:{'cg-group':true}
        }
    ]
}