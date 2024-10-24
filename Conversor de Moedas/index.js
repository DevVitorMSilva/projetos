const button = document.getElementById('conversion-button')
const elementResult = document.getElementById('conversion-result')

function Concatenate(a, b) {
    let concatenateResult = (a + "-" + b)
    return concatenateResult
}

function Calculate(bid, amount) {
    let exchangeResult = (bid * amount)
    return exchangeResult
}

button.addEventListener('click', () => {
    const inputAmount = document.getElementById('amount')
    const amount = inputAmount.value
    inputAmount.value = ""
    const currency1 = document.getElementById("currency-1").value
    const currency2 = document.getElementById("currency-2").value
    let exchangeCurrency = Concatenate(currency1, currency2)
    axios.get(`https://economia.awesomeapi.com.br/json/last/${exchangeCurrency}`)
        .then(response => {
        const data = response.data;
        const currencyKey = Object.keys(data)[0];
        const bid = parseFloat(data[currencyKey].bid)
        let conversionCalculate = Calculate(bid, amount)
        elementResult.innerHTML = conversionCalculate.toFixed(2)
    })
    .catch(function(error) {
        elementResult.innerHTML = ('Erro ao fazer a requisição')
        console.log(error)
    })

})