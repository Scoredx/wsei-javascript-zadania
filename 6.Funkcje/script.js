//Zadanie 1

function foo(){
    console.log("You made it!");
}
foo();

//Zadanie 2 

let x = 2 
function foo(m){
    console.log(m);
}
foo(x);

//Zadanie 3 

function arr (arr) {
    console.log(arr);
}
distFromAvarage ([1,2,3]);

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