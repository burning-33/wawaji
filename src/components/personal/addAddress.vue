<template>
    <div id="addAddress">
      <UpdateAddress></UpdateAddress>

      <!--<mu-switch label="设为默认地址" labelLeft class="demo-switch" />-->
      <p><span>设为默认地址</span> <mu-switch></mu-switch> </p>

    </div>
</template>

<script>
  import UpdateAddress from './updateAddress'
  import topBar from '../common/topBar.vue'
    export default {
      name: 'addAddress',
      components: {
        UpdateAddress:UpdateAddress,
        topBar:topBar
      }

    }
</script>

<style scoped>
@import "../../assets/css/personal/addAddress.css";
</style>
