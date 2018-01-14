<template>
    <div id="myLogin">
      <div class="login-input">
        <p class="login-position">
          <span class="iconfont icon-xingmingyonghumingnicheng"></span>
          <mu-text-field hintTextClass="demo-hintText"  :errorText="userError"  hintText="用户名" v-model="userName" />
        </p>
        <p class="login-position">
          <span class="iconfont icon-mima"></span>
          <mu-text-field type="password" hintTextClass="demo-hintText" :errorText="pwdError" hintText="密码" v-model="pwd"/>
        </p>

        <mu-flat-button labelClass="demo-login" @click="getUserInfo" label="登录" class="demo-flat-button"/>
        <router-link tag="span" to="/mySign">
          <mu-flat-button labelClass="demo-login" label="注册" class="demo-flat-button"/>
        </router-link>

      </div>
    </div>
</template>

<script>
    export default {
      name: 'myLogin',
      data: function () {
        return {
          userName:'',
          pwd:'',
          loginInfo:'',
          pwdError:'',
          userError:''
        }
      },
      created: function () {
//        this.userName=sessionStorage.getItem('userName');
//        this.pwd=sessionStorage.getItem('pwd');
//        this.getUserInfo();
      },
      methods: {
        getUserInfo: function () {
          let that=this;
          that.userError='';
          that.pwdError='';
          this.$axios.get('http://172.16.10.22:8888/api/user/login.do?userName='+this.userName+'&pwd='+this.pwd)
            .then(function (resp) {
                if(resp.data.code==0){
                  that.userError='账号不存在';
                }else if(resp.data.code==2){
                  that.pwdError='密码不正确';
                }else if(resp.data.code==1){
                  sessionStorage.setItem('userId',resp.data.data.u_id);
                  sessionStorage.setItem('userName',resp.data.data.u_name);
                  sessionStorage.setItem('u_money',resp.data.data.u_money);
                  sessionStorage.setItem('nickName',resp.data.data.u_nickName);
                  sessionStorage.setItem('tel',resp.data.data.u_tel);
                  sessionStorage.setItem('headImg',resp.data.data.u_img);
                  that.$router.push('/personIndex')
                }else{
                  alert("程序出错")
                }
//              console.log(resp);
            })
            .catch(function (err) {
              console.log(err);
            })
        }

      }

    }
</script>

<style scoped>
@import "../../assets/css/personal/mylogin.css";
</style>
