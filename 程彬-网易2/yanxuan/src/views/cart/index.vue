<template>
    <div class="page">
        <app-header class="cartheader border-bottom" title="购物车"></app-header>
        <Scroller class="cateScroll">
            <van-swipe-cell :right-width="65" :left-width="0" class="border-bottom" v-for="item in cartdata" :key="item.id">
                <div class="con">
                    <img :src="item.mainPicUrl" alt="" class="cartimg">
                    <div class="content-text">
                        <p>{{item.name}}</p>
                        <p>{{item.price}}</p>
                        <van-stepper :value="item.count"  @input="handleInput($event,item)"/>
                    </div>
                    
                </div>
                <span slot="right" class="right" @click="remove(item)">删除</span>
            </van-swipe-cell>
        </Scroller>
        <van-submit-bar
            :price="count"
            button-text="下单"
            @submit="onSubmit"
        />
        
    </div>
</template>

<script>
import {mapState} from "vuex";
import { SwipeCell,Stepper,SubmitBar } from 'vant';

export default {
    components:{
        [SwipeCell.name]:SwipeCell,
        [Stepper.name]:Stepper,
        [SubmitBar.name]:SubmitBar
    },
   computed: {
       ...mapState({
           cartdata:state=>state.cart.cartgoods,
       }),
       count(){
           let tem=0;
           this.cartdata.forEach(element => {
               tem+=element.price*element.count;
           });
           return tem*100;
       }
   },

   methods: {
       handleInput(count,item){
           this.$store.commit("cart/setgoodscount",{
               item,
               count
           })
       },
        remove(item){
            this.$store.commit("cart/removegoods",item);
        },
        onSubmit(){
            console.log("下单")
        }
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
.van-swipe-cell{
    height: 268px;
    
}
.con{
    height: 268px;
    display: flex;
    align-items: center;
    .cartimg{
        width: 160px;
        height: 160px;
    }
}
.right{
    display: block;
    text-align: center;
    line-height: 268px;
    width: 130px;
    background: red;
}
.van-stepper{
        position: absolute;
        right: 0;
        bottom:20px;

}

</style>
<style lang="scss">
.van-submit-bar__bar {
    position: absolute;
    bottom: 49px;
    left: 0;
    width: 100%;
    height: 40px;
    .van-button{
    height: 40px;
        line-height: 40px
    }
}
    


</style>


