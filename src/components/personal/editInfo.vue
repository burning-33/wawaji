<template>
    <div id="editInfo">
      <topBar Title="修改个人信息"></topBar>
      <div class="textBorder">
        <p @click="open('bottom')">个人头像</p>
        <img :src="'/img'+imgPath" />
        <p>昵称： <mu-text-field hintText="编辑昵称" underlineFocusClass="demo-nickName" v-model="editNickname"/></p>
        <!--<p>生日：<mu-date-picker hintText="出生日期"/> </p>-->
        <p>电话号码： <mu-text-field hintText="你的号码" v-model="editTel"/></p>
<!--选择头像代码-->
          <mu-popup position="bottom" popupClass="demo-popup-bottom" :open="bottomPopup" @close="close('bottom')">
            <mu-content-block>
              <!--<mu-raised-button label="拍照"></mu-raised-button>-->
              <p>拍照</p>
              <p>选择照片</p>
              <mu-appbar title="">
                <mu-flat-button  label="取消"  @click="close('bottom')"/>
              </mu-appbar>
            </mu-content-block>
          </mu-popup>

      </div>
      <div class="saveAddress">
        <mu-raised-button label="保存" @click="saveEdit"></mu-raised-button>
      </div>
    </div>
</template>

<script>
  import topBar from '../common/topBar.vue'
    export default {
      name: 'editInfo',
      components: {
        topBar:topBar
      },
      data: function () {
            return {
              bottomPopup: false,
              imgPath:'',
              editNickname:'',
              editTel:'',
              userId:''
            }
        },
      created: function () {
        this.userId=sessionStorage.getItem('userId');
        this.editNickname=sessionStorage.getItem('nickName')
        this.editTel=sessionStorage.getItem('tel');
        this.imgPath=sessionStorage.getItem('headImg')
      },
      methods: {
        open: function (position) {
          this[position + 'Popup'] = true
      },
        close: function (position) {
          this[position + 'Popup'] = false
      },
        saveEdit: function () {
          let that=this;
          console.log(this.userId);
          this.$axios.post(
            'http://172.16.10.22:8888/api/user/userEdit.do',
            'userId='+this.userId+'&nickName='+this.editNickname+'&tel='+this.editTel+'&img='+this.imgPath)
            .then(function (resp) {
              if(resp.data.code==200){
                sessionStorage.setItem('nickName',that.editNickname)
                sessionStorage.setItem('tel',that.editTel)
                that.$router.push('/personIndex')
              }
            })
            .catch(function (err) {
              console.log(err);
            })
        }

      },
      watch: {
        topPopup: function (val) {
          if (val) {
            setTimeout(function(){
             this.topPopup = false
          }, 2000)
        }
      }
    }

}
</script>

<style scoped>
@import "../../assets/css/personal/editInfo.css";
</style>
