<template>
  <div>
    <div class="inputMiddle SelectTitle DropdownBorder" v-bind:class="{SelectTitleDropdownShow: selectTitleShow}">
      <p class="SelectText">19 августа 23 августа</p>
      <button type="button" class="SelectBtn" @click="dropdownShow"><img src="../assets/expand_more.png"></button>
    </div>
    <div class="DropdownContainerRooms" v-show="dropdownStatus">
      <div class="DropdownText">
        <p class="DropdownTextStyle">Спальни</p>
        <p class="DropdownTextStyle">Кровати</p>
        <p class="DropdownTextStyle">Ванные комнаты</p>
      </div>
      <div class="DropdownBtn">
        <button type="button" class="DropdownBtnCount" @click="bedroomMinus"><img src="../assets/Minus.png" class="DropdownBtnMinusMn"></button>
        <button type="button" class="DropdownBtnCount" @click="bedMinus"><img src="../assets/Minus.png"></button>
        <button type="button" class="DropdownBtnCount" @click="bathroomMinus"><img src="../assets/Minus.png"></button>
      </div>
      <div DropdownCount>
        <p class="DropdownCountText">{{this.countBedroom}}</p>
        <p class="DropdownCountText">{{this.countBad}}</p>
        <p class="DropdownCountText">{{this.countBathroom}}</p>
      </div>
      <div class="DropdownBtn">
        <button type="button" class="DropdownBtnCount" @click="bedroomPlus"><img src="../assets/Plus.png" class="DropdownBtnPlusMn"></button>
        <button type="button" class="DropdownBtnCount" @click="bedPlus"><img src="../assets/Plus.png" class="DropdownBtnPlusMn"></button>
        <button type="button" class="DropdownBtnCount" @click="bathroomPlus"><img src="../assets/Plus.png" class="DropdownBtnPlusMn"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      countBedroom: 0,
      countBad: 0,
      countBathroom: 0,
      dropdownStatus: false,
      selectTitleShow: false
    }
  },
  methods: {
    bedroomMinus () {
      if (this.countBedroom === 0) {
        this.countBedroom = 0
      } else {
        this.countBedroom = this.countBedroom - 1
      }
    },
    bedMinus () {
      if (this.countBad === 0) {
        this.countBad = 0
      } else {
        this.countBad = this.countBad - 1
      }
    },
    bathroomMinus () {
      if (this.countBathroom === 0) {
        this.countBathroom = 0
      } else {
        this.countBathroom = this.countBathroom - 1
      }
    },
    bedroomPlus () {
      this.countBedroom = this.countBedroom + 1
    },
    bedPlus () {
      this.countBad = this.countBad + 1
    },
    bathroomPlus () {
      this.countBathroom = this.countBathroom + 1
    },
    dropdownShow () {
      this.dropdownStatus = !this.dropdownStatus
      this.selectTitleShow = !this.selectTitleShow
    }
  }
}
</script>
<style lang="less">
@import '../style/StyleAll';
@import '../style/variables';
.DropdownBorder {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.DropdownContainerRooms {
  .DropdownContainer;
  width: 266px;
  height: 119px;
  box-shadow: 0 10px 20px rgba(31,32,65,0.05);
}
.SelectTitleDropdownShow {
  border: rgba(31,32,65,0.5) 1px solid !important;
}
</style>
