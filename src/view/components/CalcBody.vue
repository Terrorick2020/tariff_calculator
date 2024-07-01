<template>
    <div class="calculator">
        <div class="calculator__conteiner">
            <h1 class="calculator__title">Тарифный калькулятор</h1>
            <TariffSelector @select-tariff="setTariff"/>
            <CurrencySelector :exchange-rates="exchangeRates" @select-currency="setCurrency"/>
            <PaymentPeriodSelector @select-period="setPeriod"/>
            <ResultDisplay 
              :tariff="selectedTariff" 
              :currency="selectedCurrency" 
              :period="selectedPeriod" 
              :exchange-rates="exchangeRates"
            />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import TariffSelector from './TariffSelector.vue';
import CurrencySelector from './CurrencySelector.vue';
import PaymentPeriodSelector from './PaymentPeriodSelector.vue';
import ResultDisplay from './ResultDisplay.vue';


export default {
    name: 'CalcBody',
    components: {
        TariffSelector,
        CurrencySelector,
        PaymentPeriodSelector,
        ResultDisplay
    },
    data() {
        return {
        exchangeRates: {},
        selectedTariff: null,
        selectedCurrency: 'RUB',
        selectedPeriod: 'month'
        };
    },
    methods: {
        setTariff(tariff) {
        this.selectedTariff = tariff;
        },
        setCurrency(currency) {
        this.selectedCurrency = currency;
        },
        setPeriod(period) {
        this.selectedPeriod = period;
        },
        fetchExchangeRates() {
        axios.get('https://api.exchangerate-api.com/v4/latest/RUB')
            .then(response => {
            this.exchangeRates = response.data.rates;
            })
            .catch(error => {
            console.error("There was an error fetching the exchange rates!", error);
            });
        }
    },
    created() {
        this.fetchExchangeRates();
    }
    };
</script>

<style lang="scss">
.calculator {
    min-height: 70lvh;
    padding: 0 10%;
    display: flex;
    justify-content: center;

    .calculator__conteiner {
        margin: 140px 0;
        backdrop-filter: blur(5px);
        width: 600px;
        border: 2px solid rgb(57, 57, 57);
        border-radius: 10px;
        padding: 20px 25px;
        box-shadow: 0 0 5px white;

        .calculator__title {
            font-size: 40px;
            font-weight: 700;
            text-align: center;
        }
    }
}
</style>