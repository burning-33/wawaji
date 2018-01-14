<template>
    <div id="myMoney">
      <topBar Title="充值中心"></topBar>
      <p class="subCoins">剩余金币：{{this.chargeCoins}}</p>
      <p class="chargeCoins">充值金额</p>
      <div class="recharge">
        <div class="rechargeCoin" v-for="(item,index) in moneyData" :class="{myStyle:changeIndex==index}" @click="changeStyle(index)">
          <p>{{item.money}}</p>
          <p>售价：{{item.coins}}</p>
        </div>
      </div>

      <p class="payment">支付方式</p>
      <div class="payWay">
        <p class="pay-content" v-for="(item,index) in payData" :class="{borderStyle:borderIndex==index}" @click="changeBorder(index)">{{item}}</p>
      </div>

      <mu-flat-button label="立即支付" class="demo-flat-button"  @click="open"/>

      <mu-dialog dialogClass="demo-mu-dialog" :open="dialog" title="" >
        支付成功
        <mu-flat-button label="确定"  @click="close"/>
      </mu-dialog>
    </div>
</template>

<script>
  import topBar from '../common/topBar.vue'
    export default {
      name: 'myMoney',
      components: {
        topBar:topBar
      },
      data: function () {
       return {
         coins:0,
         moneyData: [
            {
            money:'10元',
            coins:'100金币'
            },
            {
              money:'20元',
              coins:'220金币'
            },
            {
              money:'30元',
              coins:'350金币'
            }, {
              money:'50元',
              coins:'600金币'
            }, {
              money:'100元',
              coins:'1500金币'
            }, {
              money:'20元',
              coins:'3500金币'
            }
          ],
         changeIndex:0,
         borderIndex:0,
         payData:['微信支付','支付宝'],
         dialog: false,
         chargeCoins:0,
         userId:''
       }
      },
      created: function () {
        this.chargeCoins=sessionStorage.getItem('u_money')
        console.log(this.chargeCoins);
        this.userId=sessionStorage.getItem('userId')
        this.coins=100;
      },
      methods: {
        changeStyle: function (index) {
          this.changeIndex = index;
          this.coins=this.moneyData[index].coins
        },
        changeBorder: function (index) {
          this.borderIndex = index
        },
        open: function () {
          let myCoins=parseInt(this.coins);
          let subCoins=parseInt(this.chargeCoins)
          let totalCoins=myCoins+subCoins;
          let that=this;
          this.$axios.get
          ('http://172.16.10.22:8888/api/user/pay.do?userId='+this.userId+'&money='+totalCoins)
            .then(function (resp) {
              console.log(resp);
              if(resp.data.code==200){
                that.dialog=true;
                that.chargeCoins=totalCoins
              }
            })
            .catch(function (err) {
              console.log(err);
            })

        },
        close: function () {
          this.dialog = false;
          this.$router.push('/personIndex')
        }
      }

    }
</script>

<style scoped>
@import "../../assets/css/personal/myMoney.css";
</style>
