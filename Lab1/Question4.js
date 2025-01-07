function Student(name, grade) {
    this.name = name;
    this.grade = grade;
    this.study = () => {
        console.log(`${this.name} is studying`);
    }
}
Student.prototype.getGrade = function () {
    return `The grade is ${this.grade}`;
}

let s1 = new Student("Abhinash", 10);
let s2 = new Student("Jesse Pinkman", 6);
let s3 = new Student("walter white", 9);

s1.study();
console.log(s1.getGrade());

s2.study();
console.log(s2.getGrade());

s3.study();
console.log(s3.getGrade());