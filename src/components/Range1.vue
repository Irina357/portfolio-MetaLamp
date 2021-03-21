<template>
  <div>
     <label>
          Ширина: {{ imgSize.currentWigth }}
          <input type="range" :value="imgSize.currentWigth" :min="imgSize.minWight" :max="imgSize.maxWight" id="input1"
                 @input="imgSize.currentWigth = $event.target.value" class="Range">
        </label>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgSize: {
        maxWight: 500,
        minWight: 100,
        maxHeigth: 300,
        minHeigth: 100,
        currentWigth: 400,
        currentHeigth: 200
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
  width: 133px;
  -webkit-appearance: none;
  background-color: greenyellow;
}

#input1::-webkit-slider-runnable-track {
  height: 6px;
  -webkit-appearance: none;
  color: #13bba4;
  margin-top: -1px;
}
input[type='range']::-webkit-slider-thumb {
  width: 20px;
  height: 20px;
  -webkit-appearance: none;
  cursor: ew-resize;
  background: blue;
  border-radius: 50%;
  border: palevioletred 3px solid;
  margin-top: -3px;
  box-shadow: -80px 0 0 80px red;
}
#input1::-moz-range-progress {
  background-color: red;
}

#input1::-moz-range-track {
  background-color: red;
}
#input1::-ms-fill-lower {
  background-color: red;
}
#input1::-ms-fill-upper {
  background-color: red;
}
</style>
