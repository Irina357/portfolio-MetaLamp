<template>
  <div>
    <div class="inputLarge SelectTitle DropdownBorder" v-bind:class="{SelectTitleDropdownShow: selectTitleShow}">
      <p class="SelectText" v-show="selectTextStatus">{{ this.countAll }}гостя</p>
      <p class="SelectText" v-show="guestsSumStatus">сколько гостей</p>
      <button type="button" class="SelectBtn" @click="dropdownShow"><img src="../assets/expand_more.png"></button>
    </div>
    <div class="GuestContainerAll" v-show="dropdownStatus">
      <div class="DropdownContainerGuest">
        <div class="DropdownText DropdownTextGuestWidth">
          <p class="DropdownTextStyle">Взрослые</p>
          <p class="DropdownTextStyle">Дети</p>
          <p class="DropdownTextStyle">Младенцы</p>
        </div>
        <div class="DropdownBtn">
          <button type="button" class="DropdownBtnCount" @click="bedroomMinus"><img src="../assets/Minus.png"
                                                                                    class="DropdownBtnMinusMn"></button>
          <button type="button" class="DropdownBtnCount" @click="bedMinus"><img src="../assets/Minus.png"></button>
          <button type="button" class="DropdownBtnCount" @click="bathroomMinus"><img src="../assets/Minus.png"></button>
        </div>
        <div DropdownCount>
          <p class="DropdownCountText">{{ this.countAdults }}</p>
          <p class="DropdownCountText">{{ this.countChildren }}</p>
          <p class="DropdownCountText">{{ this.countBabies }}</p>
        </div>
        <div class="DropdownBtn">
          <button type="button" class="DropdownBtnCount" @click="bedroomPlus"><img src="../assets/Plus.png"
                                                                                   class="DropdownBtnPlusMn"></button>
          <button type="button" class="DropdownBtnCount" @click="bedPlus"><img src="../assets/Plus.png"
                                                                               class="DropdownBtnPlusMn"></button>
          <button type="button" class="DropdownBtnCount" @click="bathroomPlus"><img src="../assets/Plus.png"
                                                                                    class="DropdownBtnPlusMn"></button>
        </div>
      </div>
      <div class="GustsContainerBtn">
        <button type="button" class="GuestsBtn" @click="countRemove" v-bind:class="{GuestsBtnShow: guestsSumStatus}">Очистить</button>
        <button type="button" class="GuestsBtn" @click="gustsSum">Применить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      countAdults: 0,
      countChildren: 0,
      countBabies: 0,
      countAll: 0,
      dropdownStatus: false,
      selectTitleShow: false,
      selectTextStatus: false,
      guestsSumStatus: true,
      buttonSumStatus: true
    }
  },
  methods: {
    bedroomMinus () {
      if (this.countAdults === 0) {
        this.countAdults = 0
      } else {
        this.countAdults = this.countAdults - 1
      }
    },
    bedMinus () {
      if (this.countChildren === 0) {
        this.countChildren = 0
      } else {
        this.countChildren = this.countChildren - 1
      }
    },
    bathroomMinus () {
      if (this.countBabies === 0) {
        this.countBabies = 0
      } else {
        this.countBabies = this.countBabies - 1
      }
    },
    bedroomPlus () {
      this.countAdults = this.countAdults + 1
    },
    bedPlus () {
      this.countChildren = this.countChildren + 1
    },
    bathroomPlus () {
      this.countBabies = this.countBabies + 1
    },
    dropdownShow () {
      this.dropdownStatus = !this.dropdownStatus
      this.selectTitleShow = !this.selectTitleShow
    },
    gustsSum () {
      this.countAll = this.countChildren + this.countAdults + this.countBabies
      this.guestsSumStatus = !this.guestsSumStatus
      this.selectTextStatus = !this.selectTextStatus
      this.buttonSumStatus = !this.buttonSumStatus
    },
    countRemove () {
      this.countAdults = 0
      this.countChildren = 0
      this.countBabies = 0
      this.countAll = 0
      this.selectTextStatus = !this.selectTextStatus
      this.guestsSumStatus = !this.guestsSumStatus
    }
  }
}
</script>
<style lang="less">
@import '../style/StyleAll';
@import '../style/variables';
.GuestContainerAll {
  padding-left: 15px;
  padding-top: 7px;
  padding-right: 7px;
   box-sizing: border-box;
  border: rgba(31,32,65,0.5) 1px solid;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  width: 320px;
  height: 159px;
  box-shadow: 0 10px 20px rgba(31,32,65,0.05);
}
.GustsContainerBtn {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
}
.DropdownBorder {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.DropdownContainerGuest {
  display: flex;
  justify-content: space-between;
}
.SelectTitleDropdownShow {
  border: rgba(31,32,65,0.5) 1px solid !important;
}
.DropdownTextGuestWidth {
  width: 206px;
}
.GuestsBtn {
  .fontSize12;
  color: @colorPurle;
  border: none;
  background: none;
  padding: 0;
}
.GuestsBtnShow {
  color: white;
}
</style>
