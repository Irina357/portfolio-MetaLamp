<template>
  <div class="ContainerAll">
    <h2>Cards</h2>
    <Entrance :text="bigText" :text1="text"/>
    <Calendar />
  </div>
</template>

<script>
import Entrance from '../components/Entrance'
import Calendar from '../components/Calendar'

export default {
  data () {
    return {
    }
  },
  components: {
    Entrance,
    Calendar
  }
}
</script>

<style lang="less">
.vvv {
  width: 270px;
  height: 152px;
  border: 2px red solid;
}
</style>
