<template>
  <div class="ContainerAll FooterBoxShadow">
    <footer>
      <div class="FooterContainer">
        <div class="FooterLogo">
          <div class="FooterLogoContainer">
            <img src="../assets/logoColorLeft.png" class="HeaderLogoCircleImgLeft">
          <img src="../assets/logoColorRidth.png" class="HeaderLogoCircleImgRight">
            <img src="../assets/VectorCircle.png" class="HeaderLogoImgImg">
            <img src="../assets/TOXIN.png" class="HeaderLogoImgText">
          </div>
          <div>
            <p>
              Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»
            </p>
          </div>
        </div>
        <div class="FooterColumnLeft">
          <ul>
            <li>Навигация</li>
            <li>О нас</li>
            <li>Служба поддержки</li>
            <li>Услуги</li>
            <li>Новости</li>
          </ul>
          <ul>
            <li>Навигация</li>
            <li>О нас</li>
            <li>Служба поддержки</li>
            <li>Услуги</li>
            <li>Новости</li>
          </ul>
        </div>
        <div class="FooterColumnRight">
          <div class="FooterColumnRightUl">
          <ul>
            <li>Навигация</li>
            <li>О нас</li>
            <li>Служба поддержки</li>
            <li>Услуги</li>
          </ul>
          </div>
          <div>
            <h6>Подписка</h6>
            <p>Получайте специальные предложения и новости сервиса</p>
            <input type="email" class="inputMiddle" placeholder="email">
              <button type="button" class="SelectBtn FormElementsSubscriptionBtn">
                <img src="../assets/arrow_forward.png" alt="arrow">
              </button>
          </div>
        </div>
      </div>
      <div class="FooterFooter">
        <div class="FooterLogoContainerWidth">
          <div class="FooterLogoImgContainerWidth768">
            <img src="../assets/logoColorLeft.png" class="HeaderLogoCircleImgLeft">
          <img src="../assets/logoColorRidth.png" class="HeaderLogoCircleImgRight">
            <img src="../assets/VectorCircle.png" class="HeaderLogoImgImg">
          </div>
          <div class="vvv">
            <img src="../assets/TOXIN.png" class="HeaderLogoImgText">
          </div>
          </div>
        <div class="FooterFooterCopy">
          <p>
            Copyright © 2018 Toxin отель. Все права защищены.
          </p>
        </div>
        <div class="FooterFooterIcons">
          <img src="../assets/iconBird.png">
          <img src="../assets/iconFa.png">
          <img src="../assets/icon.png">
        </div>
      </div>
    </footer>
    <div class="FooterBorder">
    </div>
  </div>
</template>
<script>
</script>
<style lang="less">
@import '../style/StyleAll';
@import '../style/variables';
.FooterBoxShadow {
  box-shadow: 0 10px 20px rgba(31,32,65,0.05);
}
footer {
  box-sizing: border-box;
  width: 100%;
  padding-left: 9.7%;
  padding-right: 9.7%;
  background: white;
  @media @before-w1170 {
    padding: 3%;
  }
  @media @before-w768 {
    text-align: center;
    padding-bottom: 120px;
  }
}
.FooterContainer, .FooterLogoContainer, .FooterColumnLeft, .FooterColumnRight, .FooterFooter {
  .ContainerFlexBetween
}
.FooterContainer {
  box-sizing: border-box;
  width: 100%;
  padding-top: 100px;
  padding-bottom: 80px;
  @media @before-w1440 {
    flex-wrap: wrap;
    //width: 767px;
    margin: 0 auto;
  }
    @media @before-w768 {
    display: none;
  }
}
.FooterLogoContainer {
  position: relative;
  align-items: center;
   justify-content: flex-start;
  margin-bottom: 20px;
  @media @before-w1440 {
    margin-bottom: 10px;
  }
}
.FooterLogo {
  box-sizing: border-box;
  width: 25%;
  margin-right: 3.4%;
  p {
   .fontSize14;
    opacity: .75;
  }
   @media @before-w1440 {
    width: 100%;
     padding-bottom: 50px;
  }
}

.FooterColumnLeft, .FooterColumnRight {
  box-sizing: border-box;
  width: 37%;
  margin-right: 5%;
  ul {
    list-style-type: none;
    :first-child {
      .fontSize12;
      opacity: 1;
    }
  }
  li {
    .fontSize14;
    opacity: 0.5;
    margin-bottom: 20px;
    @media @before-w876 {
      font-size: 12px;
    }
  }
}
.FooterColumnLeft {
  width: 30%;
    @media @before-w1440 {
    width: 40%;
      margin-right: 0;
  }
}
.FooterColumnRight {
  margin-right: 0;
  width: 38%;
  display: flex;
  justify-content: space-between;
  ul {
    width: 149px;
    margin-right: 50px;
  }

  h6 {
    .fontSize12;
    margin: 0;
    margin-bottom: 20px;
  }

  p {
    .fontSize14;
    width: 260px;
    margin-bottom: 20px;
    @media @before-w876 {
      font-size: 12px;
    }
  }

  input {
    width: 260px;
  }
   @media @before-w1440 {
    width: 55%;
  }
}
.FooterColumnRightUl {
  width: 33%;
}
.FooterFooter {
  height: 70px;
  align-items: center;
   @media @before-w768 {
    display: inline-block;
     //width: 500px;
     padding: 0;
     margin: 0 auto;
  }
  p {
    .fontSize14;
    opacity: .75;
     @media @before-w768 {
    margin-bottom: 25px;
  }
  }
}
.FooterFooterIcons {
  display: flex;
  justify-content: flex-end;
   @media @before-w768 {
    justify-content: center;
  }
  img {
    margin-left: 20px;
  }
}
.FooterBorder {
  position: absolute;
  bottom: 70px;
  width: 100%;
  height: 1px;
  background: @colorDark;
  opacity: .25;
   @media @before-w1170 {
    bottom: 120px;
   }
   @media @before-w768{
   display: none;
  }
}
.FooterLogoContainerWidth {
  display: none;
  margin-bottom: 20px;
  @media @before-w768{
   display: flex;
    align-items: center;
    width: 67px;
    margin: 0 auto;
    padding-top: 120px;
  }
}
.FooterLogoImgContainerWidth768 {
  position: relative;
}

</style>
