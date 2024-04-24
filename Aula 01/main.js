class Person {
    constructor (nome, sobrenome, idade) {

        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;

    }
    // é possivel criar metodos dentro da classe
    get nomecompleto () {
        console.log(`${this.nome} ${this.sobrenome}`)
    }

    speak(){
        console.log('oi')
    }

}

const person = new Person('Sergio', 'Costacurti', 22)
console.log(person)

console.log(person.nomecompleto)
Person.speak()