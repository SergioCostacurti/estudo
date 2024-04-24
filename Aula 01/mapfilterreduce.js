//MAP

const numbers = [1, 2, 3, 4, 5]

const numbersmult2 = numbers.map(function(number) {
    return number * 2 

})

//console.log(numbersmult2);

//FILTER

const idades = [8, 13, 27, 30, 22, 40]

const idadespares = idades.filter(function(idade) {
    return idade % 2 === 0
})

//console.log(idadespares)

//REDUCE

const somaidade = idades.reduce(function(idade, accumulator) {
    return accumulator + idade 
}, 0)


console.log(somaidade)