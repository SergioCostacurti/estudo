const x = ''
// string vazia é false

const y = 0
//steing tbm é false

const a = null 
const b = undefined
// tambem sao false

console.log(!!x)
console.log(!!y)
console.log(!!a)
console.log(!!b)

const list = []
const object = {}
//objetos e listas vazias sao true

console.log(!!list)
console.log(!!object)

console.log(!object)
//uma exclamação so inverte o booleano

