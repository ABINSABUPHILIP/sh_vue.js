// ES6+ JavaScript code

const greet = (name) => {
    console.log(`Hello, ${name}!`);
};

class Person {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log(`My name is ${this.name}.`);
    }
}

class LanguageLearner extends Person {
    constructor(name, language) {
        super(name);
        this.language = language;
    }

    practice() {
        console.log(`I am practicing ${this.language}.`);
    }
}

const john = new LanguageLearner('John', 'JavaScript');
john.introduce();
john.practice();