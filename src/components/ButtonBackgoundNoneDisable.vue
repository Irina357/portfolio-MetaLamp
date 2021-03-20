<template>
  <div class="ButtonBackgroundNoneContainer">
    <button type="button" class="buttonBackgroundNone" v-bind:class="{buttonDisable: isButtonDisabled}"></button>
    <div class="buttonBackgroundWaiteContainer">
      <button type="button" class="buttonBackgroundWaite">click mi</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isButtonDisabled: true
    }
  },
  methods: {
  }
}
</script>
<style lang="less">
@import '../style/variables';
@import '../style/StyleAll';
.ButtonBackgroundNoneContainer {
  position: relative;
}
.buttonBackgroundWaiteContainer {
  position: absolute;
  top: 2px;
  left: 2px;
}
.buttonBackgroundNone {
  width: 99px;
  height: 44px;
  border-radius: 22px;
  background: #fff;
  text-align: center;
  background: linear-gradient(180deg, #bc9cff 0%, #8ba4F9 100%);
  border: none;
  z-index: -1;
}
.buttonBackgroundWaite {
  width: 95px;
  height: 40px;
  border-radius: 22px;
  background: none;
  border: none;
  background: white;
  .fontSize12;
  color: @colorPurle;
}
.buttonDisable {
  opacity: .5;
}
</style>
