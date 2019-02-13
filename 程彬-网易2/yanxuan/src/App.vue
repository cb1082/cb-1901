<template>
    <div id="app">
       <tab-bar></tab-bar>
       <keep-alive>
             <router-view></router-view>
       </keep-alive>
       <router-view name="goodslist"></router-view>
       <login v-if="isShow" :path='successPath'></login>
    </div>
</template>
<script>
import login from "@views/common/login";
export default {
    components:{
        login,
    },
    data() {
        return {
            isShow:false,
            successPath:''
        }
    },
    created() {
        this.$center.$on("toggle-login",(path)=>{
            this.isShow=!this.isShow;
            this.successPath=path;
        })
    },
}
</script>
<style lang="scss">
.box{
    width: 192px;
    height: 192px;
    background: #aaaaaa;
}

</style>
