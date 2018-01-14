<template>
    <div id="myAddress">
      <topBar Title="收货地址管理"></topBar>
      <div class="addressBorder" v-for="item in addressList">
        <div >
          <p>{{item.a_name}}</p>
          <p class="a_default" v-if="item.a_default">{{a_default}}</p>
        </div>
       <div>
         <p>{{item.a_tel}}</p>
         <p class="fontColor">
           {{item.a_province}}{{item.a_city}}{{item.a_district}}{{item.a_detailAddress}}
         </p>
       </div>
        <p class="setDefault" @click="setDefault" :a_id="item.a_id" >设为默认</p>
        <span class="iconfont icon-chuyidong1-copy icon1" @click="delAddress(item.a_id)"></span>
        <router-link tag="div" :to="/updateAddress/+item.a_id" class="icon1">
          <p class="iconfont icon-bianji"></p>
        </router-link>
      </div>

      <div class="newAddress">
        <router-link tag="div" to="/addAddress" class="newAddress">
          <mu-raised-button   label="新建地址" labelPosition="after" >
            <i class="iconfont icon-xinzeng" style="font-size:14px;"></i>
          </mu-raised-button>
        </router-link>
      </div>
    </div>
</template>

<script>
  import topBar from '../common/topBar.vue'
    export default {
      name: 'myAddress',
      components: {
        topBar:topBar
      },
      data: function () {
        return {
          a_name:"江洪军",
          tel:"18080791926",
          a_default:"默认",
          detailAddress:"四川省成都市双流区云华路国信安222号",
          userId:'',
          addressList:'',
          addressId:'',
          defaultId:''
        }
      },
      created: function () {
        this.userId=sessionStorage.getItem('userId');
        this.getAddressList()
      },
      methods: {
        getAddressList: function () {
          let that=this;
          this.$axios.get('http://172.16.10.22:8888/api/user/addressList.do?userId='+this.userId)
            .then(function (resp) {
              that.addressList=resp.data.data
            })
            .catch(function (err) {
              console.log(err);
            })
        },
        setDefault: function (e) {
          let that=this;
          this.defaultId=e.target.attributes.a_id.value
//          this.defaultId=e---->@click="setDefault(item.a_id)"
          this.$axios.get
          ('http://172.16.10.22:8888/api/user/defaultAddress.do?userId='+this.userId+'&addressId='+this.defaultId)
            .then(function (resp) {
              that.getAddressList()
            }).catch(function (err) {
              console.log(err);
            })
        },
        delAddress: function (aid) {
          let that=this;
          this.defaultId=aid;
          console.log(aid);
          this.addressId=sessionStorage.setItem('addressId','aid');
//          console.log(aid);
          this.$axios.get('http://172.16.10.22:8888/api/user/delAddress.do?addressId='+this.defaultId).
            then(function(resp){
              that.getAddressList()
            }).catch(function(err){
              console.log(err);
            })
        }
      }

    }
</script>

<style scoped>
@import "../../assets/css/personal/myAddress.css";
</style>
