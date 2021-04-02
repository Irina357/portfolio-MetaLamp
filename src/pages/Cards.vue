<template>
  <div class="ContainerAll AxiosContainer">
    <Axios />
    <Footer />
  </div>
</template>

<script>
import Axios from '../pages/Axios'
import Footer from '../components/Footer'
export default {
  components: {
    Axios,
    Footer
  }
}
</script>

<style lang="less">
  .AxiosContainer {
    padding-top: 40px;
    color: rosybrown;
  }
</style>
