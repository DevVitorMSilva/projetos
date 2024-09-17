let inputNome = document.getElementById('nome')
let alturaInput = document.getElementById('altura')
let pesoInput = document.getElementById('peso')
let botaoAdd = document.getElementById('botao-calcular')
let resultadoInput = document.getElementById('resultado')

botaoAdd.addEventListener('click', function () {
    let altura = alturaInput.value / 100
    let peso = pesoInput.value
    let resultado = peso / (altura * altura)

    let categoriaIMC
    if (resultado < 18.5) {
        categoriaIMC = 'Baixo';
    } else if (resultado >= 18.5 && resultado < 25) {
        categoriaIMC = 'Normal';
    } else if (resultado >= 25 && resultado < 30) {
        categoriaIMC = 'Sobrepeso';
    } else if (resultado >= 30) {
        categoriaIMC = 'Obeso';
    } else {
        categoriaIMC = 'Inválido';
    }
    
    resultadoInput.value = ('Olá ' + inputNome.value + ', seu IMC final é: ' + resultado.toFixed(2) + " = " + categoriaIMC)
})