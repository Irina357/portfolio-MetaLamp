<template>
  <div class="ContainerForms">
    <h2>Войти</h2>
    <input class="inputLarge inputLargeEntranceMb" type="email" placeholder="email">
    <input class="inputLarge inputLargeEntranceMb20" type="password" placeholder="Пароль">
    <ButtonBig :text="bigText"/>
    <div class="ContainerFlexBetween ContainerFlexBetweenEntrance">
      <p>
        Нет аккаунта на Toxin?
      </p>
      <div>
        <ButtonBackgroundNone :text1="text1"/>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonBig from './ButtonBig'
import ButtonBackgroundNone from './ButtonBackgroundNone'
export default {
  data () {
    return {
      bigText: 'Войти',
      text1: 'создать'
    }
  },
  components: {
    ButtonBig,
    ButtonBackgroundNone
  }
}
</script>
<style lang="less">
@import '../style/StyleAll';
@import '../style/variables';
.ContainerForms {
  h2 {
    .fontSize24;
    margin-bottom: 20px;
  }
}
.inputLargeEntranceMb {
  margin-bottom: 10px;
}
.inputLargeEntranceMb20 {
  margin-bottom: 20px;
}
.ContainerFlexBetweenEntrance {
  align-items: center;
  margin-top: 30px;
}
</style>
