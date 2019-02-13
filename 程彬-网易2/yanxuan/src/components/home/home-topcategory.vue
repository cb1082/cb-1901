<template>
    <div>
        <img v-lazy="item.titlePicUrl" alt="" class="bigImg">
        <div ref="scroll" class="scroll">
            <div ref="scrollList" class="scrollList">
                <li v-for="item1 in item.itemList" :key="item1.id" class="item">
                    <img v-lazy="item1.primaryPicUrl" alt="" class="smallImg">
                    <p class="name">{{item1.name1}}</p>
                    <p class="price"><span>¥{{item1.retailPrice}}</span><span v-if="item1.retailPrice!=item1.counterPrice">¥{{item1.counterPrice}}</span></p>
                    <span class="btn" v-if="item1.name2.length>0">{{item1.name2[0].name}}</span>
                </li>
                <li class="more">
                    <span>查看更多</span>
                    <van-icon name="arrow" />
                </li>
            </div>
        </div>
    </div>
</template>

<script>
import BSscroll from 'better-scroll';
export default {
    props:["item"],
    mounted() {
        let length = (this.item.itemList.length+1)*2.99;
        this.$refs.scrollList.style.width=length+"rem";
        let scroll= new BSscroll(this.$refs.scroll,{
            scrollX:true,
            scrollY:false,
            click:true,
            tap:true
        });
        scroll.on("beforeScrollStart",()=>{
                scroll.refresh();
        })
        

    },

}
</script>

<style lang="scss" scoped>
.bigImg{
    display: block;
    width: 100%;
    margin-bottom: 20px;
}
.scroll{
    overflow: hidden;
    height: 400px;
    width: 100%;
    padding: 0 30px 30px 30px;
    
}
.scrollList{
    overflow: hidden;
}
.item{
    width: 200px;
    margin-right: 20px;
    height: 360px;
    float: left;
}
.item:nth-child(1){
    margin-left: 30px;
}
.smallImg{
    width: 100%;
    display: block;
    background-color: #f4f4f4;
}
.more{
    height: 200px;
    width: 200px;
    background: #f4f4f4;
    float: left;
    text-align: center;
    line-height: 200px;
    color: #333;
    font-size: 31px;
    .van-icon{
        font-size: 31px;
        transform: translateY(3px);
    } 
}
.name{
    line-height: 34px;
    margin-top: 18px;
    max-height: 68px;
    overflow: hidden;
    text-overflow: ellipsis;
}
.price{
    line-height: 36px;
    color: #999;
    span:nth-child(1){
        color: #b4282d;
    }
    span:nth-child(2){
        text-decoration:line-through;
        padding-left:10px; 
        
    }
}
.btn{
   padding:0 5px; 
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: 1px solid #B4282D;
    color: #B4282D;
    background: rgba(255,255,255,0.9);
    font-size: 24px;
}


</style>

