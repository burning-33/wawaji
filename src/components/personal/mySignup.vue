<template>
  <div id="myLogin">
    <div class="login-input">
      <p class="login-position">
        <span class="iconfont icon-xingmingyonghumingnicheng"></span>
        <mu-text-field hintTextClass="demo-hintText"  hintText="用户名" v-model="r_userName"/>
      </p>

      <p class="login-position">
        <span class="iconfont icon-mima"></span>
        <mu-text-field type="password" hintTextClass="demo-hintText" hintText="输入密码" v-model="r_pwd"/>
      </p>

      <p class="login-position">
        <span class="iconfont icon-mima"></span>
        <mu-text-field type="password" hintTextClass="demo-hintText" hintText="确认密码" :errorText="pwdErr" v-model="confirm_pwd"/>
      </p>

      <mu-flat-button labelClass="demo-login" label="注册" @click="userRegister"/>
      <router-link tag="span" to="/myLogin">
        <mu-flat-button labelClass="demo-login" label="登录" class="demo-flat-button"/>
      </router-link>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'myLogin',
    data: function () {
      return {
        r_userName:'',
        r_pwd:'',
        confirm_pwd:'',
        type:1,
        pwdErr:''
      }
    },
    created: function () {

    },
    methods: {
      userRegister: function () {
        let that=this;
        if(this.r_pwd!=this.confirm_pwd){
          this.pwdErr='两次密码不一致'
        }else{
          this.$axios.post('http://172.16.10.22:8888/api/user/register.do',
            'userName='+this.r_userName+'&pwd='+this.r_pwd)
            .then(function (resp) {
              console.log(resp);
              if(resp.data.code==200){
                that.$router.push('/personIndex')
              }
            }).catch(function (err) {
              console.log(err);
            })
        }

      }
    }

  }
</script>

<style scoped>
  @import "../../assets/css/personal/mylogin.css";
</style>
