<template>
  <div class="LodoContainer">
    <div class="LogoVectorLeft">
      <img src="../assets/Vector1.png">
    </div>
    <div class="LogoVectorRight">
      <img src="../assets/Vector.png">
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="less">
@import '../style/variables';
.LodoContainer {
  box-sizing: border-box;
  position: absolute;
  display: flex;
  left: 30px;
  top: 30px;
  width: 48px;
  height: 48px;
  border: 2px solid @colorDark;
  opacity: 0.25;
  border-radius: 50%;
}
.LogoVectorLeft {
  margin-left: 10px;
  margin-top: 15px;
}
.LogoVectorRight {
  margin-top: 8px;
}
</style>
