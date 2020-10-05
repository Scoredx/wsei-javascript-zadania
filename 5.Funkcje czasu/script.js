// Zadanie 1

let interval = 3;
let counter = 1;

function dodo() {
  console.log(`Cześ po raz ${counter}`);
  counter += 1;
  if (counter > 15) clearInterval(int);
}

const int = setInterval(dodo, (interval * 1000))

//Zadanie 2

const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let counter = arr.length;
let int1, int2;


function hello() {
  clearInterval(int2);
  console.log(arr.reduce((pre, cur) => pre += "," + cur.toString()))
  int1 = setInterval(iterating, 3000);
}

function iterating() {
  console.log(arr[counter - 1]);
  counter--;
  if (!counter) clearInterval(int1)
}

function start() {
  int2 = setInterval(hello, 2000)
}

document.onload = start();