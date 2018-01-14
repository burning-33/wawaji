<template>
  <div id="goods">
    <!-- 导航-->
    <div>
      <topBar Title="商品分类" noBack="1"></topBar>
    </div>
    <div id="goodsClass">
      <router-link to="/GoodsList/1" tag="div">
        <div><img src="../../assets/img/小黄人.png" class="goodsIcon" alt=""/></div>
        <p>动漫公仔</p>
      </router-link>
      <router-link to="/GoodsList/2" tag="div">
        <div><img src="../../assets/img/熊心.png"class="goodsIcon"  alt=""/></div>
        <p>毛绒熊</p>
      </router-link>
      <router-link to="/GoodsList/3" tag="div">
        <div><img src="../../assets/img/哈士奇.png" alt=""/></div>
        <p>宠物狗</p>
      </router-link>
      <router-link to="/GoodsList/4" tag="div">
        <div><img src="../../assets/img/鲸鱼.png" alt=""/></div>
        <p>海洋生物</p>
      </router-link>
      <router-link to="/GoodsList/5" tag="div">
        <div><img src="../../assets/img/变色龙.png" alt=""/></div>
        <p>恐龙</p>
      </router-link>
      <router-link to="/GoodsList/6" tag="div">
        <div><img src="../../assets/img/白兔.png" alt=""/></div>
        <p>小兔子</p>
      </router-link>
    </div>
    <router-link to="/GoodsList/ " tag="div" class="allGoods">
      <img src="../../assets/img/其他.png" alt=""/>
      <p>所有商品</p>
    </router-link>
    <!-- 底部导航-->
    <div>
      <bottomBar></bottomBar>
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

          }
        },
      components:{
        topBar,
        bottomBar
      }
    }

</script>

<style scoped>
  @import "../../assets/css/Store/goodsClass.css";
</style>
