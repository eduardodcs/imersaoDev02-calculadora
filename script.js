var visor = document.getElementById("calculadora_visor")
var valorTexto = ""
var valorTemp = ""
var valor1
var valor2
var operador
var valorResultado

function zerarValores() {
  valorTexto = ""
  valorTemp = ""
  valor1 = null
  valor2 = null
  operador = null
  valorResultado = null
  visor.innerHTML = "<p></p>"
}


function main(e) {
  if (e == "=") {
    if (valorTexto != ""){
      if (verificaPrimeiroValorNull()){
        valor1 = parseInt(valorTemp)
        valorResultado = parseInt(valorTemp)
        console.log(valorResultado)
      } else {
        valor2 = parseInt(valorTemp)
        calcular()
        exibirResultado()
        valorTexto = valorResultado
      }
    }

  } else if (ehOperador(e)) {
    if (valorTexto != ""){
      if (verificaPrimeiroValorNull()){
        valor1 = parseInt(valorTemp)
        valorTemp = ""
        exibirValorNoVisor(e)
        operador = e
      } else {
        valor2 = parseInt(valorTemp)
        calcular()
        valor2 = ""
        valorTemp = ""
        valor1 = valorResultado
        operador = e
        exibirValorNoVisor(e)
        console.log(valorResultado)
      }
    }
  } else {
    exibirValorNoVisor(e)
    valorTemp = valorTemp + e
  }
}

function verificaPrimeiroValorNull(){
  if (valor1 == null){
    return true
  }
  return false
}

function calcular(){
  switch (operador) {
    case "+": {valorResultado = valor1 + valor2; break}
    case "-": {valorResultado = valor1 - valor2; break}
    case "x": {valorResultado = valor1 * valor2; break}
    case "/": {valorResultado = valor1 / valor2; break}
  }
}

function exibirValorNoVisor(e) {
  valorTexto = valorTexto + e
  visor.innerHTML = "<p>" + valorTexto + "</p>" 
}

function exibirResultado() {
  visor.innerHTML = "<p>" + valorResultado + "</p>" 
}

function ehOperador(e){
  if(e == "+" || e == "-" || e == "x" || e == "/"){
    return true
  }
  return false
}