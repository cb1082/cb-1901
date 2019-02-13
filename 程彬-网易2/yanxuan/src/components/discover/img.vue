<template>
    <div class="boximg">
        <img :src="item.picUrl" alt="">
        <div class="text">
            <p >{{item.content}}</p>
            <p>{{item.nickName}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:['item'],
}
</script>

<style scoped>
img{
    display: block;
    width: 100%;
}


</style>
