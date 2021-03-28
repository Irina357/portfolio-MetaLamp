<template>
  <div class="ContainerAll HeaderFooterContainer">
    <Header />
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
  components: {
    Header
  }
}
</script>

<style lang="less">
@import '../style/StyleAll';
@import '../style/variables';
  .HeaderFooterContainer {
    border: #bc9cff 1px solid;
    padding-top: 140px;
    background: #e5e5e5;
  }
</style>
