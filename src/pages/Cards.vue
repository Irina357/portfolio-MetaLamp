<template>
  <div class="ContainerAll">
    <Header />
    <Axios />
    <Footer />
  </div>
</template>

<script>
import Axios from '../pages/Axios'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default {
  components: {
    Axios,
    Header,
    Footer
  }
}
</script>

<style lang="less">

</style>
