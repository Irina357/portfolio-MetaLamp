<template>
  <div>
    <div class="RateButtonsContainer">
      <div v-for="(star, index) in this.stars" :key="index">
        <div @click="addStartStatus(index)">
          <img src="../assets/grade-24px.svg" class="RateButtonsStar" v-show="star.starStatus" alt="star">
        </div>
      </div>
      <div v-for="(star, index) in this.starsBackground" :key="index">
        <div @click="addStartStatus(index)">
          <img src="../assets/star_border-24px.svg" class="RateButtonsStar" v-show="star.starStatus" alt="star">
        </div>
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
          starStatus: true
        },
        {
          id: 1,
          starStatus: true
        },
        {
          id: 2,
          starStatus: true
        },
        {
          id: 3,
          starStatus: true
        },
        {
          id: 4,
          starStatus: true
        }
      ],
      starsBackground: [
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
      this.stars.forEach(function (item, i) {
        item.starStatus = false
      })
      this.stars.forEach(function (item, i) {
        if (i <= index) { item.starStatus = true }
      })
      this.starsBackground.forEach(function (item, i) {
        item.starStatus = true
      })
      this.starsBackground.forEach(function (item, i) {
        if (i <= index) { item.starStatus = false }
      })
    }
  }
}
</script>
<style lang="less">
@import '../style/variables';
@import '../style/StyleAll';

.RateButtonsContainer {
  color: green;
  display: flex;
  justify-content: flex-end;
  width: 120px;
}
.RateButtonsStar {
  width: 24px;
  height: 24px;
}
.StarActive {background: @colorPurle}
</style>
