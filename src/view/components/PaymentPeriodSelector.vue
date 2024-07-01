<template>
    <div class="payment-period-selector">
      <h2>Выберите период оплаты</h2>
      <select @change="onSelectPeriod($event)">
        <option value="month">Ежемесячно</option>
        <option value="year">Ежегодно</option>
      </select>
    </div>
</template>
  
<script>
  export default {
    methods: {
      onSelectPeriod(event) {
        this.$emit('select-period', event.target.value);
      }
    }
  };
</script>

<style lang="scss" scoped>
.payment-period-selector {
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