<template>
  <div id="app">
    <div class="HeaderBoxShadow">
    <header>
      <div class="HeaderLogo">
        <div class="HeaderLogoCircle">
          <img src="./assets/logoColorLeft.png" class="HeaderLogoCircleImgLeft">
          <img src="./assets/logoColorRidth.png" class="HeaderLogoCircleImgRight">
          <img src="./assets/VectorCircle.png" class="HeaderLogoImgImg">
        </div>
        <img src="./assets/TOXIN.png" class="HeaderLogoImgText">
      </div>
      <nav>
        <ul>
          <li>
            <router-link :to="{name: 'Colors'}">Colors</router-link>
          </li>
          <li>
            <router-link :to="{name: 'Form'}">Form</router-link>
          </li>
          <li>
            <router-link :to="{name: 'Axios'}">Axios</router-link>
          </li>
          <li>
            <router-link :to="{name: 'HeaderFooter'}">HeaderFooter</router-link>
          </li>
          <li>
            <router-link :to="{name: 'Cards'}">Cards</router-link>
          </li>
        </ul>
      </nav>
      <div class="HeaderEntry">
        <ButtonBackgroundNone class="headerBtnSize"
                              :text="text"
        />
        <ButtonBig class="headerBtnBigSize"
                   :text="bigText"
        />
      </div>
    </header>
  </div>
     <router-view></router-view>
    <Footer />
  </div>
</template>
<script>
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>
<style lang="less">
@import './style/StyleAll';
@import './style/variables';
.HeaderBoxShadow {
  box-shadow: 0 10px 20px rgba(31,32,65,0.05);
  position: relative;
  z-index: 50;
}

header {
  box-sizing: border-box;
  .ContainerFlexBetween;
  align-items: center;
  height: 70px;
  width: 100%;
  padding-left: 9.7%;
  padding-right: 9.7%;
  background: white;
  @media @before-w1170 {
    padding-left: 3%;
    padding-right: 3%;
  }
  @media @before-w660 {
    display: inline-block;
    background: none;
    padding: 0;
  }
}

.HeaderLogo {
  display: flex;
  justify-content: start;
  align-items: center;
  max-width: 27%;
  @media @before-w660 {
    padding-left: 5%;
    height: 50px;
  }
}
.HeaderLogoCircle {
  position: relative;
}
.HeaderLogoCircleImgLeft, .HeaderLogoCircleImgRight {
  position: absolute;
  top: 15.3px;
}
.HeaderLogoCircleImgLeft {
  left: 9.4px;
   @media @before-w876 {
     left: 4.4px;
     top: 9px;
   }
}
.HeaderLogoCircleImgRight {
  left: 21.47px;
     @media @before-w876 {
     left: 16.4px;
     top: 9px;
   }
}
.HeaderLogoImgImg {
  width: 40px;
  height: 40px;
  margin-right: 12.5px;
  @media @before-w876 {
    width: 30px;
    height: 30px;
    margin-right: 5px;
  }
}

.HeaderLogoImgText {
  width: 53.19px;
  height: 12.03px;
  @media @before-w876 {
    width: 40px;
    height: 12px;
  }
}

nav {
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 52%;
  @media @before-w660 {
    justify-content: space-between;
    height: 50px;
    background: white;
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
  }

  ul {
    display: flex;
    list-style-type: none;
    @media @before-w660 {
      width: 100%;
    }
  }

  li {
    margin-right: 20px;
    @media @before-w960 {
      margin-right: 10px;
    }
    @media @before-w660 {
      width: 18%;
      margin-right: 0;
    }
  }

  a {
    text-decoration: none;
    color: @colorDark;
    opacity: .5;
    @media @before-w768 {
      font-size: 12px;
    }
  }

  a:active {
    opacity: 1;
  }
}

.HeaderEntry {
  height: 70px;
  display: flex;
  align-items: center;
  @media @before-w660 {
    justify-content: space-between;
    height: 50px;
    padding-left: 5%;
    padding-right: 5%;
  }
}

.headerBtnSize.ButtonBackgroundNoneContainer {
  height: 34px;
  @media @before-w876 {
    height: 24px;
  }

  button {
    width: 87px;
    height: 34px;
    margin-right: 20px;
    @media @before-w960 {
      margin-right: 10px;
    }
    @media @before-w876 {
      font-size: 10px;
      width: 77px;
      height: 24px;
      margin-right: 10px;
    }
  }

  .buttonBackgroundWaiteContainer {
    button {
      background: white;
      width: 83px;
      height: 30px;
      margin: 0;
      @media @before-w876 {
        width: 73px;
        height: 20px;
      }
    }
  }
}

.headerBtnBigSize.ButtonBigContainer {
  height: 34px;
  @media @before-w876 {
    height: 24px;
  }

  button {
    width: 196px;
    height: 34px;
    @media @before-w876 {
      font-size: 10px;
      width: 166px;
      height: 24px;
    }
  }

  img {
    position: absolute;
    top: 13px;
    width: 15px;
    height: 9px;
    left: 174px;
    @media @before-w876 {
      top: 8px;
      left: 144px;
    }
  }
}
</style>
