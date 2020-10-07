//Zadanie 1
let car = {type:"Ford", model:"Mustang", color:"black"};
console.log(car);

//Zdanie 2
car.changeName = function(arg){
    this.type = arg;
}
car.changeName('Fiat');
console.log(car)

//Zadanie 3
let math = {
    sumArray: function(arr){
        this.sum = arr.reduce((prev, curr) => prev += curr);
    }
} 
math.sumArray([1,2,3,4,5]);
console.log(math);

//Zadanie 4

const car = {
    name:'BMW',
    age: 12,
    color: 'Blue',
    version: 2,
    afterCrash: false
}

Object.keys(car).forEach((key) => console.log(`${key}: ${car[key]}`))

//Zadanie 5

const car = {
  name: 'BMW',
  age: 12,
  color: 'Blue',
  version: 2,
  afterCrash: false,
}

car.addObject = function(obj, objName) {
    this[objName] = obj;
}

car.addObject({height: '200', width: '300'}, 'rearWindow')
Object.keys(car.rearWindow).forEach((key) => console.log(`${key}: ${car.rearWindow[key]}`))

//Zadanie 6

const car = {
  name: 'BMW',
  age: 12,
  color: 'Blue',
  afterCrash: false,
}
car.version = "v2";

car.writeHello = function() {
    console.log("Hello");
}
car.writeHello();
