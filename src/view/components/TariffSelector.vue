<template>
    <div class="tariff-selector">
      <h2>Выберите тариф</h2>
      <select @change="onSelectTariff($event)">
        <option selected :disabled="isSelected" value="none">Выбрать</option>
        <option value="standard">Стандартный - 100 руб/мес или 1000 руб/год</option>
        <option value="advanced">Продвинутый - 150 руб/мес или 1400 руб/год</option>
      </select>
    </div>
</template>
  
<script>
export default {
  data() {
    return {
      isSelected: false
    }
  },
  methods: {
    onSelectTariff(event) {
      this.$emit('select-tariff', event.target.value);
      this.isSelected = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.tariff-selector {
  margin-top: 50px;

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