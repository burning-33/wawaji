<template>
  <div id="personalIndex">


    <router-link tag="div" to="/editInfo" class="edit iconfont icon-bianji">
     <span>编辑</span>
    </router-link>

    <img :src="'/img/'+headImg" alt="" class="headImg"/>

    <p class="nickName">昵称：{{nickName}}</p>
    <p class="nickName">电话：{{tel}}</p>

    <div class="disborder">
      <div class="info">
        <router-link tag="div" to="/myPrize">
          <p class="iconfont icon-jiangpin icon"></p>
          <p>我的奖品</p>
        </router-link>
      </div>
      <div class="info">
        <router-link tag="div" to="/myAddress">
          <p class="iconfont icon-shouhuodizhi icon"></p>
          <p>收货地址</p>
        </router-link>
      </div>
      <div class="info">
        <router-link tag="div" to="/myOrder">
          <p class="iconfont icon-dingdan icon"></p>
          <p>我的订单</p>
        </router-link>
      </div>
      <div class="info">
        <router-link tag="div" to="/myLogin">
          <p class="iconfont icon-shiliangzhinengduixiang icon"></p>
          <p> 登录</p>
        </router-link>
      </div>
      <div class="info">
        <router-link tag="div" to="/mySign">
          <p class="iconfont icon-zhuce icon"></p>
          <p> 注册</p>
        </router-link>
      </div>
      <div class="info">
        <router-link tag="div" to="/myMoney">
          <p class="iconfont icon-chongzhi icon"></p>
          <p> 充值</p>
        </router-link>
      </div>
    </div>
    <BottomBar></BottomBar>
  </div>
</template>

<script>
  import BottomBar from '../components/common/bottomBar.vue'
  export default {
    name: 'perIndex',
    data: function () {
      return {
        nickName: "",
        tel:'',
        headImg:''
      }
    },
    components:{
      BottomBar:BottomBar
    },
    created: function () {
      this.nickName=sessionStorage.getItem('nickName');
      this.tel=sessionStorage.getItem('tel');
      this.headImg=sessionStorage.getItem('headImg');
      if(!sessionStorage.getItem('userId')){
        this.$router.push('/myLogin')
      }
    },
    methods: {

    }

  }
</script>

<style scoped>
  @import "../assets/css/personal/personalIndex.css";
</style>
