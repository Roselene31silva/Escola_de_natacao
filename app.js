function fnSaudacao(){
    let nomeCompleto = "Roselene"
    nomeCompleto = prompt("Informe seu nome")
    alert("Seja bem vindo(a) " + nomeCompleto + " ao meu site!")
}
let nomeCompleto = prompt("Informe seu nome completo")
console.log(nomeCompleto)

function fnTrocarCorDeFundo(){
    let cor = prompt("Informe uma cor: \n1 azul \n 2 vermelho \n 3 preto")
    let corDeFundo = null

    if (cor == "1") {
        corDeFundo = "blue"
    } else if (cor == "2") {
        corDeFundo = "red"
    } else if (cor == "3") {
        corDeFundo
    } else {
        corDeFundo = "yellow"
    }

    document.body.style.backgroundColor = corDeFundo
}

function fnMostrarHoraAtual(){
   const agora = new Date();
   const horas = agora.getHours();
   const minutos = agora.getMinutes();
   const segundos = agora.getSeconds();
   const HoraAtual = `${horas}:${minutos}:${segundos}`;
   console.log("Hora atual: ", HoraAtual);
   alert("Hora Atual: " + HoraAtual );
}

function fnTrocarTitulo(){
    document.getElementById("titulo1").innerText = "Titulo novo do meu Site"

}

function fnIdiomaPortugues(){
    document.getElementById("menu-texto1").innerText = "INICIAL"
    document.getElementById("menu-texto2").innerText = "SERVIÇOS"
    document.getElementById("menu-texto3").innerText = "CONTATOS"
}

function fnIdiomaIngles(){
    document.getElementById("menu-texto1").innerText = "HOME"
    document.getElementById("menu-texto2").innerText = "SERVICES"
    document.getElementById("menu-texto3").innerText = "CONTACT"
}

function fnBanner1(){
    document.getElementById("banner").src="imagem/banner01.jpg"
}

function fnBanner2(){
    document.getElementById("banner").src="imagem/banner02.jpg"
}

