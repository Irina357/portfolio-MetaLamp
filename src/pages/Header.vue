<template>
  <div class="container_All">
    <h1>Header</h1>
    <div class="header_Container" >
    <div>
       <router-link :to="{name: 'Colors'}">Colors</router-link>
     </div>
    <div>
       <router-link :to="{name: 'Form'}">Form</router-link>
     </div>
    <div>
       <router-link :to="{name: 'Cards'}">Cards</router-link>
     </div>
    <div>
       <router-link :to="{name: 'HeaderFooter'}">HeaderFooter</router-link>
     </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="less">

.container_All {
  max-width: 1440px;
  margin: 0 auto;
  box-sizing: border-box;
  border: cornflowerblue 1px solid;
}
.header_Container {
  display: flex;
  justify-content: space-between;
}
</style>
