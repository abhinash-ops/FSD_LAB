const person = {
    name: "Abhinash",
    age: 20,
    gender: "male",
    greet() {
        console.log(`Hello ${this.name}`);
    }
}

person.isAdult = () => {
    if (person.age >= 18) {
        return true;
    } else
        return false;
}

console.log(person);
console.log(person.isAdult())