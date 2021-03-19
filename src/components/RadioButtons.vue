<template>
  <div>
    <form>
      <div class="RadioButtonsContainer">
        <div class="RadioButtonsActive CheckedMan" v-show="checkedStatusMan">
        </div>
        <div class="RadioButtonsActive CheckedFemale" v-show="checkedStatusFemale">
        </div>
        <div class="ToggleContainer">
          <input type="radio" id="man" name="contact" value="man" checked class="custom-radio" @click="checkedMan">
          <label for="man" class="RadioButtonsLabel" v-bind:class="{CheckedLabel:checkedStatusLabelMan}">Мужчина</label>
          <input type="radio" id="female" name="contact" value="female" class="custom-radio" @click="checkedFemale">
          <label for="female" class="RadioButtonsLabel"
                 v-bind:class="{CheckedLabel: checkedStatusLabelFemale}">женщина</label>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checkedStatusMan: true,
      checkedStatusFemale: false,
      checkedStatusLabelMan: false,
      checkedStatusLabelFemale: true
    }
  },
  methods: {
    checkedMan () {
      this.checkedStatusMan = !this.checkedStatusMan
      this.checkedStatusFemale = !this.checkedStatusFemale
      this.checkedStatusLabelMan = !this.checkedStatusLabelMan
      this.checkedStatusLabelFemale = !this.checkedStatusLabelFemale
    },
    checkedFemale () {
      this.checkedStatusFemale = !this.checkedStatusFemale
      this.checkedStatusMan = !this.checkedStatusMan
      this.checkedStatusLabelFemale = !this.checkedStatusLabelFemale
      this.checkedStatusLabelMan = !this.checkedStatusLabelMan
    }
  }
}
</script>
<style lang="less">
@import '../style/variables';
@import '../style/StyleAll';

.RadioButtonsContainer {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.RadioButtonsLabel {
  .fontSize14;
  opacity: .5;
}

.custom-radio {
  position: absolute;
  z-index: -1;
  opacity: 0;
  margin-left: 0;
  margin-right: 10px;
}

.custom-radio:checked + label::before {
  border-color: @colorPurle;
}

.custom-radio + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
  margin-right: 20px;
}

.custom-radio + label::before {
  content: '';
  display: inline-block;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: rgba(31, 32, 65, 0.25) 1px solid;
}

.custom-radio:not(:disabled):active + label::before {
  border-color: rosybrown;
}

.RadioButtonsActive {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(180deg, #bc9cff 0%, #8BA4F9 100%);
}

.CheckedMan {
  left: 5px;
  top: 5.5px;
}

.CheckedFemale {
  left: 126px;
  top: 5.5px;
}

.CheckedLabel {
  color: rgba(31, 32, 65, .5);
}
</style>
