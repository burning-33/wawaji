<template>
    <div id="goodsList">
      <!-- 顶部导航-->
      <div>
        <topBar Title="商品列表"></topBar>
      </div>
      <div class="goods">
        <div  v-for="(item,index) in goodsObj" :key="index">
          <GoodsContent :goodsObj="item"></GoodsContent>
        </div>
      </div>
      <!-- 底部导航-->
      <div>
        <bottomBar></bottomBar>
      </div>
    </div>
</template>

<script type="es6">
  import GoodsContent from '../../components/Store/GoodsContent'
  import topBar from '../../components/common/topBar'
  import bottomBar from '../../components/common/bottomBar'
    export default{
        name: '',
        data: function(){
          return {
            goods:[
              {g_img:require('../../assets/img/公仔 (7).jpg'),g_name:'呆萌小兔子',g_spec:'35*30*40',g_price:22},
              {g_img:require('../../assets/img/公仔 (8).jpg'),g_name:'呆萌小兔子',g_spec:'35*30*40',g_price:22},
              {g_img:require('../../assets/img/公仔 (9).jpg'),g_name:'呆萌小兔子',g_spec:'35*30*40',g_price:22},
              {g_img:require('../../assets/img/公仔 (10).jpg'),g_name:'呆萌小兔子',g_spec:'35*30*40',g_price:22},
              {g_img:require('../../assets/img/公仔 (11).jpg'),g_name:'呆萌小兔子',g_spec:'35*30*40',g_price:22},
              {g_img:require('../../assets/img/公仔 (12).jpg'),g_name:'呆萌小兔子',g_spec:'35*30*40',g_price:22},
            ],
            goodsObj:[]
          }
        },
      components:{
        GoodsContent,
        topBar,
        bottomBar
      },
      methods:{
        goodsList(){
          let g_type = this.$route.params.g_type;
          console.log("商城列表类型",g_type);
          if(g_type == '新品上市'){
            this.$axios.get('http://172.16.10.22:8888/api/store/newGoods.do').then((res)=>{
              console.log(res.data);
              this.goodsObj = res.data.data
            }).catch((err)=>{
              console.log(err)
            })
          }else if(g_type == '绝版公仔'){
            this.$axios.get('http://172.16.10.22:8888/api/store/specialGoods.do').then((res)=>{
              console.log(res.data);
              this.goodsObj = res.data.data
            }).catch((err)=>{
              console.log(err)
            })
          }else{
            this.$axios.get('http://172.16.10.22:8888/api/store/goodsList.do?type='+g_type).then((res)=>{
              console.log(res.data);
              this.goodsObj = res.data.data
            }).catch((err)=>{
              console.log(err)
            })
          }

        }
      },
      created(){
        this.goodsList();
      }
    }

</script>

<style scoped>
@import "../../assets/css/Store/goodsList.css";
</style>
