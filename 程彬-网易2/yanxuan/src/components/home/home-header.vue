<template>
    <div class="home-header">
        <img src="/images/logo.png" alt="" class="logo">
        <div class="searchbar">
            <van-icon name="search" />
            <span class="text">搜索商品，共{{totalData}}款商品</span>
        </div>
        <div class="btn">登录</div>
    </div>
</template>

<script>
import {mapState} from "vuex"; 
export default {
    name:'home-header',
    created() {
        this.$store.dispatch("home/getTotalData")
    },
    computed: {
        ...mapState({
            totalData:state=>state.home.totalData,
        })
    },
}
</script>
<style lang="scss" scoped>
    .home-header{
        display: flex;
        padding: 8px 15px;
        background: #fff;
        align-items: center;
    }
    .logo{
        display: block;
        width: 138px;
        height: 40px;
        margin-right: 16px
    }
    .btn{
        width: 74px;
        margin-left: 16px;
        height: 40px;
        line-height: 40px;
        border: 1px solid #b4282d;
        text-align: center;
        border-radius: 8px;
        color: #b4282d;
    }
    .searchbar{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #ededed;
        border-radius:8px;
        height: 56px;
    } 
    .van-icon{
        color: #111;
        font-size: 30px;
       
    }
    .text{
        line-height: 56px;
        color: #666666;
    }
   
</style>



