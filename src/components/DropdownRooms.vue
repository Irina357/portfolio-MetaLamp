<template>
  <div>
    <div class="FormElementsTitleContainer ElementsContainerMarginTop InputMiddleContainer">
        <div>
          <p class="FormElementsTitle">Dropdown</p>
        </div>
        <div>
          <p class="FormElementsTitleOpacity">Default</p>
        </div>
      </div>
      <div class="inputMiddle SelectTitle">
        <p class="SelectText">19 августа 23 августа</p>
        <button type="button" class="SelectBtn"><img src="../assets/expand_more.png"></button>
      </div>
  </div>
</template>

<script>
export default {
}
</script>
<style lang="less">
@import '../style/StyleAll';
@import '../style/variables';
.DropdownBorder {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
