class Person{
    constructor(name, lastname, age, country, city, language){
        this.name = name;
        this.lastname= lastname;
        this.age = age;
        this.country = country;
        this.city = city;
        this.language = language;
    }
    changeAge(age) {
        if (age < 0) throw Error('Wrong Age');
        this.age = age;
    }
    
    changeCity(city) {
        this.city = city;
    }
}
const person1 = new Person('Maciek', 'Nazwisko', 21, 'Poland', 'Wrocław', 'PL');
const person2 = new Person('Janusz', 'Nazwisko1', 25, 'UK', 'Londin', 'EN');
const person3 = new Person('Grażyna', 'Nazwisko2', 19, 'Poland', 'Wrocław', 'PL');
const person4 = new Person('Ela', 'Nazwisko3', 40, 'Germany', 'Berlin', 'DE');
const person5 = new Person('Jan', 'Nazwisko4', 50, 'Poland', 'Wrocław', 'PL');

person2.changeAge(99);
person3.changeAge(20);
person5.changeCity("Amsterdam");

console.log(person2);
console.log(person5);

//Zadanie 2 

class Clac{
    constructor(){
        this.memory = 0;
        this.result = 0;
        this.history = [];
    }
    add(x, y){
        this.result = x + y;
        this.addToHistory(x,y, '+');
        return this.result;

    }
    subtract(x, y){
        this.result = x - y;
        this.addToHistory(x,y, '-');
        return this.result;
    }
    multiply(x, y){
        this.result = x * y;
        this.addToHistory(x,y, '*');
        return this.result;
    }
    divide(x, y){
        if( y === 0) throw Error('Impossible operation - dividing by 0');
        this.result = x / y;
        this.addToHistory(x,y, '/');
        return this.result;
    }
    saveToMemory(){
        this.memory = this.result; 
    }
    flushMemory(){
        this.memory = 0;
    }

    printMemory(){
        console.log(this.memory)
    }

    addToHistory(x,y, operation){
        this.history.push({x,y, operation, result: this.result})
    }
    flushHistory(){
        this.history = [];
    }
    printHistory(){
        this.history.forEach((obj, i) => console.log(`${i}: ${obj.a} ${obj.operation} ${obj.b} = ${obj.result}`));
    }
}

const calc1 = new Clac();
const calc2 = new Clac();

console.log(calc1.add(1, 5));
console.log(calc2.divide(10,2));

//Zadanie 3

class Game{
    randomize() {
        Game.prototype.num = Math.round(Math.random() * (10 - 1) + 1);
    }
    
    areYaWinningSon() {
        if (Game.prototype.num > 5) {
        console.log('Yes dad')
        clearInterval(int2);
      } else {
        console.log('Not :(')
      }
    }
  }
  
  
  const game1 = new Game();
  const game2 = new Game();
  
  const int1 = setInterval(game1.randomize,1000)
  const int2 = setInterval(game2.areYaWinningSon,1000)

