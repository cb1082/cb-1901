<template>
    <div class="page subpage">
        <transition-group enter-active-class="flipInY">
            <login key="1" v-show="isShow=='login'" @change="show('reg')" :path='path'></login>
            <reg key="2" v-show="isShow=='reg'" @change="show('login')"></reg>
        </transition-group>
    </div>
</template>

<script>
import login from "@components/login/login-panel"
import reg from "@components/login/regiester-panel"
export default {
    props:['path'],
    components:{
        login,
        reg
    },
    data() {
        return {
            isShow:'login'
        }
    },
    methods: {
        show(str){
            this.isShow=str;
        }
    },

}
</script>

<style>

</style>
