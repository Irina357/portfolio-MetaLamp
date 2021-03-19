<template>
  <div class="RateButtonsContainer">
    <div v-for="(star, index) in this.stars" :key="index">
    <div @click="addStartStatus(index)">
      <img src="../assets/star_border-24px.svg" class="RateButtonsStar" v-bind:class="{StarActive: star.starStatus}">
    </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      stars: [
        {
          id: 0,
          starStatus: false
        },
        {
          id: 1,
          starStatus: false
        },
        {
          id: 2,
          starStatus: false
        },
        {
          id: 3,
          starStatus: false
        },
        {
          id: 4,
          starStatus: false
        }
      ]
    }
  },
  methods: {
    addStartStatus (index) {
      this.stars.forEach(function (star1, i) {
        star1.starStatus = false
      })
      this.stars.forEach(function (item, i) {
        if (i < index + 1) { item.starStatus = true };
      })
    }
  }
}
</script>
<style lang="less">
@import '../style/variables';
@import '../style/StyleAll';

.RateButtonsContainer {
  color: mediumvioletred;
  display: flex;
  justify-content: space-between;
  width: 120px;
}
.RateButtonsStar {
  width: 24px;
  height: 24px;
}
.StarActive {background: @colorPurle}
</style>
