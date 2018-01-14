<template>
  <div id="myPrize">
    <topBar Title="我的奖品" noBack="" class="prize-demo"></topBar>
    <div class="contentBorder">
      <div class="content" v-for="(item,index) in prizeList">
        <div class="imgBorder">
          <img :src="'/img'+item.g_img" />
        </div>
        <p><span>名称:</span>{{item.g_name}}</p>
        <p class="textSize"><span>抓取时间:</span>{{item.w_date|catchTime}}</p>
        <p class="textSize"><span>发货状态:</span>{{item.w_status|faHuoState}}</p>
        <!--w_status 发货状态   0未发货，1已发货-->
      </div>

    </div>
  </div>
</template>

<script>
  import topBar from '../common/topBar.vue'
  export default {
    name: 'prize',
    data: function () {
      return {
        imgPath:require("../../assets/img/personal/logo.png"),
        priseName: "布娃娃",
        catchTime: "2107-12-12",
        faHuoState: "是",
        userId:'',
        prizeList:''
      }
    },
    components: {
      topBar:topBar
    },
    created: function () {
      this.userId=sessionStorage.getItem('userId')
      this.myPrizeList()
    },
    methods: {
      myPrizeList: function () {
        let that=this;
        this.$axios.get('http://172.16.10.22:8888/api/user/winnerPrize.do?userId='+this.userId)
          .then(function (resp){
            that.prizeList = resp.data.data;
          })
          .catch(function (err) {
            console.log(err);
          })
      }
    },
    filters: {
      catchTime: function(value){
        var date = new Date(value);
        return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
      },
      faHuoState: function(value){
        if(!value){
          return '未发货'
        }else{
          return '已发货'
        }
      }
    }

}
</script>

<style scoped>
  @import "../../assets/css/personal/myPrize.css";
</style>
