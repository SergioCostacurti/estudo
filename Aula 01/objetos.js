const pessoa = {
    nome: 'Sergio',
    sobrenome: 'Costacurti',
    idade: '22',
    hobbie: ['ler', 'jogar bola'],
    cachorro:{                     //<-- criar objetos dentro de objetos
        nome: 'gabi',
        idade: '12',
    },
}

//const nome = pessoa.nome
//const sobrenome  = pessoa.sobrenome
//const idade = pessoa.idade
//const hobbies = pessoa.hobbie

//const hobbie1 = pessoa.hobbie[1]   <-- como acessar uma lista em um objeto

//MESMA COISA QUE ACIMA
const {nome: primeironome,
    sobrenome,
    idade,
    hobbie,
    cachorro
} = pessoa


console.log(primeironome)
console.log(sobrenome)
console.log(idade)
console.log(hobbie)
console.log(cachorro)

console.log(pessoa.cachorro.idade)  // <-- acessar objeto dentro de objeto

//pessoa.cachorro = 'gabi'// <-- adicionar propriedades em um objeto
//console.log(pessoa.cachorro)
