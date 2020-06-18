"use strict";
class Person1 {
    constructor(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    pitch() {
        return `Hello there, my name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
    }
}
console.log(new Person1("Hans", 30, "Developer").pitch());
