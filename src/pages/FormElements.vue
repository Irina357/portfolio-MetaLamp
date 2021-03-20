<template>
  <div class="ContainerAll FormElementsContainer">
    <Logo/>
    <div class="FormElementsColumnLeft">
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
      <div class="inputMiddle SelectTitle FormElementsSubscriptionPadding FormElementsSubscriptionMb">
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
      <div class="DropdownRoomsContainer">
        <DropdownRooms/>
      </div>
      <div class="FormElementsCheckboxListMb">
        <div class="CheckboxListTitleContainer">
          <p class="CheckboxListTitle">expandable checkbox list</p>
          <button type="button" class="SelectBtn CheckboxListTitleBtnOpacity">
            <img src="../assets/expand_more.png">
          </button>
        </div>
      </div>
      <div class="CheckboxListContainer">
      <CheckboxList/>
      </div>
      <Advantage />
    </div>
    <div class="FormElementsColumnCentre">
      <div class="CheckboxListTitleContainer CheckboxButtonMb">
        <p class="CheckboxListTitle">checkbox buttons</p>
      </div>
      <CheckboxButtons/>
      <div class='FormElementsRadioBtnContainer'>
        <p class="CheckboxListTitle">radio buttons</p>
      </div>
      <RadioButtons/>
      <div class='FormElementsRadioBtnContainer'>
        <p class="CheckboxListTitle">toggle</p>
      </div>
      <Toggle/>
      <div class="FormElementsToggleContainerMt">
        <Toggle/>
      </div>
      <div class='FormElementsRadioBtnContainer'>
        <p class="CheckboxListTitle">Like button</p>
      </div>
      <div class="FormElementLikeButtonContainer">
        <LikeButton/>
        <LikeButton/>
      </div>
      <div class='FormElementsRadioBtnContainer'>
        <p class="CheckboxListTitle">Rate button</p>
      </div>
      <div class="FormElementsRateButtonContainer">
      <RateButton />
      <RateButton />
      </div>
      <div>
          <p class="FormElementsTitle">Dropdown</p>
        </div>
      <Guests />
      <div class="FormElementsRichBtnMtMb">
          <p class="FormElementsTitle">rich checkbox buttons</p>
        </div>
      <RichCeckboxButtons />
    </div>
    <div class="FormElementsColumnRight">
      <div class="CheckboxListTitleContainer">
        <p class="CheckboxListTitle">rance slider</p>
      </div>
      <div class="CheckboxListTitleContainer">
        <p class="CheckboxListTitle">buttons</p>
      </div>
      <div class="ButtonContainer">
      <Button />
      <ButtonDisable />
      </div>
      <div class="ButtonContainer">
        <ButtonBackgroundNone/>
        <ButtonBackgoundNoneDisable/>
      </div>
      <div class="ButtonContainer ButtonTextContainer">
        <div>
          <p class="FormElementBtnTextPurle">click mi</p>
        </div>
        <div>
          <p class="FormElementBtnTextDark">click mi</p>
        </div>
      </div>
      <ButtonBig />
    </div>
  </div>
</template>

<script>
import Logo from '../components/Logo'
import DropdownRooms from '../components/DropdownRooms'
import CheckboxList from '../components/CheckboxList'
import CheckboxButtons from '../components/CheckboxButtons'
import RadioButtons from '../components/RadioButtons'
import Toggle from '../components/Toggle'
import LikeButton from '../components/LikeButton'
import RateButton from '../components/RateButton'
import Guests from '../components/Guests'
import RichCeckboxButtons from '../components/RichCeckboxButtons'
import Advantage from '../components/Advantage'
import Button from '../components/Button'
import ButtonDisable from '../components/ButtonDisable'
import ButtonBackgroundNone from '../components/ButtonBackgroundNone'
import ButtonBackgoundNoneDisable from '../components/ButtonBackgoundNoneDisable'
import ButtonBig from '../components/ButtonBig'
export default {
  components: {
    ButtonBig,
    ButtonBackgoundNoneDisable,
    ButtonBackgroundNone,
    ButtonDisable,
    Button,
    Advantage,
    RichCeckboxButtons,
    Guests,
    RateButton,
    LikeButton,
    Toggle,
    RadioButtons,
    CheckboxButtons,
    CheckboxList,
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
  padding-right: 141px;
}
.FormElementsColumnLeft, .FormElementsColumnCentre, .FormElementsColumnRight {
  max-width: 320px;
  margin-right: 126px;
}
.FormElementsColumnCentre {
  margin-right: 72px;
}
.FormElementsColumnRight {
  margin: 0;
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
.DropdownMt {margin-top: 118px}
.DropdownMb {margin-bottom: 20px}
.DropdownRoomsContainer {margin-bottom: 54px}
.FormElementsCheckboxListMb {margin-bottom: 34px}
.CheckboxButtonMb {margin-bottom: 17px}
.FormElementsRadioBtnContainer {
  margin-top: 40px;
  margin-bottom: 16px;
}
.FormElementsToggleContainerMt {margin-top: 7px}
.FormElementLikeButtonContainer {
  display: flex;
  justify-content: space-between;
  width: 90px;
  margin-bottom: 44px;
}
.FormElementsRateButtonContainer {
  display: flex;
  justify-content: space-between;
  width: 260px;
  margin-bottom: 196px;
}
.FormElementsRichBtnMtMb {
  margin-top: 114px;
  margin-bottom: 16px;
}
.CheckboxListContainer {margin-bottom: 100px}
.ButtonContainer {
  display: flex;
  justify-content: space-between;
  width: 217px;
  margin-bottom: 30px;
  margin-top: 14px;
}
.ButtonTextContainer {
  justify-content: start;
}
.FormElementBtnTextPurle {
  .fontSize12;
  color: @colorPurle;
  margin-right: 20px;
}
.FormElementBtnTextDark {
  .fontSize12;
  opacity: .5;
}
</style>
