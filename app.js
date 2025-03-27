console.log("Roselene")
console.log(42)
console.warn("atenção")
console.error("um erro")
/*
3 forma de criar variáveis
var
let --> vamos usar essa
const
*/
let nome = "Roselene"
let idade = 42
let telefone = null
console.log(nome, idade)
nome = "Roselene Silva"
console.log(nome)

let nomeCompleto = prompt("Informe seu nome completo")
console.log(nomeCompleto)
//alert("Seja bem vindo + nomeCompleto")
//document.write("Seja bem vindo(a) " + nomeCompleto)
let cor = prompt("Informe uma cor: \n1 azul \n 2 vermelho \n 3 preto")
let corEscolhida = null

if(cor == "1"){
    corDeFundo = "blue"
}else if(cor == "2"){
    corDeFundo = "red"
}else if(cor == "3"){
    corDeFundo
}else{
    corDeFundo = "yellow"
}

document.body.style.backgroundColor = corDeFundo