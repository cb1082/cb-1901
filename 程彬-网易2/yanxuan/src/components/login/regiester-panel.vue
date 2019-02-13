<template>
    <div class="page subpage reg">
        注册
        <div @click="backAction">11111</div>
    </div>
</template>

<script>
export default {
    methods: {
        backAction(){
            this.$emit("change");
        }
    },

}
</script>

<style>
.reg{
    background: red;
}
</style>
