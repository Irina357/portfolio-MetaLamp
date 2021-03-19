<template>
  <div>
    <div v-for="(str, index) in this.checkboxListArry" :key="index">
      <label class="custom-checkbox">
        <input type="checkbox" name="name" value="yes" id="index">
        <span class="RichCheckboxTitle CheckboxButtonSpunWidth">{{ str.checkboxListText }}</span>
        <p class="RichCheckboxText">{{str.text}}</p>
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
          checkboxListText: 'Широкий коридор',
          id: 1,
          text: 'Ширина коридоров в номере не менее 91 см'
        },
        {
          checkboxListText: 'Помошник для инвалидов',
          id: 2,
          text: 'На 1 этаже Вас встретит специалист и проводи до номера'
        }
      ]
    }
  }
}
</script>
<style lang="less">
@import '../style/StyleAll';
@import '../style/variables';
.CheckboxButtonSpunWidth {
  max-width: 250px;
}
.RichCheckboxTitle {
  .fontSize14;
  font-weight: bold;
}
.RichCheckboxText {
  font-family: Montserrat Arial;
  width: 236px;
  margin-left: 30px;
  margin-bottom: 11px;
  font-size: 12px;
  line-height: 14px;
  color: @colorDark;
  opacity: .5;
}
</style>
