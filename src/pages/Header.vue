<template>
  <div class="container_All">
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

<style scoped lang="less">

.container_All {
  max-width: 1440px;
  margin: 0 auto;
  box-sizing: border-box;
}
.header_Container {
  display: flex;
  justify-content: space-between;
}
</style>
