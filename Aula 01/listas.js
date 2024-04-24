//Listas
const names = ['Sergio', 'Joao', 'Julia']

const Joao = names[0]

names.push('Paulo') //push adiciona no final da lista

console.log(names)

names.unshift('Bruno')//unshift adiciona no inicio da lista
console.log(names)

names.pop();// remove o ultimo item da lista

console.log(names)

names[2] = 'Gustavo'

console.log(names)

console.log(names.indexOf('Sergio'))//retorna o index do elemento

let sortednames = names.sort() // .sort ordena a lista

console.log(sortednames)