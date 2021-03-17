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
      <input class="inputBig" type="email" placeholder="email">
      <div class="FormElementsTitleContainer">
        <div>
          <p class="FormElementsTitle">Text Field</p>
        </div>
        <div>
          <p class="FormElementsTitleOpacity">Hover/Focus</p>
        </div>
      </div>
      <input class="inputBig inputHover" type="email" placeholder="This is pretty awesome">
      <div class="FormElementsTitleContainer">
        <div>
          <p class="FormElementsTitle">Dropdown</p>
        </div>
      </div>
      <div class="inputBig SelectTitle">
        <p class="SelectText">Сколько гостей</p>
        <button type="button" class="SelectBtn"><img src="../assets/expand_more.png"></button>
      </div>
      <div class="FormElementsTitleContainer ElemenrsContainerMarginTop">
        <div>
          <p class="FormElementsTitle">Masked Text Field</p>
        </div>
      </div>
      <input class="inputBig" type="date" placeholder="ДД.ММ.ГГГГ">
      <div class="FormElementsElementContainer">
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
       <div class="FormElementsTitleContainer">
        <div>
          <p class="FormElementsTitle">Filter date Dropdown</p>
        </div>
      </div>
      <div class="inputMiddle SelectTitle">
        <p class="SelectText">19 августа 23 августа</p>
        <button type="button" class="SelectBtn"><img src="../assets/expand_more.png"></button>
      </div>
    </div>
    <div>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import Logo from '../components/Logo'

export default {
  components: {
    Logo
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
.inputLittle {
  .inputLittle
}
input.inputHover:hover, input.inputHover:focus {
  border: rgba(31,32,65,0.5) 1px solid;
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
.inputLittleTitleMarginBottom {margin-bottom: 5px}
.inputMiddle {
  .inputMiddle
}
.ElemenrsContainerMarginTop{margin-top: 40px}
</style>
