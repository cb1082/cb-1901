<template>
<div>
    <div class="page">
        <div class="app-header header border-bottom">
            <div class="search">
                <van-icon name="search" />
                 <span class="text">搜索商品，共{{totalData}}款商品</span>
            </div>
        </div>
        <div class="content">
           <Scroller class="scroll1 border-right" ><catemenu></catemenu></Scroller>
           <Scroller class="scroll2" ref="scroll"><catelist></catelist></Scroller>
        </div>
    </div>
    <router-view name='cg-group'></router-view>
</div>
    
</template>

<script>
import catemenu from '@components/category/category-menu';
import catelist from '@components/category/category-list';

import {mapState} from "vuex"; 
export default {
    components:{
        catemenu,
        catelist
    },
    created() {
        this.$store.dispatch("home/getTotalData")
    },
    computed: {
        ...mapState({
            totalData:state=>state.home.totalData,
            id:state=>state.category.selectmenuId
        })
    },
    watch: {
        id(newval){
            
            newval && this.$refs.scroll.scrollTo(0,0);
        }
    },
}

</script>
<style lang="scss" scoped>
.app-header{
    width: 100%;
    height: 44px;
    background: #ffffff;
}
.header{
    padding: 16px 30px;
}
.search{
    width: 100%;
    height: 100%;
   background: #ededed;
   display: flex;
   justify-content: center;
   align-items: center;
}
.van-icon{
    color: #111;
    font-size: 30px;
    
}
.text{
    font-size: 28px;
    color: #666666;
}
.content{
    position: absolute;
    top:44px;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;

}
.scroll1{
    width: 162px;
    float: left;
    height: 100%;
}
.scroll2{
    flex: 1;
    height: 100%;
    overflow: hidden;
}

</style>


