//Object
let person ={
    name: "Eshwar",
    age: 31,
    grades: [90, 85, 88],
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
}

console.log(person.name)
console.log(person.age)
console.log(person.grades)
person.greet()