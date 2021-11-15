// GitHub https://github.com/andrewelizev/a-level-js-hw13

// Lesson 13



class ITCompany {
    create(worker, name, age) {
        if (worker === 'Programmer') {
            return new Programmer(name, age);
        }
        if (worker === 'Tester') {
            return new Tester(name, age);
        }
        throw new Error('No job');
    }
}

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static getType() {
        return console.log('Human');
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}

class Programmer extends Human {
    constructor(name, age) {
        super(name, age);
        this.job = 'Programmer';
    }
    static getJob(object) {
        return console.log(object.job);
    }
}

class Tester extends Human {
    constructor(name, age) {
        super(name, age);
        this.job = 'Tester';
    }
    static getJob(object) {
        return console.log(object.job);
    }
}

// Testing
const Company = new ITCompany();
console.log(Company);

const vasya = Company.create('Programmer', 'Vasya', 25);
console.log(vasya);

const peter = Company.create('Tester', 'Peter', 33);
console.log(peter);

console.log(vasya.getName());
console.log(vasya.getAge());
console.log(peter.getName());
console.log(peter.getAge());

Programmer.getType();
Programmer.getJob(vasya);

Tester.getType();
Tester.getJob(peter);

// Создать фабрику ITCompany и базовый класс Human (его наследуем для каждого работника)
// фабрика ITCompany
// Эта фабрика (ITCompany) будет создавать нам работников IT компании. У каждого работника есть имя, возраст и должность.
// У нас есть 2 должности - Программист и Тестер
// В фабрике ITCompany должен быть 1 метод для создания работников. Метод называется create, принимает в себя все, что нужен для созданиям работника.
// Бозовый класс Human
// В этом классе должен быть статический метод getType, который возвращает строку 'Человек'
// В этом классе (Human) будут 2 свойства в конструкторе - name и age
// Потом должно быть еще 2 метода (уже не в конструкторе) - getName и getAge. В них мы получаем имя и возраст
// Дальше
// Потом нам нужны еще 2 класса под каждую должность - Programmer и Tester
// Они наследуются от Human
// В конструкторы этих классов мы должны добавить еще одно поле job. Для Programmer job = 'Programmer', для Test job = 'Tester'
// В прототипы для объектов, которые создадим от этих классов (от Programmer и Tester) мы добавляем метод для получания их имени
// В каждом классе должен быть статический метод, который выводит job.
// class Human {}
// class Programmer {}
// class Tester {}
// class ITCompany {}
// const Company = new ITCompany();
// const programmer = Company.create(.....);


console.log('HW2 ==================================================');

// HW2
// Дан объект
// const obj = {
//     a: '1',
//     b: '2',
//     c: '3',
//     e: '4',
//     o: '5'
// }
// Сделать так, чтобы мы не могли мутировать (менять) те свойства в объекте, ключи которых - гласная буква :)
// (только не пишите 200000 if под каждую букву)

const obj = {
    a: '1',
    b: '2',
    c: '3',
    e: '4',
    o: '5',
};
const vowels = ['a', 'e', 'o'];

for (let key in vowels) {
    Object.defineProperty(obj, `${vowels[key]}`, { writable: false });
}

obj.a = 333;
obj.b = 222;
obj.e = 444;
obj.o = 555;
console.log(obj);