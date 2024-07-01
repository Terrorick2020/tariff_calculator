<template>
    <div  class="result-display">
      <h2>Итоговая сумма:</h2>
      <p v-if="tariff && currency && period">{{ calculateTotal() }} {{ currency }}</p>
      <p v-else>----</p>
    </div>
  </template>
  
<script>
  export default {
    props: ['tariff', 'currency', 'period', 'exchangeRates'],
    methods: {
      calculateTotal() {
        const rates = {
          'standard': { month: 100, year: 1000 },
          'advanced': { month: 150, year: 1400 }
        };
        const baseRate = rates[this.tariff][this.period];
        const exchangeRate = this.currency === 'RUB' ? 1 : this.exchangeRates[this.currency];
        return (baseRate * exchangeRate).toFixed(2);
      }
    }
  };
</script>

<style lang="scss" scoped>
.result-display {
  margin-top: 50px;

  h2 {
    font-size: 35px;
  }

  p {
    font-size: 30px;
  }
}
</style>