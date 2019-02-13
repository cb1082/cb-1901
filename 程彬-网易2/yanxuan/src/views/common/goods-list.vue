<template>
    <div class="page subpage goods-list">
        <app-header :title="GoodInfo.name"></app-header>
        <Scroller class="cateScroll">
            <van-swipe  @change="onChange">
                <van-swipe-item v-for="(image, index) in BannerUrls" :key="index">
                    <img v-lazy="image"  />
                </van-swipe-item>
                <div class="custom-indicator" slot="indicator">
                    {{ current + 1 }}/{{BannerUrls.length}}
                </div>
            </van-swipe>
            <div class="m-characteristic">
               <li v-for="item in GoodInfo.characteristicList" :key="item.picUrl" >
                   <img :src="item.picUrl" alt="">
                   <div>
                       <p>{{item.simpleDescList[0]}}</p>
                       <p>{{item.simpleDescList[1]}}</p>
                   </div>
               </li>
            </div>
            <div class="price">
                <p><span>¥{{GoodInfo.retailPrice}}</span><span v-if="GoodInfo.counterPrice != GoodInfo.retailPrice">¥{{GoodInfo.counterPrice}}</span></p>
                <div class="name">
                    <p>{{GoodInfo.name}}</p>
                    <p>{{GoodInfo.simpleDesc}}</p>
                </div>
            </div>
            <div class="GoodDetail" v-html="GoodDetail"></div>
        </Scroller>
        <div class="cart border-top">
            <div class="border-right">
                <van-icon name="service-o" />
            </div>
            <div class="border-right" @click="buyAction">立即购买</div>
            <div @click="addcart">加入购物车</div>
        </div>

        <router-view></router-view>
    </div>
</template>

<script>
import  {mapState} from "vuex";
import { Swipe, SwipeItem } from 'vant';
export default {
    props:['id'],
     components:{
        [Swipe.name]:Swipe,
        [SwipeItem.name]:SwipeItem,
    }, 
     data() {
        return {
            current: 0
        }
     },
    created() {
       this.$store.dispatch('goods/getgoodsdata',this.id);
    },
    computed: {
        ...mapState({
            BannerUrls:state=>state.goods.BannerUrls,
            GoodInfo:state=>state.goods.GoodInfo,
            GoodDetail:state=>state.goods.GoodDetail
        })
    },
    
    methods: {
        onChange(index) {
            this.current = index;
        },
        buyAction(){
            this.$router.push({name:'buy'});
        },
        addcart(){
            this.$store.commit("cart/setcartgoods",{
                    id: this.id,
                    name: this.GoodInfo.name,
                    price: this.GoodInfo.retailPrice,
                    mainPicUrl: this.BannerUrls[0],
                    count:1,
             })
             this.$toast.success({
                duration: 1000, 
                message:"成功添加"
            });
        }
    },
    beforeDestroy() {
        this.$store.dispatch('goods/removedata')
    },
}
</script>
<style lang="scss" scoped>
.cateScroll{
    position: absolute;
    top: 44px;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;

}
.m-characteristic{
    height: 124px;
    width: 100%;
    background: #F9F9F9;
    display: flex;
    padding: 24px 30px;

    li{
        flex: 1;
        img{
            width: 72px;
            height: 72px;
            border-radius:36px; 
            float: left;
        }
        div{
            float: left;
            margin-left:16px; 
            p{
                font-size: 28px;
                line-height: 28px;
                color: #333;
            }
            p:nth-child(1){
                margin-bottom: 16px;
            }
        }
    }
}
.price{
    width: 100%;
    height: 370px;
    padding: 36px 30px;
    border-bottom:10px solid #eee; 
    p{
        span:nth-child(1){
            font-size: 60px;
            line-height: 60px;
            color: #B4282D;
        }
        span:nth-child(2){
            text-decoration: line-through;
            color: #333;
        }
    }
    .name{
        width: 518px;
        height: 132px;
        margin-top: 60px;
        p:nth-child(1){
            height: 96px;
            font-size: 30px;
        }
        p:nth-child(2){
            height: 36px;
            color: #333;
        }
        
    }
}
.cart{
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    height: 104px;
    div{
        flex: 1;
        text-align: center;
        line-height: 104px;
        font-size: 28px;
    }
    div:nth-child(1){
        font-size: 60px;
        color: #999;
        
    }
    div:nth-child(2){
        color: #333;
    }
    div:nth-child(3){
       background: #b4282d;
        color: #fff;
        
    }
}
</style>

<style>
.custom-indicator{
    position: absolute;
    right: 30px;
    bottom: 30px;
    width: 52px;
    height: 25px;
    background: white;
    text-align: center;
    line-height: 25px;
}
.van-swipe img{
    width: 100%;
    display: block;
}
.GoodDetail p img{
    display: block;
    width: 100%;
}
.van-toast{
    z-index: 5000 !important;
   
}
</style>
