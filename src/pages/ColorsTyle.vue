<template>
  <div class="ColorsTypeContainerAll ContainerAll">
    <Logo />
    <div class="ColorsTypeColors">
      <div class="ColorsTypePicture">
        <div v-for="(str, index) in this.colorsAll" :key="index">
          <div class="ColorsType_size" v-bind:class="str.activeclass"></div>
        </div>
      </div>
      <div>
      <div v-for="(str, index) in this.colorsName" :key="index">
        <p class="ColorsTypePictureNameText">{{str.colorsNameText}}</p>
        <p class="ColorsTypePictureNameSize">{{str.colorsNameCod}}</p>
      </div>
      </div>
    </div>
    <div class="ColorsTypeType">
      <div class="ColorsTypeContainer" v-for="(str,index) in this.colorsTags" :key="index">
        <div class="ColorsTypeTags" v-bind:class="str.colorsTagsTagStyle">
          <p>{{str.colorsTagsTag}}</p>
        </div>
        <div class="ColorTypeText" v-bind:class="str.colorsTagsTextStyle">
          <p>{{str.colorsTagsText}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '../components/Logo'
export default {
  components: {
    Logo
  },
  data: function () {
    return {
      colorsAll: [
        { activeclass: 'ColorsTypePictureBgDark100' },
        { activeclass: 'ColorsTypePictureBgDark75' },
        { activeclass: 'ColorsTypePictureBgDark50' },
        { activeclass: 'ColorsTypePictureBgDark25' },
        { activeclass: 'ColorsTypePictureBgDark05' },
        { activeclass: 'ColorsTypePicturePurle' },
        { activeclass: 'ColorsTypePictureGreen' }
      ],
      colorsName: [
        {
          colorsNameText: 'Dark Shade 100%',
          colorsNameCod: '#1f2041'
        },
        {
          colorsNameText: 'Dark Shade 100%',
          colorsNameCod: '#1f2041'
        },
        {
          colorsNameText: 'Dark Shade 100%',
          colorsNameCod: '#1f2041'
        },
        {
          colorsNameText: 'Dark Shade 100%',
          colorsNameCod: '#1f2041'
        },
        {
          colorsNameText: 'Dark Shade 100%',
          colorsNameCod: '#1f2041'
        },
        {
          colorsNameText: 'Dark Shade 100%',
          colorsNameCod: '#1f2041'
        },
        {
          colorsNameText: 'Dark Shade 100%',
          colorsNameCod: '#1f2041'
        }
      ],
      colorsTags: [
        {
          colorsTagsTag: 'H1',
          colorsTagsText: 'This one is the sub-section or widget title',
          colorsTagsTextStyle: 'colorsTagsTextSize24',
          colorsTagsTagStyle: 'colorsTagsTagSize24'
        },
        {
          colorsTagsTag: 'H2',
          colorsTagsText: 'Next one is the item title inside widgets',
          colorsTagsTextStyle: 'colorsTagsTextSize19',
          colorsTagsTagStyle: 'colorsTagsTagSize19'
        },
        {
          colorsTagsTag: 'H3',
          colorsTagsText: 'This is a label or CTA text',
          colorsTagsTextStyle: 'colorsTagsTextSize12',
          colorsTagsTagStyle: 'colorsTagsTagSize12'
        },
        {
          colorsTagsTag: 'Body',
          colorsTagsText: 'This is the body text which is used for most of the design, like paragraphs, lists, etc.',
          colorsTagsTextStyle: 'colorsTagsTextSize14',
          colorsTagsTagStyle: 'colorsTagsTagSize14'
        }
      ]
    }
  }
}
</script>

<style lang="less">
@import '../style/StyleAll';
@import '../style/variables';
@font-face {
  font-family: Montserrat Arial;
  src: url('../assets/Font/Montserrat.ttf');
}
@font-face {
  font-family: Montserrat_Light Arial;
  src: url('../assets/Font/Montserrat_Light.ttf');
}

.ColorsTypeContainerAll {
  display: flex;
  justify-content: space-between;
  padding-left: 150px;
  padding-right: 158px;
  padding-top: 145px;
}
.ColorsTypeColors {
  display: flex;
  justify-content: flex-start;
}
.ColorsTypePicture {
  margin-right: 40px;
}
.ColorsType_size {
  width: 70px;
    height: 70px;
  border-radius: 6px;
  margin-bottom: 20px;
}
.ColorsTypePictureName {
  margin-top: 10px;
  margin-bottom: 43px;
}
.ColorsTypePictureNameText {
  margin-top: 10px;
  font-family: Montserrat Arial;
  font-size: 19px;
  line-height: 28px;
  font-weight: bold;
  color: #1f2041;
}
.ColorsTypePictureNameSize {
  font-family: Montserrat_Light Arial;
  margin-bottom: 34px;
  font-size: 19px;
  line-height: 28px;
  font-weight: bold;
  color: #1f2041;
}
.ColorsTypeContainer {
  display: flex;
  margin-bottom: 50px;
}
.ColorsTypeTags {
  width: 37px;
  text-align: right;
}
.ColorTypeText {
  font-family: Montserrat Arial;
  width: 369px;
  margin-left: 30px;
  text-align: left;
}
.ColorsTypePictureBgDark100 {
  .dark100
}
.ColorsTypePictureBgDark75 {
  .dark75
}
.ColorsTypePictureBgDark50 {
  .dark50
}
.ColorsTypePictureBgDark25 {
  .dark25
}
.ColorsTypePictureBgDark05 {
  .dark05
}
.ColorsTypePicturePurle {
  .purle
}
.ColorsTypePictureGreen {
  .green
}
.colorsTagsTextSize24 {
  .fontSize24
}
.colorsTagsTextSize19 {
  .fontSize19
}
.colorsTagsTextSize12 {
  .fontSize12
}
.colorsTagsTextSize14 {
  .fontSize14
}
.colorsTagsTagSize24 {
  .fontSize24Opacity25
}
.colorsTagsTagSize19 {
  .fontSize19Opacity25
}
.colorsTagsTagSize12 {
  .fontSize12Opacity25
}
.colorsTagsTagSize14 {
  .fontSize14Opacity25
}

</style>
