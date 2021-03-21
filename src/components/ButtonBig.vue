<template>
  <div class="ButtonBigContainer">
    <button type="button">перейти к оплате</button>
    <img src="../assets/arrow_forwardwait.png">
  </div>
</template>
<script>
export default {
  data () {
  }
}
</script>
<style lang="less">
@import '../style/variables';
@import '../style/StyleAll';
.ButtonBigContainer {
  position: relative;
  button {
     width: 320px;
  height: 44px;
  border-radius: 22px;
  background: linear-gradient(180deg, #bc9cff 0%, #8ba4F9 100%);
  border: none;
  .fontSize12;
  color: white;
  }
  img {
    position: absolute;
  top: 13px;
  left: 288px;
  }
}
</style>
