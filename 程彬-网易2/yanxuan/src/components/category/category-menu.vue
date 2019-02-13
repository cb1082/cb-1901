<template>
    <div class="menu">
        <li v-for="(item,index) in categorymenu" :key="item.id" class="item" @click="selectAction(index)">
            <span :class="{active:selectindex==index}">{{item.name}}</span>
        </li>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    data() {
        return {
            selectindex:0,
        }
    },
    computed: {
        ...mapState({
            categorymenu:state=>state.category.categorymenu
        })
    },
    created() {
        this.$store.dispatch('category/getcategorymenu');
    },
    methods: {
        selectAction(index){
            this.selectindex=index;
            let data = this.categorymenu.find((item,index)=>{
                return this.selectindex==index;
            })
            this.$store.commit("category/setselectmenuId",data.id);
        }
    },

}
</script>

<style lang="scss" scoped>
.item{
    height: 50px;
    margin-top: 40px;
    span{
        line-height: 50px;
        color: #333;
        font-size: 28px;
        text-align: center;
        display: block;
        border-left: 8px solid transparent;
    }
}
span.active{
     border-left: 8px solid #ab2b2b;
     color: #ab2b2b;
}


</style>

