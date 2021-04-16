<template>
  <div>
    <h1 class="calendar">Calendar</h1>
    <table class="table">
    <thead>
        <tr>
            <td>
                <button v-on:click="decrease"></button>
            </td>
            <td colspan="5"> {{monthes[month]}} {{year}} </td>
            <td>
                <button v-on:click="increase"></button>
            </td>
        </tr>
        <tr>
            <td v-for="d in day" :key="d">{{d}}</td>
        </tr>
    </thead>
    <tbody>
    <tr v-for="week in calendar()" :key="week">
      <td v-for="(day1, index) in week" :key="index" @click="alt(day1.index)" class="tab">{{day1.index}}</td>
    </tr>
    </tbody>
</table>
    <button type="button" @click="calendar">Calendar</button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      dFirstMonth: 1,
      day: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
      monthes: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
      date: new Date(),
      textInput: ''
    }
  },
  methods: {
    calendar: function () {
      const days = []
      let week = 0
      days[week] = []
      const dlast = new Date(this.year, this.month + 1, 0).getDate()
      for (let i = 1; i <= dlast; i++) {
        if (new Date(this.year, this.month, i).getDay() !== this.dFirstMonth) {
          const a = { index: i }
          days[week].push(a)
          console.log(days[week])
        } else {
          week++
          days[week] = []
          const a = { index: i }
          days[week].push(a)
        }
      }
      if (days[0].length > 0) {
        for (let i = days[0].length; i < 7; i++) {
          days[0].unshift(' ')
        }
      }
      return days
    },
    alt (vvv) {
      alert(vvv)
      this.textInput = vvv
      alert(this.textInput)
    }
  }
}
</script>

<style lang="less">
@import '../style/StyleAll';
@import '../style/variables';
.calendar {
  color: #6fcf97;
}
.tab {
  border: #8ba4f9 1px solid;
}
</style>
