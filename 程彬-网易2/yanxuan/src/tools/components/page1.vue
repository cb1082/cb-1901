<template>
    <div class=" page1">
        <div class="title">{{item.title}}</div>
        <img v-lazy="item.picUrl" alt="" class="img">
        <div class="rcount">
            <van-icon name="eye-o" />
            <span>{{count}}</span>
        </div>
    </div>
</template>

<script>

export default {
    props:['item'],
  computed: {
      count(){
          if(this.item.readCount>1000){
              return Math.round(this.item.readCount/1000)/10  + "w人看过";
          }else if(this.item.readCount>1000){
              return Math.round(this.item.readCount/100)/10 + "k人看过";
          }else{
              return this.item.readCount+"人看过";
          }
      }     
  },

}
</script>
<style lang="scss" scoped>
.page1{
    width: 100%;
    padding: 36px 30px;
    margin: 20px 0;
    background: #ffffff;
}
.title{
    line-height: 52px;
    margin-bottom:8px;
    font-size: 32px; 
}
.img{
    width: 100%;
    display: block;
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


