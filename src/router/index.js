import Vue from 'vue'
import Router from 'vue-router'
import gameIndex from '@/views/games/gameIndex'
import index from '@/views/Store/Index'
import GoodsClass from '@/views/Store/GoodsClass'
import GoodsDetails from '@/views/Store/GoodsDetails'
import GoodsList from '@/views/Store/GoodsList'
import OrderList from '@/views/Store/OrderList'
import ShoppingCart from '@/views/Store/ShoppingCart'
import PersonIndex from '@/views/personalIndex'
import MyPrize   from '@/components/personal/myPrize'
import MyAddress from '@/components/personal/myAddress'
import MyLogin from '@/components/personal/myLogin'
import MyMoney from '@/components/personal/myMoney'
import MyOrder from '@/components/personal/myOrder'
import MySign from '@/components/personal/mySignup'
import UpdateAddress from '@/components/personal/updateAddress'
import AddAddress from '@/components/personal/addAddress'
import EditInfo from '@/components/personal/editInfo'
import GameIndex from '@/views/games/gameIndex.vue'


Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',        //首页
      name: 'index',
      component: index
    },
    {
      path: '/GoodsClass',//商品分类页面
      name: 'GoodsClass',
      component: GoodsClass
    },
    {
      path: '/GoodsDetails/:g_id',//商品详情页
      name: 'GoodsDetails',
      component: GoodsDetails
    },
    {
      path: '/GoodsList/:g_type',//商城列表
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/OrderList',//确认订单
      name: 'OrderList',
      component: OrderList
    },
    {
      path: '/ShoppingCart',//购物车页面
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/gameIndex',
      name: 'gameIndex',
      component: gameIndex
    },
    {
      path: '/personIndex',
      name: 'personIndex',
      component: PersonIndex
    },
    {
      path: '/myPrize',
      name: 'myPrize',
      component: MyPrize
    },
    {
      path: '/myAddress',
      name: 'myAddress',
      component: MyAddress
    },
    {
      path: '/updateAddress/:updateAddressId',
      name: 'updateAddress',
      component: UpdateAddress
    },
    {
      path: '/addAddress',
      name: 'addAddress',
      component: AddAddress
    },
    {
      path: '/myLogin',
      name: 'myLogin',
      component: MyLogin
    },
    {
      path: '/myMoney',
      name: 'myMoney',
      component: MyMoney
    },
    {
      path: '/myOrder',
      name: 'myOrder',
      component: MyOrder
    },
    {
      path: '/mySign',
      name: 'mySign',
      component: MySign
    },
    {
      path: '/editInfo',
      name: 'editInfo',
      component: EditInfo
    },
    {
      path: '/GameIndex',
      name: 'GameIndex',
      component: GameIndex
    }
  ]
})
