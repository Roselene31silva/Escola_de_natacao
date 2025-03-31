let nomeCompleto = prompt("Informe seu nome completo")
console.log(nomeCompleto)

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