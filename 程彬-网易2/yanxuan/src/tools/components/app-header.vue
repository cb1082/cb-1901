<template>
    <div class="app-header">
        <van-icon name="arrow-left" @click="backAction"/>
        <h2>{{title}}</h2>
    </div>
</template>

<script>
export default {
    name:'app-header',
    props:['title'],
    methods: {
        backAction(){
            if(this.title=="登录"){
                    this.$center.$emit("toggle-login");
            }else{
                this.$router.back();
            }
            
        }
    },

}
</script>

<style lang="scss" scoped>
.app-header{
    height: 44px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: #ffffff;
    h2{
        height: 100%;
        width: 100%;
        line-height: 44px;
        font-size: 16px;
        text-align: center;
        vertical-align: middle;

    }
    .van-icon {
        position: absolute;
        left: 10px;
        font-size: 16px;
        line-height:44px;
        color: #333333;
    }
}

</style>
