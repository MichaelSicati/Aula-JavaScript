
/*
var nome = "Michael Sicati Claro Melo";
alert("Bem vindo" + nome);
var lista = ["maÃ§a","pera","abacate"];
lista.push("uva"); Colocou a uva na lista.
lista.pop("maÃ§a"); Retirou a maÃ§a da lista
console.log(lista[2]); Selecionou a fruta na ordem 2 da lista.
console.log(lista.length); Mostra a quantidade de elementos na lista.
console.log(lista.reverse()); Mostra os elementos na ordem reversa.
console.log(lista.toString()); Transforma a lista em String.
console.log(lista.join(" - ")); Transforma a lista em String podendo colocar qualquer coisa entre os elementos.
var idade - prompt("Qual sua idade?"); Coleta informaÃ§Ã£o do usuario. 
*/

/*var count = 0;   Extrutura de repetiÃ§Ã£o while.
while (count < 5){
    console.log(count);
    count = count + 1;  ou  count++
}*/

/*var count;
for(count=0; count <=5; count++){
    alert(count);
}*/

/*var d = new Date();   Mostra o tempo real em que vocÃª se enqudra.
alert(d.getMinutes());
alert(d.getDay());
alert(d.getMonth());
alert(d.getFullYear());*/

function botao(){
   document.getElementById("agradecimento").innerHTML = "Obrigado por clicar.";
}

function novapagina(){
    /*window.location.href = "https://www.google.com/"; /*Ao apertar o botÃ£o, abrira a pagina na mesma aba.*/
    window.open("https://www.google.com/"); /* Ao clicar no botÃ£o abrirÃ¡ a pagina em uma nova aba.*/
}

function mouseover(){
    document.getElementById("mouse").innerHTML = "Obrigado por passar o mouse."; /*Ao passar o mouse na tag escolhida ira aparecer a frase*/

}

function voltar(){
    document.getElementById("mouse").innerHTML = "Passe o mouse aqui."; /*Ao tirar o mouse na tag escolhida ira aparecer a frase*/

}

function funcaoChange(elemento){   /* FunÃ§Ã£o de selecionar uma opÃ§Ã£o de alguma lista. */
    alert(elemento.value);
}


