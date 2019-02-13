<template>
    <div class="page subpage">
        <app-header :title="name"></app-header>
        <div class="nav ly-bar">
            <ly-tab
            v-model="selectedId"
            :items="menu"
            :options=" {activeColor: '#b4282d',lineWidth:2}">
            </ly-tab>
        </div>
        <Scroller ref="scroll" class="cateScroll scroll">
                <item :data='groupdata'></item>
        </Scroller>
    </div>
</template>

<script>
import {mapState,mapGetters} from "vuex";
import LyTab from 'ly-tab';
export default {
    props:['id'],
    components:{
        LyTab:LyTab.LyTab
    },
    data() {
        return {
            selectedId:0,
        }
    },
    computed: {
        ...mapState({
            selectmenuId:state=>state.category.selectmenuId,
            categorylist:state=>state.category.categorylist,
            groupdata:state=>state.category.groupdata
        }),
        ...mapGetters({
            name:"category/gettitle",
        }),
        menu(){
            let {subCateList} =this.categorylist;
            if(!subCateList){
                return [];
            }
            let newdata=[];
            subCateList.forEach(element => {
                let data = element.categoryList.map(({id,name})=>({id,label:name}));
                newdata=[...newdata,...data];
            });
            return newdata;
        }
    },
    created() {
        this.$store.dispatch('category/getgroupitem',{categoryId:this.selectmenuId, subCategoryId:this.id});
        let index =this.menu.findIndex(item=>{
            return item.id==this.id;
        })
        this.selectedId=index;
    },
    watch: {
        selectedId(newval){
            this.$refs.scroll.scrollTo(0,0);
            if(this.menu.length<=0){
                return;
            }
            let id =this.menu[newval].id;
            this.$store.dispatch('category/getgroupitem',{categoryId:this.selectmenuId,subCategoryId:id});
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
}
.cateScroll{
    overflow: hidden;
    position: absolute;
    top: 44px;
    width: 100%;
    bottom: 0;
    left: 0;
}
.scroll{
    margin-top:60px; 
}


</style>

<style lang="scss">
.ly-bar{
    .ly-tab-list{
        height: 60px;
       padding: 0 30px;
    }
    .ly-tab-item-label{
        padding: 0 16px;
        font-size:26px;
    }
    .ly-tabbar {
        border-bottom: none; 
        -webkit-box-shadow: none; 
        box-shadow: none; 
    }
    .ly-tab-item:not(:first-child) {
     margin-left: 20px;
    }
    
}
   
  

</style>




