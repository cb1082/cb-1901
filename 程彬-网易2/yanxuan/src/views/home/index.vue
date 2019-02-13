<template>
<div>
    <div class="page">
        <home-header></home-header>
        <home-menu></home-menu>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
        <router-view name="cg-list"></router-view>
    </transition>
    
</div>
    
</template>

<script>
import header from "@components/home/home-header.vue";
import menu  from "@components/home/home-menu.vue";
export default {
    components:{
        [header.name]:header,
        [menu.name]:menu
    },

}
</script>

<style lang="scss" scoped>
    .home-header{
        position: absolute;
        top: 0;
        left: 0;
        height: 44px;
        width: 100%;
       
    }
  
  .content{
    position: absolute;
    top: 44px;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
}
.home-main{
    margin-top:60px; 
}  

</style>


