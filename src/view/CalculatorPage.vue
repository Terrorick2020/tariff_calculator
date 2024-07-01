<template>
    <Header />
    <CalcBody />
    <Footer />
</template>
  
<script>
import axios from 'axios';
import Header from './components/Header.vue';
import CalcBody from './components/CalcBody.vue';
import Footer from './components/Footer.vue';



export default {
name: 'CalculatorPage',
components: {
    Header,
    CalcBody,
    Footer
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