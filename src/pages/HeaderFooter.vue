<template>
  <div class="ContainerAll HeaderFooterContainer">
    <Header />
    <div class="HeaderFooterContainerFooter">
    <Footer />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="less">
@import '../style/StyleAll';
@import '../style/variables';
  .HeaderFooterContainer {
    border: #bc9cff 1px solid;
    padding-top: 140px;
  }
.HeaderFooterContainerFooter {
  margin-top: 40px;
}
</style>
