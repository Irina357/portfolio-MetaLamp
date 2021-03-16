<template>
  <div class="ColorsTypeContainerAll">
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
        <div class="ColorsTypeTags">
          <p>{{str.colorsTagsTag}}</p>
        </div>
        <div class="ColorTypeText">
          <p>{{str.colorsTagsText}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      colorsAll: [
        { activeclass: 'someColor' },
        { activeclass: 'someColor1' },
        { activeclass: 'someColor2' },
        { activeclass: 'someColor' },
        { activeclass: 'someColor1' },
        { activeclass: 'someColor2' },
        { activeclass: 'someColor2' }
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
          colorsTagsText: 'This one is the sub-section widget title'
        },
        {
          colorsTagsTag: 'H2',
          colorsTagsText: 'Next one is the item title inside widgets'
        },
        {
          colorsTagsTag: 'H3',
          colorsTagsText: 'This is a label or CTA text'
        },
        {
          colorsTagsTag: 'Body',
          colorsTagsText: 'This is the body text which is used for most of the design, like paragraphs, lists, etc.'
        }
      ]
    }
  }
}
</script>

<style lang="less">
@import '../style/StyleAll';
@font-face {
  font-family: Montserrat Arial;
  src: url('../assets/Font/Montserrat.ttf');
}
@font-face {
  font-family: Montserrat_Light Arial;
  src: url('../assets/Font/Montserrat_Light.ttf');
}
.ColorsTypeContainerAll {
  max-width: 1440px;
  margin: 0 auto;
  box-sizing: border-box;
  border: cornflowerblue 1px solid;
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
  margin-bottom: 43px;
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
  .someColor {
    background: @block-background;
  }
  .someColor1 {
    background: red;
  }
  .someColor2 {
    background: greenyellow;
  }
</style>
