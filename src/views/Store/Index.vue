<template>
    <div id="index">
      <!-- 导航-->
      <div>
        <topBar Title="首页" noBack="1"></topBar>
      </div>
      <!-- 轮播-->
      <div class="relpay">
        <Lunbo></Lunbo>
      </div>
      <!-- 抓取流程-->
      <div class="procedure">
        <div>
          <router-link to="/GameIndex">
            <p class="iconfont icon-wawaji iconPro"> </p>
            <p>在线抓</p>
          </router-link>
        </div>
        <div>
          <p class="iconfont icon-changjiantou iconPro"></p>
        </div>
        <div >
          <p class="iconfont icon-peisong iconPro"> </p>
          <p>配送</p>
        </div>
        <div>
          <p class="iconfont icon-changjiantou iconPro"></p>
        </div>
        <div >
          <p class="iconfont icon-daiqianshou iconPro"> </p>
          <p>验货签收</p>
        </div>
      </div>
      <!-- 新品上市-->
      <div class="news">
        <div v-for="(item,index) in newGoods" :key="index">
          <newGoods :newObj="item"></newGoods>
        </div>
      </div>
      <!-- 底部导航-->
      <div>
        <bottomBar></bottomBar>
      </div>
    </div>
</template>

<script type="es6">
    import Lunbo from '../../components/Store/LunBo'
    import newGoods from '../../components/Store/NewGoods'
    import topBar from '../../components/common/topBar'
    import bottomBar from '../../components/common/bottomBar'
    export default{
        name: 'index',
        data: function(){
          return {
            newGoods:[
              {newClass:'iconfont icon-xinpin3',newTitle:'新品上市',newSrc1:'',newSrc2:''},
              {newClass:'iconfont icon-danpinbaokuan',newTitle:'绝版公仔',newSrc1:'',newSrc2:''}
            ]
          }
        },
        components:{
          Lunbo,
          newGoods,
          topBar,
          bottomBar
        },
        methods:{
          newgoods(){
            this.$axios.get('http://172.16.10.22:8888/api/store/newGoods.do').then((res)=>{
              this.newGoods[0].newSrc1 = res.data.data[0];
              this.newGoods[0].newSrc2 = res.data.data[1];
            }).catch((err)=> {
              console.log(err)
            })
          },
          special(){
            this.$axios.get('http://172.16.10.22:8888/api/store/specialGoods.do').then((res)=>{
              console.log(res.data);
              this.newGoods[1].newSrc1 = res.data.data[0];
              this.newGoods[1].newSrc2 = res.data.data[1];
            }).catch((err)=> {
              console.log(err)
            })
          }
        },
      created(){
        this.newgoods();
        this.special();
      }
    }
</script>

<style scoped>
  @import "../../assets/css/Store/index.css";
</style>
