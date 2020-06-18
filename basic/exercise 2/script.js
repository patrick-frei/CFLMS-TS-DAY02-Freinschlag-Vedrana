"use strict";
class Person2 {
    constructor(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    pitch() {
        return `Hello there, my name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
    }
}
class Person3 extends Person2 {
    constructor(name, age, jobTitle, salary, jobLocation) {
        super(name, age, jobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }
    pitch2() {
        return `${super.pitch()} and I get ${this.salary} every month, and I work in ${this.jobLocation}`;
    }
}
console.log(new Person2("Hans", 30, "Developer").pitch());
console.log(new Person3("Hans", 30, "Developer", 2000, "@home").pitch2());
