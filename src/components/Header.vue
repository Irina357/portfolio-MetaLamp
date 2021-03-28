<template>
  <div>
    <header>
      <div class="HeaderLogo">
        <img src="../assets/VectorCircle.png" class="HeaderLogoImgImg">
        <img src="../assets/TOXIN.png" class="HeaderLogoImgText">
      </div>
      <nav>
      </nav>
      <div class="HeaderEntry">
      </div>
    </header>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
@import '../style/StyleAll';
@import '../style/variables';
header {
   box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 70px;
  width: 100%;
    justify-content: space-between;
  padding-left: 140px;
    padding-right: 140px;
  background: white;
}
.HeaderLogo {
  display: flex;
  justify-content: start;
  align-items: center;
}
.HeaderLogoImgImg {
  width: 40px;
  height: 40px;
  margin-right: 12.5px;
}
.HeaderLogoImgText {
  width: 53.19px;
  height: 12.03px;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
