<template>
    <div class="goodsDetails">
      <!-- 导航-->
      <div>
        <topBar Title="商品详情"></topBar>
      </div>
      <!-- 产品详情图片-->
      <div class="goodsImg">
        <img :src="'/img/'+details.g_img" alt=""/>
        <div class="goodsText">
          <p>{{details.g_name}}</p>
          <p>￥{{details.g_price}}</p>
        </div>
        <div class="cart">
          <p class="iconfont icon-cart" @click="addCart"></p>
        </div>
      </div>
      <div class="goodsContent">
        <div class="size">
          <p class="detailTitle">选择规格</p>
          <button class="btnSize">{{details.g_spec}}cm</button>
        </div>
        <div class="size">
          <p class="detailTitle count">购买数量</p>
          <div class="add">
            <mu-icon-button class="btnCount" @click="minus">
              <i class="iconfont  icon-minus" ></i>
            </mu-icon-button>
            <input v-model="count" type="number" class="inputCount" min="1" max="100" @blur="countChange"/>
            <mu-icon-button @click="plus">
              <i class="iconfont icon-jia "></i>
            </mu-icon-button>
          </div>
        </div>
        <div class="size">
          <p class="detailTitle">商品介绍</p>
          <p>{{details.g_desc}}</p>
        </div>
      </div>
      <div @click="checkOrder">
        <mu-raised-button class="purchase" label="立即购买"  fullWidth/>
      </div>

    </div>
</template>

<script type="es6">
  import topBar from '../../components/common/topBar'
  import bottomBar from '../../components/common/bottomBar'
    export default{
        name: '',
        data: function(){
          return {
            details:[],
            count:1,
            userId:1
          }
        },
      components:{
        topBar,
        bottomBar
      },
      methods:{
        goodsDetail(){
          let g_id = this.$route.params.g_id;
          this.$axios.get('http://172.16.10.22:8888/api/store/goodsList.do?id='+g_id).then((res)=>{
            console.log(res.data);
            this.details = res.data.data[0]
          }).catch((err)=>{
            console.log(err)
          })
        },
        minus(){
          if(this.count>1){
            this.count--;
          }
          return this.count;
        },
        plus(){
          if(this.count<100){
            this.count++;
          }
          return this.count;
        },
        countChange(){
          if(this.count>100){
            this.count = 100
          }else if(this.count<1){
            this.count = 1
          }
        },
        addCart(){
          let userId = this.userId;
          let goodsId = this.details.g_id;
          let num = this.count;
          this.$axios.get('http://172.16.10.22:8888/api/store/cartAdd.do?userId='+userId+'&goodsId='+goodsId+'&num='+num).then((res)=>{
            console.log(res.data);
          }).catch((err)=>{
            console.log(err)
          })
        },
        checkOrder(){
          let goodsId=[];
          let num=[];
           goodsId.push(this.details.g_id) ;
           num.push(this.count);
          this.$router.push({name: 'OrderList', params: {goodsId: goodsId ,num: num}})
        }
      },
        created(){
          //this.userId=sessionStorage.getItem('userId');
          this.goodsDetail();
          this.addCart();
        }
    }

</script>

<style scoped>
@import "../../assets/css/Store/goodsDetails.css";
</style>
