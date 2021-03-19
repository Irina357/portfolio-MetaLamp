<template>
  <div>
    <div class="ToggleContainer">
      <input type="checkbox" id="toggle-button" class="toggle-button">
      <label for="toggle-button" class="RadioButtonsLabel">Получать спецпредложения</label>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style lang="less">
@import '../style/variables';
@import '../style/StyleAll';

.ToggleContainer {
  display: table-cell;
  vertical-align: middle;
  height: 20px;
}
.toggle-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.toggle-button {
  margin-left: 0;
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  vertical-align: top;
  background: white;
  border: rgba(31, 32, 65, 0.25) 1px solid;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin-right: 10px;
}
.toggle-button::after {
  content: "";
  display: inline-block;
  position: absolute;
  left: 5px;
  top: 2.5px;
  width: 12px;
  height: 12px;
  background-color: @colorDark;
  opacity: .25;
  border-radius: 50%;
  transform: translateX(0);
  transition: all 0.3s cubic-bezier(0.2, 0.85, 0.32, 1.2);
}
.toggle-button:checked::after {
  transform: translateX(calc(100% + 4px));
  background: linear-gradient(180deg, #bc9cff 0%, #8BA4F9 100%);
  opacity: 1;
  transition: all 0.3s cubic-bezier(0.2, 0.85, 0.32, 1.2);
}
.toggle-button:checked {
  background-color: white;
  border: @colorPurle 1px solid;
}
</style>
