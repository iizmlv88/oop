
// -------------------------
// Напишіть клас Rectangle, який має такі властивості:
// width - ширина прямокутника
// height - висота прямокутника
// Клас має мати такі методи:
// getArea() - повертає площу прямокутника
// getPerimeter() - повертає периметр прямокутника
class Rectangle {
    constructor(width, height){
    this.width = width
    this.height = height
    }
    getArea(){
        console.log(`${this.width * this.height}`);
    }
    getPerimeter(){
        console.log(`${this.width + this.width + this.height + this.height}`);
    }
}
let quadrat = new Rectangle (20, 25)
// quadrat.getArea();
// quadrat.getPerimeter()



// Напишіть клас Person, який представлятиме людину. У класу повинні бути такі властивості та методи:
// Властивості:
 
// name – ім'я людини.
// age – вік людини.
// hobbies - масив хобі людини (початкове значення порожній масив).
// Методи:
 
// addHobby(hobby) - додає нове хобі до масиву hobbies.
// getHobbies() – повертає масив хобі людини.



class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.hobbies = [];
    }
    addHobby(hobby) {
        this.hobbies.push(hobby);
        console.log(`${this.name}, ${this.age}, ${this.hobbies}`)
    }
}

let artem = new Person('Artem', 16);
// artem.addHobby('play');
// artem.addHobby('slip');
// artem.addHobby('eat');

// Оренда авто
// створити клас "машину" яка буде приймати в конструкторі такі дані: Марка, модель, рік випуску , пробіг, ціну за добу,
// і змінювати статус чи вона зайнята чи вільна.

// написати методи:
// 1 загальна інформація
// 2 змінювання пробігу а саме додавання пробігу
// 3 змінення ціни
// 4 і змінювати статус "вільна" або "зайнята"
// 5 виводити статус

class Auto {
    constructor (mark, model, years, km, price){
        this.mark = mark
        this.model = model
        this. years = years
        this.km = km
        this.price = price
        this.status = ''
    }
    info(){
        // console.log(typeof this.status);
        if (this.status.length === 0) {
        console.log(`${this.mark}, ${this.model}, ${this.years}, ${this.km}, ${this.price}`);
        } else {
            console.log(`${this.mark}, ${this.model}, ${this.years}, ${this.km}, ${this.price}, ${this.status}`);
        }
    }
    pluskm(km){
        this.km += km
        console.log(this.km);
    }
    newprice(price){
        this.price = price
        console.log(this.price);
    }
    freeornot(avaliable){
        this.status = avaliable
    }
    freeornotStatus(){
        console.log(this.status);
    }
}
let audi = new Auto ('audi', 'rsq5', 2015, 200000, 1000)
audi.info()
audi.pluskm(100)
audi.newprice(99)
audi.freeornot('буде вільна коли припливе зі штатів')
audi.freeornotStatus()
audi.info()

