<template>
  <div>
    <button class="LikeButton" @click="addLike" v-bind:disabled="isButtonDisabled" v-bind:class="{LikeButtonActive: isButtonLikeNotActive}">
      <img src="../assets/favorite_border-24px.svg" class="LikeButtonImg" v-show="isButtonLikeActive">
      <img src="../assets/favorite-24px.svg" class="LikeButtonImg"  v-show="isButtonLikeNotActive">
      <div>
        <p class="LikeButtonText">{{this.countLike}}</p>
      </div>
    </button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isButtonDisabled: false,
      isButtonLikeNotActive: false,
      isButtonLikeActive: true,
      countLike: 3
    }
  },
  methods: {
    addLike () {
      this.isButtonDisabled = !this.is
      this.countLike++
      this.isButtonLikeActive = !this.isButtonLikeActive
      this.isButtonLikeNotActive = !this.isButtonLikeNotActive
    }
  }
}
</script>
<style lang="less">
@import '../style/variables';
@import '../style/StyleAll';
.LikeButton {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 4.5px;
  padding-right: 12px;
  width: 40px;
  height: 20px;
  border: rgba(31, 32, 65, 0.25) 1px solid;
  background: white;
  border-radius: 10px;
}
.LikeButtonActive {
  border: @colorPurle 1px solid;
}
.LikeButtonImg {
  width: 8px;
  height: 7.5px;
}
.LikeButtonText {
  font-family: Montserrat Arial;
  font-size: 10px;
  line-height: 12.19px;
  color: @colorDark;
  opacity: .25;
}
</style>
