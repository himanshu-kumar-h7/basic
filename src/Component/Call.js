// function greet(greetings) {
// console.log(`${greetings}, My name is ${this.name}`)
// }

// const person1 = { name: "Himanshu"}
// greet.call(person1, "Hello")

// Note  
// Suppose you have an object with a method, and another object without that method, but with similar data.
// You want person2 to also use person1's greet method — without copying the function.

const person = {
    name: "Himanshu",
    surname: "Kumar",
    roll: 2323,
    greet: function(){
        console.log("Hello" + this.name)
    }
}

const person3 = {
    name: "Monu"
}

person.greet.call(person3)