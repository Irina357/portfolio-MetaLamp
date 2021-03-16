<template>
  <div>
    <h2>Layouts</h2>
    <Header />
     <router-view></router-view>
  </div>

</template>

<script>
import Header from './Header'
export default {
  components: {
    Header
  }
}
</script>

<style>
</style>
