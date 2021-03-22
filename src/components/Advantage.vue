<template>
  <div>
    <div class="AdvantageContainer">
      <div class="AdvantageImgContainer">
        <img src="../assets/insert_emoticon-24px.svg" class="AdvantageImg" alt="Человечек">
      </div>
      <div class="AdvantageText">
        <p class="AdvantageTextBold">комфорт</p>
        <p>Звукопоглощяющие стены</p>
      </div>
    </div>
    <div class="AdvantageContainer">
      <div class="AdvantageImgContainer">
        <img src="../assets/location_city-24px.svg" class="AdvantageImg" alt="Город">
      </div>
      <div class="AdvantageText">
        <p class="AdvantageTextBold">комфорт</p>
        <p>Звукопоглощяющие стены</p>
      </div>
    </div>
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
.AdvantageContainer {
  display: flex;
  justify-content: start;
  width: 280px;
  height: 68px;
  margin-bottom: 20px;
  border-bottom: rgba(31,32,65,0.1) 1px solid;
}
.AdvantageImgContainer {
  margin-right: 10px;
}
.AdvantageImg {
  width: 48px;
  height: 48px;
}
.AdvantageText {
  .fontSize14;
  opacity: .75;
}
.AdvantageTextBold {
    font-weight: bold;
  }
</style>
