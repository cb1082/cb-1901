<template>
    <div class="scroll" ref="wrap">
        <div class="item">
           <slot/>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
    name:'Scroller',
    mounted() {
        let scroll= new BScroll(this.$refs.wrap,{
            click:true,
            tap:true,
        })
        this.scroll=scroll;
        scroll.on("beforeScrollStart",()=>{
                scroll.refresh();
        })
    },
    methods: {
        scrollTo(y,time){
            this.scroll.scrollTo(y,time);
        }
    },
}
</script>

<style lang="scss" scoped>
.item{
    overflow: hidden;
}


</style>

