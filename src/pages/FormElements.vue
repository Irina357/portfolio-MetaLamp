<template>
  <div class="ContainerAll FormElementsContainer">
    <Logo/>
    <div>
      <div class="FormElementsTitleContainer">
        <div>
          <p class="FormElementsTitle">Text Field</p>
        </div>
        <div>
          <p class="FormElementsTitleOpacity">Default</p>
        </div>
      </div>
      <input class="inputLarge inputLargeMarginBottom " type="email" placeholder="email">
      <div class="FormElementsTitleContainer">
        <div>
          <p class="FormElementsTitle">Text Field</p>
        </div>
        <div>
          <p class="FormElementsTitleOpacity">Hover/Focus</p>
        </div>
      </div>
      <input class="inputLarge inputLargeMarginBottom inputHover" type="email" placeholder="This is pretty awesome">
      <div class="FormElementsTitleContainer">
        <div>
          <p class="FormElementsTitle">Dropdown</p>
        </div>
      </div>
      <div class="inputLarge inputLargeMarginBottom SelectTitle">
        <p class="SelectText">Сколько гостей</p>
        <button type="button" class="SelectBtn"><img src="../assets/expand_more.png"></button>
      </div>
      <div class="FormElementsTitleContainer">
        <div>
          <p class="FormElementsTitle">Masked Text Field</p>
        </div>
      </div>
      <input class="inputLarge inputBigMarginBottom inputLargeMarginBottom" type="date" placeholder="ДД.ММ.ГГГГ">
      <div class="FormElementsElementContainer ElementsContainerMarginTop">
        <div>
          <div class="inputLittleTitleMarginBottom">
          <p class="FormElementsTitle">Date Dropdown</p>
        </div>
          <div class="inputLittle SelectTitle">
        <p class="SelectText">ДД.мм.гггг</p>
        <button type="button" class="SelectBtn"><img src="../assets/expand_more.png"></button>
      </div>
        </div>
        <div>
           <div class="inputLittleTitleMarginBottom">
          <p class="FormElementsTitle">Date Dropdown</p>
        </div>
          <div class="inputLittle SelectTitle">
        <p class="SelectText">ДД.мм.гггг</p>
        <button type="button" class="SelectBtn"><img src="../assets/expand_more.png"></button>
      </div>
        </div>
      </div>
       <div class="FormElementsTitleContainer ElementsContainerMarginTop">
        <div>
          <p class="FormElementsTitle">Filter date Dropdown</p>
        </div>
      </div>
      <div class="inputMiddle SelectTitle">
        <p class="SelectText">19 августа 23 августа</p>
        <button type="button" class="SelectBtn"><img src="../assets/expand_more.png"></button>
      </div>
      <div class="FormElementsTitleContainer ElementsContainerMarginTop">
        <div>
          <p class="FormElementsTitle">Subscription text field</p>
        </div>
      </div>
      <div class="inputMiddle SelectTitle FormElementsSubscriptionPadding">
        <input type="email" class="inputMiddle" placeholder="email">
        <button type="button" class="SelectBtn"><img src="../assets/arrow_forward.png"></button>
      </div>
       <div class="FormElementsTitleContainer ElementsContainerMarginTop InputMiddleContainer DropdownMt">
        <div>
          <p class="FormElementsTitle">Dropdown</p>
        </div>
        <div>
          <p class="FormElementsTitleOpacity">Default</p>
        </div>
      </div>
      <div class="inputMiddle SelectTitle DropdownBorder DropdownMb">
        <p class="SelectText">19 августа 23 августа</p>
        <button type="button" class="SelectBtn"><img src="../assets/expand_more.png"></button>
      </div>
      <div class="FormElementsTitleContainer InputMiddleContainer">
      <div>
        <p class="FormElementsTitle">Dropdown</p>
      </div>
      <div>
        <p class="FormElementsTitleOpacity">Default</p>
      </div>
    </div>
      <DropdownRooms />
    </div>
    <div>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import Logo from '../components/Logo'
import DropdownRooms from '../components/DropdownRooms'

export default {
  components: {
    Logo,
    DropdownRooms
  }
}
</script>

<style lang="less">
@import '../style/StyleAll';
@import '../style/variables';
.FormElementsContainer {
  display: flex;
  justify-content: space-between;
  padding-left: 141px;
  padding-top: 143px;
}
.FormElementsTitleContainer {
  display: flex;
  justify-content: space-between;
  width: 320px;
  margin-bottom: 5px;
}
.inputBig {
  .inputLarge;
  margin-bottom: 20px;
}
.inputLargeMarginBottom {
  margin-bottom: 20px;
}
.inputBigMarginBottom {
  margin-bottom: 0;
}
.FormElementsTitle {
  .fontSize12
}
.FormElementsTitleOpacity {
  .fontSize12Opacity25
}
.FormElementsElementContainer {
  display: flex;
  justify-content: space-between;
  width: 320px;
  margin-bottom: 40px;
}
.inputLittleTitleMarginBottom {
  margin-bottom: 5px
}
.InputMiddleContainer {
  width: 266px;
}
.ElementsContainerMarginTop{margin-top: 40px}
.DropdownMt {margin-top: 60px}
.DropdownMb {margin-bottom: 20px}
</style>
