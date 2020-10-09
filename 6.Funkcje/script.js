//Zadanie 1

function foo(){
    return "You made it!";
}
console.log(foo());

//Zadanie 2 

let x = 2 
function foo(m){
    return m;
}
console.log(foo(x));

//Zadanie 3 

function arr (arr) {
   return arr;
}
console.log(distFromAvarage ([1,2,3]));

//Zadanie 4

let interval = 3;
let counter = 0;

function foo(str) {
  console.log(str);
  counter++;
  if (counter > 4) {
    clearInterval(asdf);
    console.log("Koniec");
  }
}
let asdf = setInterval(foo, (interval * 1000), 'tekst');