<template>
<div class="content ">
    <Scroller class="scroll" ref="scroll">
            <waterfall :line-gap="windowW/2" :watch="TabShowData" >
                <waterfall-slot
                    v-for="(item, index) in TabShowData"
                    :width="windowW/2"
                    :height="windowW/2*item.height/item.width+78"
                    :order="index"
                    :key="item.topicId"
                >
                    <WallImg :item="item"></WallImg>
                </waterfall-slot>
            </waterfall>
        </Scroller>
</div>
    
</template>

<script>
import {mapState} from "vuex";
import WallImg from './img';
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'

export default {
    data() {
        return {
            y:0
        }
    },
    components:{
        WallImg,
        Waterfall,
        WaterfallSlot
    }, 
    computed: {
        ...mapState({
            TabShowData:state=>state.discover.TabShowData,
            page:state=>state.discover.page
        }),
        windowW(){
            return  document.documentElement.offsetWidth;
        }
    },
   created() {
       
       this.$store.dispatch("discover/getTabShowData",{
           page:this.page,
           size:20,
           type:1,
       });
   },
   mounted() {
       this.$refs.scroll.scroll.on('scroll', (params)=>{
            console.log(this.y,params.y)
            if(params.y!=this.y){
                this.addItems();
            } 
            
            this.y=params.y;
        })
        
   },
   methods: {
     addItems(){
        this.$store.dispatch("discover/getTabShowData",{
           page:this.page,
           size:20,
           type:1,
       }); 
    
       console.log(this.page);
     },
                
   },

}
</script>

<style lang="scss" scoped>
.content{
    position: absolute;
    top: 44px;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
}
.scroll{
    position: absolute;
    bottom: 0;
    top: 46px;
    left: 0;
    width: 100%;
    overflow: hidden;
}
</style>