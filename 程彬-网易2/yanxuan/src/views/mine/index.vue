<template>
    <div class="page">
        
    </div>
</template>

<script>
import center from '../../tools/center'
export default {
    beforeRouteEnter (to, from, next) {
        let userToken = localStorage.getItem("userToken");

        if(userToken){
            next()

        }else{
            center.$emit("toggle-login",to.path);
            next(false)
        }



    }
}
</script>

<style>

</style>
