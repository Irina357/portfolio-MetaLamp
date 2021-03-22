<template>
  <div>
    <div class="RangeLabelContainer">
      <div>
          <label for="input1" class="RangeLabel RangeLabelLeft">
            {{ imgSize.currentWigth }} -
          </label>
        </div>
      <div>
          <label for="input2" class="RangeLabel RangeLabelRight">
            {{ imgSize1.currentWigth }}
          </label>
        </div>
    </div>
    <div class="RangeContainerAll">
      <div class="RangeContainer">
        <div>
          <input type="range" :value="imgSize.currentWigth" :min="imgSize.minWight" :max="imgSize.maxWight" id="input1"
                 @input="imgSize.currentWigth = $event.target.value" class="Range">
        </div>
        <div class="ScaleDark" :style="imgStyle">
        </div>
        <div class="ScaleGreen">
        </div>
      </div>
      <div class="RangeContainer">
        <div>
          <input type="range" :value="imgSize1.currentWigth" :min="imgSize1.minWight" :max="imgSize1.maxWight"
                 id="input2"
                 @input="imgSize1.currentWigth = $event.target.value" class="Range">
        </div>
        <div class="ScaleDark1" :style="imgStyle1">
        </div>
        <div class="ScaleGreen1">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgSize: {
        maxWight: 126,
        minWight: 0,
        maxHeigth: 300,
        minHeigth: 100,
        currentWigth: 126,
        currentHeigth: 200
      },
      imgSize1: {
        maxWight: 133,
        minWight: 0,
        maxHeigth: 300,
        minHeigth: 100,
        currentWigth: 133,
        currentHeigth: 200
      }
    }
  },
  computed: {
    imgStyle () {
      return {
        width: `${this.imgSize.currentWigth - 8}px`
      }
    },
    imgStyle1 () {
      return {
        width: `${this.imgSize1.currentWigth}px`
      }
    }
  }
}
</script>
<style lang="less">
@import '../style/variables';
@import '../style/StyleAll';
#input1 {
  overflow: hidden;
  width: 128px;
  -webkit-appearance: none;
  background-color: white;
  border: none;
  outline: none;
  z-index: 3;
}
#input1::-webkit-slider-runnable-track {
  height: 14px;
  -webkit-appearance: none;
  color: #13bba4;
  margin-top: -1px;
  z-index: 3;
}
#input1[type='range']::-webkit-slider-thumb {
  width: 12px;
  height: 12px;
  -webkit-appearance: none;
  cursor: ew-resize;
  background: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);
  border-radius: 50%;
  border: white 2px solid;
  box-shadow: -80px 0 0 80px white;
  margin-top: 2px;
  z-index: 3;
}
#input1::-moz-range-progress {
  background-color: white;
  z-index: 3;
}
#input1::-moz-range-track {
  background-color: white;
  z-index: 3;
}
#input1::-ms-fill-lower {
  background-color: red;
  z-index: 3;
}
#input1::-ms-fill-upper {
  background-color: red;
  z-index: 3;
}
.RangeContainerAll {
  display: flex;
  justify-content: start;
  width: 266px;
}
.RangeContainer {
  position: relative;
  height: 47px;
}
.RangeLabelContainer {
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 266px;
  height: 35px;
}
.ScaleDark {
  position: absolute;
  top: 6px;
  width: 98px;
  height: 4px;
  background: white;
  border: rgba(31,32,65,0.25) 1px solid;
  border-right: none;
  border-radius: 3px;
  z-index: 4;
}
.ScaleGreen {
  position: absolute;
  top: 6px;
  left: 0;
  width: 131px;
  height: 6px;
  background: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);
  z-index: 1;
}
#input2 {
  overflow: hidden;
  width: 133px;
  -webkit-appearance: none;
  background-color: white;
  border: none;
  outline: none;
  z-index: 3;
}
#input2::-webkit-slider-runnable-track {
  height: 14px;
  -webkit-appearance: none;
  color: #13bba4;
  margin-top: -1px;
  z-index: 3;
}
#input2[type='range']::-webkit-slider-thumb {
  width: 12px;
  height: 12px;
  -webkit-appearance: none;
  cursor: ew-resize;
  background: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);
  border-radius: 50%;
  border: white 2px solid;
  box-shadow: -80px 0 0 80px white;
  margin-top: 2px;
  z-index: 3;
}
#input2::-moz-range-progress {
  background-color: white;
  z-index: 3;
}
#input2::-moz-range-track {
  background-color: white;
  z-index: 3;
}
#input2::-ms-fill-lower {
  background-color: red;
  z-index: 3;
}
#input2::-ms-fill-upper {
  background-color: red;
  z-index: 3;
}
.ScaleDark1 {
  position: absolute;
  top: 6px;
  left: -8px;
  width: 130px;
  height: 6px;
  background: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);
  z-index: 4;
}
.ScaleGreen1 {
  position: absolute;
  top: 6px;
  left: 3px;
  width: 123px;
  height: 4px;
  background: white;
  border: rgba(31,32,65,0.25) 1px solid;
  border-radius: 3px;
  z-index: 1;
}
.RangeLabel {
  position: absolute;
  .fontSize12;
  opacity: .5;
}
.RangeLabelLeft {
  left: 218px;
}
.RangeLabelRight {
  left: 248px;
}
</style>
