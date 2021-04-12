<template>
  <div class="ContainerAll">
    <div class="AxiosTitle">
      <h4>Курс валют на</h4>
      <div>
        {{ day }}
      </div>
      <div>
        <p>0</p>{{ month }}
      </div>
      <div>
        {{ year }}
      </div>
    </div>
    <div class="Axsios">
      <ul>
        <li v-for="(str, index) in this.courses" :key="index">
          <h6>{{ str.ccy }}:</h6>
          <p>Buy {{ str.buy }},</p> Sale {{ str.sale }}
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
      day: new Date().getDate(),
      month: new Date().getMonth() + 1
    }
  },
  mounted () {
    axios.get(' https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
      .then(response => (this.courses = response.data))
  }
}
</script>
<style lang="less">
@import '../style/StyleAll';
@import '../style/variables';

.Axsios {
  width: 150px;
  margin: 0 auto;
  padding-bottom: 100px;
  border-bottom: 1px black solid;
  ul {
    list-style-type: none;
  }
  li {
    .fontSize14;
    margin-bottom: 20px;
  }
  h6 {
    .fontSize19;
    margin-bottom: 10px;
  }
}
.AxiosTitle {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-top: 100px;
  width: 320px;
  div {
    display: flex;
    margin-left: 5px;
    .fontSize24;
    color: @colorPurle;
  }
  h4 {
    .fontSize24;
    margin-right: 10px;
  }
}
</style>
