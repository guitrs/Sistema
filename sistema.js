//Se a peça possuir um peso superir a 100 gramas, pode cadastrar

let peso = 50;

if(peso < 100){
 console.log("A peça precisa pesar no mínim 100g")
}else{
 console.log("A peça possui peso adequado")   
}


//Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprimir uma mensagem informando não ter capacidade suficiente.

let listadePecas = ["Amortecedor", "Disco de Freio", "Motor"]

if(lisatadePecas.length < 10){
    console.log("É possivel cadastrar mais peça")
}else{
    console.log("Não tem mais espaço na lista")
}