//for (let i = 0; i<10; i++){
//    console.log(i)
//}

const carros = ['Ferrari', 'Tesla', 'Mercedes']

//for (let i = 0; i < carros.length; i++){
//    console.log(carros[i])
//}

//é igual o de cima
//for (let carro of carros) {
//    console.log(carro)
//}

carros.forEach(function(carro, index){
    console.log(index)
    console.log(carro)
})

// -------------------------------------------- 
let x = 0

while(x < 10){
    console.log('menor que 10')
    x++
}

const pessoa = {
    nome: 'sergio',
    idade: 21,
}

for (propriedade in pessoa){
    console.log(pessoa[propriedade])
}