<template>
    <div class="list">
        <div class="banner">
            <img :src="categorylist.wapBannerUrl" alt="" class="bannerImg">
        </div>
        <div class="list1">
            <div v-for="item in categorylist.subCateList " :key="item.id">
                <div class="title" v-if="item.name">{{item.name}}</div>
                <div class="list-content">
                    <li v-for="item1 in item.categoryList" :key="item1.id" @click="pushAction(item1)">
                        <img :src="item1.wapBannerUrl" alt="">
                        <div>{{item1.name}}</div>
                    </li>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";
export default {
    computed: {
        ...mapState({
            id:state=>state.category.selectmenuId,
            categorylist:state=>state.category.categorylist
        })
        
    },
    created() {
        this.$store.dispatch('category/getcategorygroup',this.id);
    },
    watch: {
        id(newval){
            this.$store.dispatch('category/getcategorygroup',newval);
        }
    },
    methods: {
        pushAction(item1){
            this.$router.push({name:'group',params:{id:item1.id}});
        }
    },

}
</script>

<style lang="scss" scoped>
.list{
    padding: 30px 30px 21px 30px;
}
.banner{
    margin-bottom:31px; 
}
.bannerImg{
    width: 100%;
    display: block

}
.title{
    height: 50px;
    width: 100%;
    margin-bottom:24px;
    border-bottom:1px solid #d9d9d9;  
    font-weight: 700;
    color: #333;
    line-height: 50px;
    font-size: 28px;
}
.list-content{
    overflow: hidden;
    li{
        height: 216px;
        width: 144px;
        margin-right:30px; 
        float: left;
        img{
            width: 100%;
            height: 144px;
            display: block;
        }
        div{
            text-align: center;
            color: #333;
        }
    }
}

</style>

