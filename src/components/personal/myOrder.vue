<template>
    <div id="myOrder">
      <topBar Title="我的订单"></topBar>
      <p class="orderList">我的订单</p>
      <div class="order-content" v-for="(item,index) in p_orderList">
        <mu-checkbox name="group" nativeValue="checkbox1" class="demo-checkbox" @click="getPrice(index)"/>
        <img :src="'/img'+item.goods.g_img" alt=""/>
        <!--商品名称-->
        <!--<p class="order-gname">{{goodsName}}</p>-->
        <!-- 价格-->
        <!--<p class="order-gprice">￥{{goodsPrice}}</p>-->
        <!-- 商品信息-->
        <div class="order-contet" v-if="item.goods.length!=1" v-for="goods in item.goods" >
          <img :src="'/img'+goods.g_img" alt=""/>
        </div>
        <div class="order-contet" v-else>
          <img :src="'/img'+item.goods[0].g_img" alt=""/>
          <!--商品名称-->
          <p class="order-gname">{{goods.g_name}}</p>
          <!-- 价格-->
          <p class="order-gprice">￥{{goods.g_price}}</p>
          <!-- 商品信息-->
        </div>
        <!--订单状态：-->
        <P class="order-orderState">{{orderState}}</P>
        <!--支付状态：-->
        <P class="order-payState">{{payState}}</P>
      </div>

      <div class="order-footer">
        <mu-checkbox label="全选" class="demo-checkbox1" labelRight/><br/>
        <p class="demo-checkbox1">合计：￥{{totalMoney}}</p>
        <mu-raised-button label="去结算" class="order-raised-button" primary @click="getPrice"/>
      </div>
    </div>
</template>

<script>
  import topBar from '../common/topBar.vue'
    export default {
      name: 'myOrder',
      components: {
        topBar:topBar
      },
      data: function () {
        return {
          imgPath:require('../../assets/img/personal/logo.png'),
          goodsName:'娃娃机',
          goodsPrice:0,
          orderState:'待发货',
          payState:'已支付',
          totalMoney:23,
          p_orderList:''
        }
      },
      created: function () {
        this.getOrderList()
      },
      methods:  {
        getOrderList: function () {
          let userId=sessionStorage.getItem('userId');
          let that=this;
          this.$axios.get('http://172.16.10.22:8888/api/user/orderList.do?userId='+userId)
            .then(function (resp) {
              console.log(resp);
              that.p_orderList=resp.data.data
            }).catch(function (err) {
              console.log(err);
            })

        },
        getPrice:function(){
          console.log(this.goodsPrice);
        }
      }
    }
</script>

<style scoped>
@import "../../assets/css/personal/myOrder.css";
</style>
