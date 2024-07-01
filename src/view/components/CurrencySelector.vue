<template>
    <div class="currency-selector">
      <h2>Выберите валюту</h2>
      <select @change="onSelectCurrency($event)">
        <option value="RUB">Российский рубль (RUB)</option>
        <option value="CNY">Китайский юань (CNY)</option>
        <option value="KZT">Казахстанский тенге (KZT)</option>
      </select>
    </div>
</template>
  
<script>
  export default {
    props: ['exchangeRates'],
    methods: {
      onSelectCurrency(event) {
        this.$emit('select-currency', event.target.value);
      }
    }
  };
</script>

<style lang="scss" scoped>
.currency-selector {
  margin-top: 15px;

  select {
    margin-top: 5px;
    width: 100%;
    cursor: pointer;
    height: 35px;
    border-radius: 5px;
    outline: none;
  }
}
</style>