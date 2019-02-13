<template>
    <div class="page subpage" id="catelist">
        <app-header :title="name"></app-header>
        <homemenumain :id="id" :name="name"></homemenumain>
    </div>
</template>

<script>
import homemenumain from '@components/home/home-menu-main';
export default {
    props:['id','name'],
    components:{
        homemenumain,
    },
    created() {
        
    },
    beforeDestroy() {
        this.$store.dispatch('home/removedata');
    },
}
</script>

<style lang="scss" >
  .content{
    position: absolute;
    top: 44px;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
}
</style>

