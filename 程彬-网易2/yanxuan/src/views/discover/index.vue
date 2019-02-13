<template>
    <div class="page">
        <app-header class="border-bottom" title="发现"></app-header>
        <div class="nav tabbar">
            <li v-for=" (item,index) in tabsdata" :key="item.tabId" class="border-bottom" @click="selectAction(index,item.tabId)">
                 <span :class="{active:selectId==index}">{{item.tabName}}</span>
            </li>
        </div>
        <component :is="comname" :id="id"></component>
    </div>
</template>

<script>
import {mapState} from "vuex";
import content1 from "@components/discover/content1";
import content2 from "@components/discover/content2";

export default {
    data() {
        return {
            selectId:0,
            id:9
        }
    },
    components:{
        content1,
        content2
    },
    computed: {
        ...mapState({
            tabsdata:state=>state.discover.tabsdata


        }),
        comname(){
            console.log(this.selectId);
            switch (this.selectId) {
                case 3:return 'content2';
                default:return 'content1';      
            }
        }
    },
    created() {
        this.$store.dispatch("discover/gettabsdata");
    },
    methods: {
        selectAction(index,id){
            console.log(1)
            this.selectId=index;
            this.id=id;
        }
    },



}
</script>

<style lang="scss" scoped>
.nav{
    position: absolute;
    top: 44px;
    left: 0;
    width: 100%;
    display: flex ;
    z-index: 2000;
    

}
.tabbar{
    height: 46px;
    padding: 0px 10px;
    background: #ffffff;
    li{
        flex: 1;
        text-align: center;
        line-height: 46px;
        padding: 0 30px;
        span{
            display: block;
            height: 46px;
            border-bottom: 3px solid transparent;
        }
        span.active{
        border-bottom: 3px solid #B4282D;
        color: #B4282D;
     }
    }
}



</style>

