<template>
    <div class="tab-bar border-top">
        <router-link v-for="item in list" :key="item.path" class="tab-item" :to="item.path" >
            <span class="icon"></span>
            <span class="text">{{item.name}}</span>
        </router-link>
    </div>
</template>

<script>
export default {
     name:"tab-bar",
     data() {
         return {
             list:[ {name:"首页",path:"/home"},
                    {name:"分类",path:"/category"},
                    {name:"识物",path:"/discover"},
                    {name:"购物车",path:"/cart"},
                    {name:"个人",path:"/mine"},
                ],

         }
     }
}
</script>

<style lang="scss" scoped>
    .tab-bar{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 49px;
        display: flex;
        background: #ffffff;
        .tab-item{
            flex: 1;
            font-size: 12px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
        }
    }
    .icon{
            display: block;
            width: 40px;
            height: 40px;
            background: url(/images/tab.png) no-repeat;
            background-size: 100%;
            margin: 0 auto;
        }
    .text{
        display: block;
        margin-top: 7px;
        color: #666;
    }
    .tab-item:nth-of-type(1) .icon{
        background-position-y: -250px;

    }
    .tab-item:nth-of-type(2) .icon{
        background-position-y: -150px;

    }
    .tab-item:nth-of-type(3) .icon{
        background-position-y: -350px;

    }
    .tab-item:nth-of-type(4) .icon{
        background-position-y: -50px;

    }
    .tab-item:nth-of-type(5) .icon{
        background-position-y: -450px;

    }
    .tab-item.router-link-active:nth-of-type(1) .icon{
        background-position-y: -200px;

    }
    .tab-item.router-link-active:nth-of-type(2) .icon{
        background-position-y: -100px;

    }
    .tab-item.router-link-active:nth-of-type(3) .icon{
        background-position-y: -298px;

    }
    .tab-item.router-link-active:nth-of-type(4) .icon{
        background-position-y: -0px;

    }
    .tab-item.router-link-active:nth-of-type(5) .icon{
        background-position-y: -400px;

    }
    .tab-item.router-link-active .text{
        color: #b4282d;
    }

</style>

