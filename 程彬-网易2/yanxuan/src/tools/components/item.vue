<template>
    <div>
       <li v-for="item1 in data" :key="item1.id" class="item" @click="pushAction(item1.id)">
            <img v-lazy="item1.listPicUrl" alt="" class="smallImg">
            <p class="name">{{item1.name1}}</p>
            <p class="price"><span>¥{{item1.retailPrice}}</span><span v-if="item1.retailPrice!=item1.counterPrice">¥{{item1.counterPrice}}</span></p>
            <span class="btn" v-if="item1.name2.length>0">{{item1.name2[0].name}}</span>
        </li>
    </div>
</template>

<script>
export default {
    props:['data'],
    name:'item',
    methods: {
        pushAction(id){
            this.$router.push({name:'goodslist',params:{id}});

        }
    },

}
</script>

<style lang="scss" scoped>
.item{
    width: 50%;
    height: 528px;
    float: left;
    padding: 0px 9px 28px;

}
.smallImg{
    width: 100%;
    background: #f4f4f4;
    display: block;
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

