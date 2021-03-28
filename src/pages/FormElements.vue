<template>
  <div class="ContainerAll">
    <div class="FormElementsContainer">
      <Logo/>
      <div class="FormElementsColumnLeft">
        <div class="FormElementContainerMax1000">
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
            <input class="inputLarge inputLargeMarginBottom inputHover" type="email"
                   placeholder="This is pretty awesome">
            <div class="FormElementsTitleContainer">
              <div>
                <p class="FormElementsTitle">Dropdown</p>
              </div>
            </div>
            <div class="inputLarge inputLargeMarginBottom SelectTitle">
              <p class="SelectText">Сколько гостей</p>
              <button type="button" class="SelectBtn"><img src="../assets/expand_more.png" alt="arrow"></button>
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
                  <button type="button" class="SelectBtn"><img src="../assets/expand_more.png" alt="arrow"></button>
                </div>
              </div>
              <div>
                <div class="inputLittleTitleMarginBottom">
                  <p class="FormElementsTitle">Date Dropdown</p>
                </div>
                <div class="inputLittle SelectTitle">
                  <p class="SelectText">ДД.мм.гггг</p>
                  <button type="button" class="SelectBtn"><img src="../assets/expand_more.png" alt="arrow"></button>
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
              <button type="button" class="SelectBtn"><img src="../assets/expand_more.png" alt="arrow"></button>
            </div>
            <div class="FormElementsTitleContainer ElementsContainerMarginTop">
              <div>
                <p class="FormElementsTitle">Subscription text field</p>
              </div>
            </div>
            <div class="inputMiddle SelectTitle FormElementsSubscriptionPadding FormElementsSubscriptionWidth">
              <input type="email" class="inputMiddle" placeholder="email">
              <button type="button" class="SelectBtn FormElementsSubscriptionBtn"><img
                src="../assets/arrow_forward.png" alt="arrow"></button>
            </div>
          </div>
          <div>
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
              <button type="button" class="SelectBtn"><img src="../assets/expand_more.png" alt="arrow"></button>
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
                  <img src="../assets/expand_more.png" alt="arrow">
                </button>
              </div>
            </div>
            <CheckboxList/>
          </div>
        </div>
      </div>
      <div class="FormElementsColumnCentre">
        <div class="FormElementContainerMax1000 FormElementContainerMax1000Pt">
          <div>
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
              <RateButton/>
              <RateButton/>
            </div>
          </div>
          <div>
            <div class="FormElementsTitleContainer">
              <p class="FormElementsTitle">Dropdown</p>
            </div>
            <Guests/>
            <div class="FormElementsRichBtnMtMb">
              <p class="FormElementsTitle">rich checkbox buttons</p>
            </div>
            <RichCeckboxButtons/>
          </div>
        </div>
      </div>
      <div class="FormElementsColumnRight">
        <div class="FormElementContainerMax1000">
          <div>
            <div class="FormElementRangeContainer">
              <div class="FormElementRangeTitle">
                <p>Range</p>
              </div>
              <Range/>
            </div>
            <div class="CheckboxListTitleContainer">
              <p class="CheckboxListTitle">buttons</p>
            </div>
            <div class="ButtonContainer">
              <Button/>
              <ButtonDisable/>
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
            <ButtonBig/>
            <div class='FormElementsRadioBtnContainer'>
              <p class="CheckboxListTitle">paginator</p>
            </div>
            <div class="PaginatorRemove">
            </div>
          </div>
          <div>
            <div class="FormElementGuestsContainer">
              <div class="FormElementsTitleContainer">
                <p class="FormElementsTitle">Dropdown</p>
              </div>
              <Guests/>
            </div>
            <div class='FormElementsRadioBtnContainer FormElementsRichBtnMtMb'>
              <p class="CheckboxListTitle">bullet list</p>
            </div>
            <BulletList/>
          </div>
        </div>
      </div>
    </div>
    <div class="FormElementsContainerTopAll">
      <div class="FormElementsContainerTop">
        <div class="FormElementsContainerTopColumnLeft">
          <Advantage/>
        </div>
        <div class="FormElementsContainerTopColumnRight">
          <Review/>
        </div>
      </div>
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
import BulletList from '../components/BulletList'
import Review from '../components/Review'
import Range from '../components/Range'
export default {
  components: {
    Range,
    Review,
    BulletList,
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

.FormElementsContainer, .FormElementsContainerTop {
  display: flex;
  justify-content: space-between;
  padding-left: 141px;
  padding-top: 143px;
  padding-right: 141px;
  @media (min-width: 1001px) and (max-width: 1439px) {
    justify-content: space-around;
    padding-left: 2%;
    padding-right: 0;
  }
  @media (max-width: 1000px) {
    display: inline-block;
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
  @media (max-width: 700px) {
    display: inline-block;
    padding-left: 0;
    padding-right: 0;
  }
}
.FormElementsContainerTopAll {
  @media (max-width: 1000px) {
    display: inline-block;
    width: 100%;
  }
}
.FormElementsContainerTop {
  padding-top: 105px;
  @media (min-width: 700px) and (max-width: 1000px) {
    display: flex;
    justify-content: space-between;
    width: 700px;
    margin: 0 auto;
    @media (max-width: 700px) {
      display: inline-block;
      width: 100%;
    }
  }
}
.FormElementsContainerTopColumnLeft, .FormElementsContainerTopColumnRight {
  @media (max-width: 700px) {
    width: 320px;
    margin: 0 auto;
  }
}
.FormElementsColumnLeft, .FormElementsColumnCentre, .FormElementsColumnRight {
  width: 320px;
  margin-right: 126px;
  @media (min-width: 700px) and (max-width: 1439px) {
    width: 700px;
    margin: 0 auto;
    @media (max-width: 699px) {
      margin: 0 auto;
    }
  }
}
.FormElementsColumnLeft {
  @media (max-width: 699px) {
    margin: 0 auto;
  }
}
.FormElementsColumnCentre {
  margin-right: 72px;
  @media (min-width: 700px) and (max-width: 1439px) {
    margin: 0 auto;
  }
  @media (max-width: 700px) {
    margin: 0 auto;
  }
}
.FormElementsColumnRight {
  margin: 0;
  @media (min-width: 700px) and (max-width: 1439px) {
    margin: 0 auto;
  }
  @media (max-width: 700px) {
    margin: 0 auto;
  }
}
.FormElementContainerMax1000 {
  @media (max-width: 1000px) {
    margin: 0 auto;
    width: 700px;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 700px) {
    margin: 0 auto;
    display: inline-block;
    width: 320px;
  }
}
.FormElementContainerMax1000Pt {
  @media (max-width: 1000px) {
    padding-top: 40px;
  }
  @media (max-width: 700px) {
    padding-top: 40px;
  }
}
.FormElementsTitleContainer {
  display: flex;
  justify-content: space-between;
  width: 320px;
  margin-bottom: 5px;
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
.ElementsContainerMarginTop {
  margin-top: 40px
}
.FormElementsSubscriptionWidth {
  width: 266px;
  padding-left: 0;
}
.FormElementsSubscriptionBtn {
  margin-left: -44px;
}
.DropdownMt {
  margin-top: 118px;
  @media (max-width: 1000px) {
    margin-top: 0;
  }
}
.DropdownMb {
  margin-bottom: 20px
}
.DropdownRoomsContainer {
  margin-bottom: 54px
}
.FormElementsCheckboxListMb {
  margin-bottom: 34px
}
.CheckboxButtonMb {
  margin-bottom: 17px
}
.FormElementsRadioBtnContainer {
  margin-top: 40px;
  margin-bottom: 16px;
}
.FormElementsToggleContainerMt {
  margin-top: 7px
}
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
  @media (max-width: 1000px) {
    margin-bottom: 40px;
  }
}
.FormElementsRichBtnMtMb {
  margin-top: 114px;
  margin-bottom: 16px;
}
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
.FormElementGuestsContainer {
  margin-top: 230px;
  @media (max-width: 1000px) {
    margin-top: 0;
  }
}
.PaginatorRemove {
  height: 168px;
  width: 150px;
  border: #6fcf97 1px solid;
}
.FormElementRangeContainer {
  position: relative;
}
.FormElementRangeTitle {
  position: absolute;
  .fontSize12;
  font-weight: bold;
}
</style>
