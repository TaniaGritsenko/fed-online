//1. Створення класу та об'єкта:
//Створіть клас Person з властивостями name та age.
//Створіть об'єкт з цього класу з ім'ям "John" та віком 30.
console.log("Завдання 1.");
class Person{
    constructor (name, age){
        this._name = name;
        this._age = age;
    }
}
let classPerson = new Person('John', 30);
console.log(classPerson);

//2. Методи класу:
//Розширте клас Person, додайте метод sayHello, який виводить повідомлення з привітанням та ім'ям особи.
console.log("Завдання 2.");
class Person1{
    constructor (name, age){
        this._name = name;
        this._age = age;
    }
    sayHello(){
        console.log(`Привіт мене звати ${this._name}, мені ${this._age} років`);
    }
}
let classPerson1 = new Person1('John', 30);
classPerson1.sayHello();

//3. Наслідування:
//Створіть клас Student, який наслідує від класу Person.
//Додайте властивість studentId до класу Student.
//Додайте метод study, який виводить повідомлення про вивчення студентом.
console.log("Завдання 3.");
class Student extends Person1{
    constructor(name, age, studentId) {
        super(name, age);
        this._studentId = studentId;
    }
    study() {
        console.log(`${this._name} навчається. Група: ${this._studentId}`);
    }
}
let student1 = new Student('John', 30, 'OOM-120');
console.log(student1);
student1.sayHello()
student1.study();