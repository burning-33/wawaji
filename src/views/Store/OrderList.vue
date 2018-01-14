<template>
    <div id="orderList">
      <!-- 导航-->
      <div>
        <topBar Title="确认订单"></topBar>
      </div>
      <!-- 新增收货地址-->
      <div class="newAddress" v-if="addShow">
        <p class="iconfont icon-jia plus"></p>
        <p>点击选择收货地址</p>
      </div>
      <!-- 显示收货地址-->
      <div class="showAdd" v-if="!addShow">
        <div class="add">
          <div class="addBox">
            <div class="addName">
              <p>收件人:{{addObj[0].a_name}}</p>
              <p>{{addObj[0].a_tel}}</p>
              <div>
                <p>收件地址:{{addObj[0].a_province}}{{addObj[0].a_city}}{{addObj[0].a_district}}{{addObj[0].a_detailAddress}}</p>
              </div>
            </div>

            <p class="iconfont icon-jiantou-copy-copy angleRight"></p>
          </div>
        </div>
      </div>
      <!-- 订单商品-->
      <div class="orderGoods">
        <div class="goodsName orderInfo">
          <span class="iconfont icon-shangpinxinxi goodsName"></span>
          <span>商品信息</span>
        </div>

        <div class="borderTB " v-for="(item,index) in orderObj" :key="index">
          <OrderItem :orderObj="item"></OrderItem>
        </div>
      </div>

      <div class="borderTB yunfei">
        <p class="goodsName">运费</p>
        <p>免运费</p>
      </div>
      <div class="borderTB">
        <input class="inputMessage" type="text" placeholder="给卖家留言（选填）"/>
      </div>
      <div class="borderTB">
        <p class="goodsName">共件商品，总计:￥{{total}}.00</p>

      </div>
      <div class="shopping" @click="openPay">
        <mu-raised-button class="common purchase" label="立即支付"  fullWidth/>
      </div>
      <mu-popup position="bottom" popupClass="checkout" :open="bottomPopup" @close="closePay()">
      <mu-appbar title="支付信息">
        <mu-flat-button slot="right" label="×" @click="closePay()"/>
      </mu-appbar>
      <mu-content-block>
          <div class="payMoney">
            <p>￥<span class="money">{{total}}.00</span></p>
            <p class="gray">需要支付</p>
          </div>
        <div class="borderTB">
            <span style="float: left;">支付方式</span>
            <span style="float: right;">支付宝</span>
        </div>
        <mu-raised-button class="common purchase" label="确认支付" @click="addPay"  fullWidth/>
        </mu-content-block>
        </mu-popup>
    </div>
</template>

<script type="es6">
  import OrderItem from '../../components/Store/OrderItem.vue'
  import topBar from '../../components/common/topBar'
  import bottomBar from '../../components/common/bottomBar'
    export default{
        name: '',
        data: function(){
          return {
            bottomPopup: false,
            addObj:[
              {a_name:'黄小',
                a_tel:'13928845677',
                a_province:'',
                a_city:'广州市',
                a_district:'海珠区',
                a_detailAddress:'丽影广场B区4栋'}
            ],
            orderObj:[
              {g_img:require('../../assets/img/公仔 (7).jpg'),
                g_name:'呆萌小兔子',
                g_spec:'35*30*40',
                g_price:22,
                o_courierNum:3},
              {g_img:require('../../assets/img/公仔 (7).jpg'),
                g_name:'呆萌小兔子',
                g_spec:'35*30*40',
                g_price:22,
                o_courierNum:2}
            ],
            userId:1,
            totalPrice:0,
            addShow:true,
            goodsId:'',
            num:'',
            addressId:0
          }
        },
        components:{
          OrderItem,
          topBar,
          bottomBar
        },
      computed:{
        total(){
          for(let i = 0;i<this.orderObj.length;i++){
            this.totalPrice+=this.orderObj[i].c_num * this.orderObj[i].g_price;
          }
          return this.totalPrice;
        }
      },
        methods:{
            openPay(){
              this.bottomPopup=true;
            },
            closePay(){
              this.bottomPopup=false;
            },
            addPay(){
              this.addressId = 1;
              this.$axios.post('http://172.16.10.22:8888/api/store/orderAdd.do',`addressId=${this.addressId}&goods=${this.goodsId}&num=${this.num}&userId=${this.userId}`).then((res)=>{
                this.closePay();
                this.$router.push('/');
              }).catch((err)=>{
                console.log(err)
              })
            },
          getOrderList(goodsId,num,isCart){
            this.orderObj=[];
            if(!isCart){
              this.$axios.get('http://172.16.10.22:8888/api/store/goodsList.do?id='+goodsId[0]).then((res)=>{
                //console.log(res.data.data);
                res.data.data[0].c_num=num[0];
                this.orderObj.push(res.data.data[0]);
                //console.log(this.orderObj);
              }).catch((err)=> {
                console.log(err)
              })
            }else{
              this.$axios.get('http://172.16.10.22:8888/api/store/cartList.do?userId='+this.userId).then((res)=>{
                this.orderObj= res.data.data;
              }).catch((err)=> {
                console.log(err)
              })
            }

            //}
          }
        },
      created(){
        //this.userId=sessionStorage.getItem('userId')
        this.goodsId = this.$route.params.goodsId;
        this.num = this.$route.params.num;
        let isCart = this.$route.params.cart;
        console.log("222222",this.goodsId);
        console.log("111111111",this.num);
        this.getOrderList(this.goodsId, this.num,isCart)
      }
    }

</script>

<style scoped>
@import "../../assets/css/Store/orderlist.css";
</style>
