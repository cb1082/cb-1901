<template>
    <div class="page subpage login">
        <app-header class="border-bottom" title="登录"></app-header>
        <div class="content">
            <img src="/images/logo2.png" alt="">
            <p>
                <label for="">用户名&nbsp;:<input type="text" v-model="username" ></label> 
            </p>
            <p>
               <label for="">密&nbsp;&nbsp;&nbsp;码&nbsp;:<input type="text" v-model="pwd" ></label> 
            </p>
            <div class="btn"> 
                <div  class="border" @click="loginAction">登录</div>
                <div  class="border" @click="regAction">注册</div>
            </div>
        </div>
        

        
          
    </div>
</template>

<script>
 import  center from '../../tools/center'
export default {
    props:["path"],
    data() {
        return {
            username:"",
            pwd:"",
        }
    },
    methods: {
      regAction(){
          this.$emit('change');

      },
      loginAction(){
          if(this.username && this.pwd){
              this.$store.dispatch("getuserdata",{username:this.username,pwd:this.pwd}).then(result=>{
                  if(result==0){
                      this.$router.push(this.path);
                      center.$emit("toggle-login");
                  }
              })
            
          }else{
              this.$toast({
                    duration:1000,
                    message:"输入不能为空"
                });
          }

          
      }
    },
    created() {
        console.log(this.path);
    },

}
</script>

<style scoped>
    .content{
        position: absolute;
        top: 44px;
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    img{
       display: block;
       width: 200px;
        margin: 0 auto;
        transform: translateY(-100%);
   }
   p{
       font-size: 0.06rem;
       text-align: center;
       margin-top: 10px;
   }
   p input{
       height: 20px;
       width: 200px;
       
   }
    .btn{
        font-size: 0.15rem;
        display: flex;
        margin: 0 auto;
        width: 250px;
        margin-top: 20px;
    }
   .btn div{
       flex: 1;
       text-align: center;
       background: #ffffff;
       height: 40px;
       line-height: 40px;
       margin: 0 20px;
       border-radius:10px; 
   }

</style>
<style>
.van-toast.van-toast--text.van-toast--middle{
    z-index: 5000 !important;
}
</style>
