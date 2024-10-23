const button = document.getElementById('conversion-button')

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
    
    

})