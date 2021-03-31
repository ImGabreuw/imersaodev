var valorEmDolar = prompt("Qual o valor em dolar que você quer converter?")

var valorEmDolarNumero = parseFloat(valorEmDolar)

var valorEmReal = valorEmDolarNumero * 5.5
var valorEmRealFixado = valorEmReal.toFixed(2)

alert(valorEmRealFixado)