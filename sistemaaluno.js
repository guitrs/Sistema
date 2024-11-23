//Percorrer de Zero até o número de alunos OK.

let numeroDeAlunos = 10;

for (let index = 0; index < numeroDeAlunos; index++){
    console.log(index)


//Se o número for zero, escreva 'zero' e o número correspondente.

    if(index == 0){
        console.log("O número atual é zero")


//Se o numero for par, escreva 'par' e o número correspondente.

    }else if(index %2 == 0){
        console.log("O número é par")

//Se o número for ímpar, escreva 'ímpar' e o número correspondente.


    }else{
        console.log("O número é ímpar")

    }
}
