<template>
  <div>
    <div class="CheckboxListTitleContainer">
      <p class="CheckboxListTitle">expandable checkbox list</p>
      <button type="button" class="SelectBtn CheckboxListTitleBtnOpacity" @click="checkboxShow">
        <img src="../assets/expand_more.png" v-show="closeStatus">
        <img src="../assets/expand_more_not.png" v-show="showStatus">
      </button>
    </div>
    <div v-for="(str, index) in this.checkboxListArry" :key="index" v-show="checkboxStstus">
      <label class="custom-checkbox">
        <input type="checkbox" name="name" value="yes" id="index">
        <span class="CheckboxListBodyText">{{ str.checkboxListText }}</span>
      </label>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checkboxStstus: true,
      showStatus: true,
      closeStatus: false,
      checkboxListArry: [
        {
          checkboxListText: 'Завтрак',
          id: 1
        },
        {
          checkboxListText: 'Письменный стол',
          id: 2
        },
        {
          checkboxListText: 'Стул для кормления',
          id: 3
        },
        {
          checkboxListText: 'Кроватка',
          id: 4
        },
        {
          checkboxListText: 'Телевизор',
          id: 5
        },
        {
          checkboxListText: 'Шампунь',
          id: 6
        }
      ]
    }
  },
  methods: {
    checkboxShow () {
      this.checkboxStstus = !this.checkboxStstus
      this.showStatus = !this.showStatus
      this.closeStatus = !this.closeStatus
    }
  }
}
</script>
<style lang="less">
@import '../style/variables';
@import '../style/StyleAll';
.CheckboxListTitleContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 266px;
  margin-bottom: 2px;
}
.CheckboxListTitle {
  .fontSize12
}
.CheckboxListTitleBtnOpacity {
  opacity: .5;
}

.CheckboxListBodyBtnContainer {
  margin-right: 9.74px;
}
</style>
