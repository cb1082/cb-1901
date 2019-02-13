<template>
<div class="content con">
    <Scroller ref="scroll"  class="scroll">
        <component v-for="item in tabs" :key="item.topicId"  :is="comname(item.style)" :item="item"></component>
    </Scroller>
</div>
    
</template>

<script>
import {mapState} from "vuex";
import page1 from "../../tools/components/page1"
import page2 from "../../tools/components/page2"
import page3 from "../../tools/components/page3"
import page4 from "../../tools/components/page4"
export default {
    props:['id'],
    components:{
        page1,
        page2,
        page3,
        page4
    },
    computed: {
        ...mapState({
            tabs:state=>state.discover.tabs,
        })
        
    },
    created() {
        this.$store.dispatch("discover/gettabs",{tabId:this.id})
    },
    methods: {
        comname(style){
            switch (style) {
                case 0: return 'page1';
                case 1: return 'page2';
                case 2: return 'page3';
                case 3:return 'page4';                    
                default:return;
            }
        }
    },
    watch: {
        id(newval){
           this.$store.dispatch("discover/gettabs",{tabId:newval}) 
           this.$refs.scroll.scrollTo(0,0);
        }
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
    background: #eeeeee;
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

