<template>
  <div class="ContainerAll">
    <div class="Axsios">
      <h4>Курс валют на {{ day}}{{year}}</h4>
      <ul>
        <li v-for="(str, index) in this.courses" :key="index">
          <h6>{{str.ccy}}:</h6>  <p>Buy {{str.buy}},</p> Sale {{str.sale}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      courses: [],
      year: new Date().getFullYear(),
      day: new Date().getDate()
    }
  },
  mounted () {
    axios.get(' https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').then(response => (this.courses = response.data))
  }
}

</script>
<style lang="less">
@import '../style/StyleAll';
@import '../style/variables';
.Axsios {
  width: 150px;
  margin: 0 auto;
  ul {
    list-style-type: none;
  }
  li {
    .fontSize14;
    margin-bottom: 20px;
  }
  h4 {
    .fontSize24;
    margin-bottom: 20px;
    margin-top: 40px;
  }
  h6 {
    .fontSize19;
    margin-bottom: 10px;
  }
}
</style>
