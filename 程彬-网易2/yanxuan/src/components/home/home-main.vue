<template>
    <div class="content home-main">
        <Scroller ref="scroll" class="scroll">
            <div class="banner">
                <van-swipe :autoplay="3000" indicator-color='#fff'>
                <van-swipe-item v-for="item in bannerlist" :key="item.id">
                    <img :src="item.picUrl" class="bannerimg" />
                </van-swipe-item>
                </van-swipe>
            </div>
            <div class="policylist">
                <li v-for="item in policylist" :key="item.icon" class="suofang">
                    <img :src="item.icon" alt="">
                    <span >{{item.desc}}</span>
                </li>
            </div>
            <div class="homecatelist">
                <li v-for="item in homecatelist" :key="item.picUrl" @click="pushAction(item.text)">
                    <img :src="item.picUrl" alt="">
                    <h3 class="suofang">{{item.text}}</h3>
                </li>
            </div>
            <div class="topcatelist"> 
                <topcatelist v-for="item1 in topcatelist" :key="item1.titlePicUrl" :item="item1"></topcatelist>
            </div>
        </Scroller>
    </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';
import {mapState} from 'vuex';
import topcatelist from "./home-topcategory.vue"
export default {
    components:{
        [Swipe.name]:Swipe,
        [SwipeItem.name]:SwipeItem,
        topcatelist,
    },
    created() {
        
        this.$store.dispatch("home/getbannerlist");

        this.$store.dispatch("home/getpolicylist");
        
        this.$store.dispatch("home/gethomecatelist");

        this.$store.dispatch("home/gettopcatelist");

    },
    computed: {
        ...mapState({
            bannerlist:state=>state.home.bannerlist,
            policylist:state=>state.home.policylist,
            homecatelist:state=>state.home.homecatelist,
            topcatelist:state=>state.home.topcatelist,
            catelist:state=>state.home.catelist,
        })
    },
    watch: {
        "$route.path":function(newval){
           this.$refs.scroll.scrollTo(0,0);
        }
    },
    methods: {
        pushAction(name){
            let data = this.catelist.find(item=>{
                return item.label==name;
            })
            this.$router.push({name:'catelist',params:{id:data.id,name:data.label}})
        }
    },

}
</script>

<style lang="scss" scoped>
.bannerimg{
    width: 100%;
}
.policylist{
    width: 100%;
    height: 72px;
    padding: 0 25px 0px 35px;
    display: flex;
    align-items: center;
    background: #ffffff;
    li{
        img{
            float: left;
            width: 32px;
            height: 32px;
        }
        span{
            float: left;
            height: 32px;
            font-size: 12px;
            line-height:32px;
            margin-left:8px; 
            color: #B4282D;
        }
    }
   
}
.policylist li:nth-child(3){
    width: 245px;
}
.policylist li:nth-child(1){
    width: 225px;
}
.policylist li:nth-child(2){
    width: 225px;
}
.homecatelist{
    height: 341px;
    width: 100%;
    li{
        float: left;
        width: 110px;
        height: 156px;
        margin: 10px 20px 0 20px;
        img{
            display: block;
            width: 100%;
        }
        h3{
            text-align: center;
            width: 116px;
            line-height: 36px;
            margin-top:10px;
            margin-left:-3px; 
            color: #333333;
            font-size: 12px; 
        }
    }

}
.topcatelist{
    width: 100%;
  
}
.scroll{
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
    bottom: 0;
    left: 0;
}


</style>
<style lang="scss">
.van-swipe__indicator {
    border-radius: 2px;
    width: 40px;
    height: 4px;
    background:#f9f9f9;
 
  
}
.van-swipe__indicators {
    bottom: 30px;
}
.van-swipe__indicator:not(:last-child) {
    margin-right: 10px;
}


</style>




