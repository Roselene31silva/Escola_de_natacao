let num1 = prompt("Digite o primeiro número: ")
let num2 = prompt("Digite o segundo número: ")
let operador = prompt("Informe o operador matematico: + - / * ")

if (operador == "+") {
    let resultado = parseFloat(num1) + parseFloat(num2)
    alert("O resultado da soma é: " + resultado)
} else if (operador == "-") {
    let resultado = parseFloat(num1) - parseFloat(num2)
    alert("O resultado da subtraçaõ é: " + resultado)
} else if (operador == "/") {
    let resultado = parseFloat(num1) / parseFloat(num2)
    alert("O resultado da divisão é: " + resultado);
} else if (operador == "*") {
    let resultado = parseFloat(num1) * parseFloat(num2)
    alert("Resultado: " + resultado);
} else {
    alert("Operação inexistente");
}