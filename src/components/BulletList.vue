<template>
  <div>
    <ul class="BulletListUl" v-for="(text, index) in this.bulletList" :key="index">
      <li class="BulletListText">{{ text.bulletListText }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      bulletList: [
        { bulletListText: 'Нельзя с питомцами' },
        { bulletListText: 'Без вечеринок и мероприятий' },
        { bulletListText: 'Время прибытия после 13:00, а выезд -поле 12:00' }
      ]
    }
  }
}
</script>
<style lang="less">
@import '../style/variables';
@import '../style/StyleAll';
.BulletListUl {
  margin-left: 16px;
  width: 261px;
}
.BulletListText {
  .fontSize14;
  opacity: .75;
}
</style>
