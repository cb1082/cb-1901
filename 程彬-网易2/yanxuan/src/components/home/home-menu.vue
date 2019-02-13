<template>
    <div class="home-menu menu">
        <ly-tab v-if="catelist.length>1"
            v-model="selectedId"
            :items="catelist"
            :options="{activeColor:'#b4282d',lineWidth:2}">
        </ly-tab>
        <div class="tab-list" >
            <div class="linear"></div>
            <van-icon name="arrow-up" :class="{active:isShow}" @click="listAction"/>
        </div>
        <van-popup v-model="isShow"></van-popup>
        <div v-show="isShow" class="list">
            <h2>全部频道</h2>
            <div class="list-item">
                <li v-for="(item,index) in catelist" :key="item.id" class="item border" :class="{active:selectedId==index}" @click="itemAction(index)">{{item.label}}</li>
            </div>
        </div>
    </div>
</template>
<script>
import LyTab from 'ly-tab';
import { Popup } from 'vant';
import {mapState} from "vuex";
export default {
    name:"home-menu",
    components:{
        LyTab:LyTab.LyTab,
        [Popup.name]:Popup
    },
    data() {
        return {
            selectedId:0,
            isShow:false
        }
    },
    created() {
        this.$store.dispatch("home/getcatelist");
        
    },
    computed: {
        ...mapState({
            catelist:state=>state.home.catelist,
        })
    },
    methods: {
        listAction(){
            this.isShow=!this.isShow;
        },
        itemAction(index){
            this.selectedId=index;
            this.listAction();
        }
    },
    watch: {
        selectedId(newval){
            if(newval==0){
                this.$router.push({name:'main'})

            }else{
                let {id,label}=this.catelist[newval];
                this.$router.push(`/home/menu/${id}/${label}`);
            }
        },
        '$route.path':function(newval){
            if(newval=='/home' || newval=='/home/main'){
                this.selectedId=0;
            }
        },
        catelist(){
            if(!this.$route.params.name){
                return;
            }
            let num = this.catelist.findIndex(item=>{
                return item.label==this.$route.params.name;
            })
            this.selectedId=num;


        }
        
    },


}
</script>
<style lang="scss" scoped>
  .home-menu{
        position: absolute;
        top: 44px;
        left: 0;
        width: 100%;
        z-index: 1;
    }
    .menu{
        height: 60px;
    }
.tab-list{
    height: 100%;
    width: 100px;
    background: #ffffff;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 3001;
}
.van-icon{
    display: block;
    text-align: center;
    line-height: 60px;
    font-size: 30px;
    transition: 0.3s;   
}
.van-icon.active{
    transform: rotate(180deg);
}

.linear{
    height: 60px;
    width: 60px;
    position: absolute;
    left: -60px;
    top: 0;
    background: linear-gradient(to right,rgba(255,255,255,0),rgba(255,255,255,1))
}
.list{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 372px;
    background: #ffffff;
    z-index: 3000;

}
h2{
    padding-left: 30px;
    height: 60px;
    line-height: 60px;
    font-size: 27px;
}
.list-item{
    height: 312px;
    width: 100%;
    background: #ffffff;
    padding-top: 24px;
    .item{
        float: left;
        height: 54px;
        width: 148px;
        border-color: #ccc;
        background: #FAFAFA;
        margin-left:30px;
        margin-bottom: 40px;
        text-align: center;
        line-height: 52px; 
        color: #333;

    }
}
.item.active{
    border-color: #b4282d;
    color: #b4282d;

}

</style>


<style>
.menu .ly-tab-list{
    height: 60px;
    padding-right:110px; 
}
.menu  .ly-tab-item-label{
    padding: 0 16px;
}
.menu  .ly-tabbar {
     border-bottom: none; 
     -webkit-box-shadow: none; 
     box-shadow: none; 
}
 .van-overlay {
    position: fixed;
    top:44px;
    left: 0;
    width: 100%;
    height: 100%;
    
}

</style>
