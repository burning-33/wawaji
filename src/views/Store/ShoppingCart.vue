<template>
    <div id="shoppingCart">
      <!-- 导航-->
      <div>
        <topBar Title="购物车"></topBar>
      </div>
      <div class="cartList" v-for="(item,index) in cartObj" :key="index">
        <CartItem :cartObj="item" @refresh="cartList" ></CartItem>
      </div>
      <div class="total">
        <p>合计</p>
        <p class="goodsName">￥{{total}}</p>
      </div>
      <div class="shopping">
        <router-link to="/GoodsList/ "><mu-raised-button class="common" label="继续购物"  fullWidth/></router-link>
       <mu-raised-button class="common purchase" label="下一步" @click="addOrderList"  fullWidth/>
      </div>
    </div>
</template>

<script type="es6">
  import CartItem from '../../components/Store/CartItem';
  import topBar from '../../components/common/topBar'
  import bottomBar from '../../components/common/bottomBar'
    export default{
        name: '',
        data: function(){
          return {
            cartObj:[],
            userId:1,
            totalPrice:0
          }
        },
        components:{
          CartItem,
          topBar,
          bottomBar
        },
      computed:{
        total(){
          this.totalPrice=0;
          for (let i = 0; i < this.cartObj.length; i++) {
            this.totalPrice += this.cartObj[i].c_num * this.cartObj[i].g_price;
          }
          return this.totalPrice;
        }
      },
      methods: {
        cartList(){
          let userId = this.userId;
          this.$axios.get('http://172.16.10.22:8888/api/store/cartList.do?userId=' + userId).then((res)=> {
            this.cartObj = res.data.data;
            console.log("cartObj1111");
            console.log(res.data.data);
          }).catch((err)=> {
            console.log(err)
          })
        },
        addOrderList(){
          console.log(this.cartObj);
          let goodsId=[];
          let num=[];
          for(let i=0;i<this.cartObj.length;i++){

            goodsId[i]=this.cartObj[i].c_id;
            num[i]=this.cartObj[i].c_num;
          }
          this.$router.push({name: 'OrderList', params: {goodsId: goodsId ,num: num,cart:true}})
        }
      },
      created(){
        //this.userId = sessionStorage.getItem('userId')
        this.cartList();
      }
    }

</script>

<style scoped>
@import "../../assets/css/Store/shoppingCart.css";
</style>
