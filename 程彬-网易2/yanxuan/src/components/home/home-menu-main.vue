<template>
    <div class="content home-main">
        <Scroller ref="scroll" class="scroll">
            <div class="bannerImg">
                <img :src="bannerimg" alt="">
            </div>
            <div v-for="item in itemlist" :key="item.info.name" class="wrap">
                <div class="title">
                    <h3>{{item.info.name}}</h3>
                    <p>{{item.info.frontName}}</p>
                </div>
                
                <item :data="item.itemList"></item>
            </div>
        </Scroller>
        
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    props:['id','name'],
    created() {
        this.$store.dispatch("home/getitemlist",this.id);
    },
    computed: {
        ...mapState({
            itemlist:state=>state.home.itemlist,
            bannerimg:state=>state.home.bannerimg

        })
    },
    watch: {
        id(newval){
            newval && this.$store.dispatch("home/getitemlist",newval); 
           
            this.$refs.scroll.scrollTo(0,0);
        }
    },

}
</script>

<style lang="scss" scoped>
.bannerImg{
    img{
        width: 100%;
    }
}
.wrap{
    overflow: hidden;
    border-top:20px solid #eee; 

}
.title{
    height: 120px;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h3{
        font-size: 32px;
        color: #333;
        line-height: 32px;
    }
    p{
        margin-top: 16px;
        line-height: 24px;
        font-size: 24px;
        color: #999;
    }
}
.scroll{
    overflow: hidden;
    position: absolute;
    top: 0px;
    width: 100%;
    bottom: 0;
    left: 0;
}

</style>



