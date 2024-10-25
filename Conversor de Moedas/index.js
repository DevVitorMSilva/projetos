const button = document.getElementById('conversion-button')
const elementResult = document.getElementById('conversion-result')
const inputAmount = document.getElementById('amount')

// Formata o valor do input
inputAmount.addEventListener('input', function() {
    let value = this.value.replace(/\D/g, '')
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    this.value = value
})

// Calcula o resultado da conversão
function Calculate(bid, amount) {
    return bid * amount
}

button.addEventListener('click', () => {
    const amount = inputAmount.value.replace(/\./g, '')
    inputAmount.value = ""
    const currency1 = document.getElementById("currency-1").value
    const currency2 = document.getElementById("currency-2").value
    let exchangeCurrency = (`${currency1}-${currency2}`)
    axios.get(`https://economia.awesomeapi.com.br/json/last/${exchangeCurrency}`)
        .then(response => {
            const data = response.data;
            const currencyKey = Object.keys(data)[0]
            const bid = parseFloat(data[currencyKey].bid)
            let conversionCalculate = Calculate(bid, amount)
            elementResult.innerHTML = conversionCalculate.toFixed(2)
        })
        .catch(function (error) {
            elementResult.innerHTML = ('Erro ao fazer a requisição')
            console.log(error)
        })

})

