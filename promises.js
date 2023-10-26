// // promises:

// //essa promisse devolve uma funcao no estado pending
// function calculoDemorado(numero){
//     // executar em tempo linear em n. O(n)
//     const p = new Promise(function(resolve, reject){
//         // promise é um objeto que você identifica e que vai ficar responsável por uma função potencialmente demorada
//         let res = 0
//         for (let i=1; i <= numero; i++) 
//             res += i
//         resolve(res)
//     })
//     return p
// }

// //const resultado = calculoDemorado(10)
// //console.log(resultado)
// //console.log('outras coisas')

// const promessa = calculoDemorado(10)
// // faça o cálculo demorado e então (deixar a função regitrada para execução no futuro)
// // quando chamamos a função resolve, estamos chamando a própria função que passamos como parâmetro no then
// promessa.then((valor) => {console.log(`valor calculado: ${valor}`)})
// console.log('outras coisas')
// // o fluxo principal continua enquanto a promise é gerada - e ela é calculada depois.


// //essa promise devolve uma função já no estado fullfilled, e não no estado pending, porque a resposta é imediata
// const calculoRapidinho = (numero) => {
//     return Promise.resolve(
//         (numero / 2) * (numero + 1)
//     )
// }
// calculoRapidinho(10).then(function(res){console.log(res)})

const calcular = (numero) => {
    // //se o usuario informar um numero positivo, fazer como antes
    // if (numero >= 0){
    //     return Promise.resolve(
    //         (numero / 2) * (numero + 1)
    //     )
    // }
    // //se não, ou seja, se ele informar um numero negativo, devolver uma promise no estado rejected, com a mensagem "o numero deve ser positivo"
    // else (numero < 0)
    //     return Promise.reject (
    //         "O numero deve ser positivo"
    // )

    //refazer usando o operador ternario
    return (
        numero >= 0
        ? Promise.resolve((numero / 2) * (numero + 1))
        : Promise.reject("O numero deve ser positivo")
    )
}
calcular(10)
.then(res => console.log(res)) //aqui é chamada caso caia no resolve
.catch(erro => console.log("Erro: " + erro)) //aqui é chamada caso seja reject

calcular(-2)
.then(res => console.log(res))
.catch(erro => console.log("Erro: " + erro))