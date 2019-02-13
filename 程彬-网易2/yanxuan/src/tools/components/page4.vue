<template>
    <div class="page4">
        <div class="title">{{item.title}}</div>
        <div class="subtitle">{{item.subTitle}}</div>
        <div class="box">
             <div class="img" v-for="(img,index) in item.itemList" :key="img.itemId" >
                
               
                    <img v-lazy="img.itemUrl" @click="ImgPreview(index)" >
            </div>
        </div>
        <div class="rcount">
            <van-icon name="eye-o" />
            <span>{{count}}</span>
        </div>
    </div>
</template>

<script>
import { ImagePreview } from 'vant';
export default {
    props:['item'],
    methods: {
            ImgPreview(index){
                ImagePreview({
                    images: this.item.itemList.map(({itemUrl})=>{
                        return itemUrl;
                    }),
                    startPosition: index,
                    onClose() {
                        // do something
                    }
            });
        }
    },
     computed: {
        count(){
            if(this.item.readCount/100000>1){
                return Math.round(this.item.readCount/1000)/10+"w人看过"
            }else if(this.item.readCount/10000>1){
                return Math.round(this.item.readCount/100)/10+"k人看过"
            }else{
                return this.item.readCount + "人看过"
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.page4{
    width: 100%;
    padding: 36px 30px;
    margin: 20px 0;
    background: #ffffff;
}
.title{
    height: 54px;
    font-size: 34px;
    line-height: 54px;
    text-overflow:ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.subtitle{
    margin-top:8px;
    line-height: 40px;
    font-size: 28px;
    color: #666; 
}
.box{
    height: 348px;
    width: 100%;
    background: #ffffff;
    margin-top: 24px;
}
.img{
    width: 166px;
    height: 166px;
    float: left;
    margin: 3px 3px;
    background: #f4f4f4;
    
    img{
        width: 100%;
        display: block;
    }
}
.rcount{
    margin-top: 18px;
    .van-icon{
        font-size: 30px;
        color: #999;
        transform: translateY(5px);

    }
    span{
        color: #999;
    }
}

</style>

<style>
.van-image-preview__image{
    background: #ffffff;
}
</style>
