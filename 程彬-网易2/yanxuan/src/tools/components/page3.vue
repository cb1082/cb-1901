<template>
       <div class="page3">
        <div class="text">
            <div class="name">
                <img :src="item.avatar" alt="">
                <span>{{item.nickname}}</span>    
            </div>
            <div class="title">{{item.title}}</div>
            <div class="subtitle">{{item.subTitle}}</div>
            <div class="rcount">
                <van-icon name="eye-o" />
                <span>{{count}}</span>
             </div>
        </div>
           <img v-lazy="item.picUrl" alt="" class="img">
    </div>
</template>

<script>
export default {
    props:['item'],
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

.page3{
    width: 100%;
    padding: 36px 30px;
    margin: 20px 0;
    background: #ffffff;
    overflow: hidden;
}
.text{
    width: 400px;
    height: 272px;
    float: left;
    .name{
    height: 56px;
    margin-bottom: 24px;
    img{
        height: 56px;
        width: 56px;
        border-radius: 28px;
        float: left;
    }
    span{
        float: left;
        text-align: center;
        line-height: 56px;
        font-size: 28px;
        width: 200px;
        height: 56px;
    }
}
}
.title{
    height: 90px;
    width: 380px;
    font-size: 36px;
    line-height: 45px;
    text-overflow: ellipsis;
    overflow: hidden;
}
.subtitle{
    margin-top: 8px;
    height: 40px;
    color: #999;
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
.img{
    width: 272px;
    height: 272px;
    float: left;
}
</style>

