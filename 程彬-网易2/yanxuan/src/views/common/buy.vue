<template>
    <div class="page subpage">购买{{id}}</div>
</template>

<script>
import center from "../../tools/center";
export default {
    props:['id'],
    beforeRouteEnter (to, from, next) {
        let userToken=localStorage.getItem('userToken');
        console.log(userToken);
        if(userToken){
            next();
        }else{
            center.$emit("toggle-login",to.path);
            next(false);
        }
    }
}
</script>

<style>

</style>
