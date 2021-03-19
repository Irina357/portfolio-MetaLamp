<template>
  <div>
    <div v-for="(str, index) in this.checkboxListArry" :key="index">
      <label class="custom-checkbox">
        <input type="checkbox" name="name" value="yes" id="index">
        <span class="CheckboxListBodyText CheckboxButtonSpunWidth">{{ str.checkboxListText }}</span>
      </label>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checkboxListArry: [
        {
          checkboxListText: 'Можно курить',
          id: 1
        },
        {
          checkboxListText: 'Можно с питомцами',
          id: 2
        },
        {
          checkboxListText: 'Можно пригласить гостей (до 10 человек)',
          id: 3
        }
      ]
    }
  }
}
</script>
<style lang="less">
@import '../style/variables';
@import '../style/StyleAll';
.CheckboxButtonSpunWidth {
  max-width: 250px;
}
</style>
