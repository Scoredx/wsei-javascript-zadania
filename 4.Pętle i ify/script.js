//Zadanie 1 
let number1 = 1;
let number2 = 2;

if(number1>number2) {
  console.log('Liczba1 jest większa');  
} else {
  console.log('Liczba2 jest większa');  
} 

// Zadanie 2
let q = 6;
let w = 8;
let e = 10;

if (q > w) {
    if (q > e) {
        console.log("Liczba q jest największa");
    } else {
        console.log("Liczba e jest największa");
    }
} else if (w > e) {
    console.log("Liczba w jest największa");
} else {
    console.log("Liczba e jest największa");
}

//Zdanie 3
for (let i = 0; i < 10; i++) {
    console.log("Lubię JavaScript");
}

//Zadanie 4
let number1= 0

for (let i = 0; i <= 10; i++) {
   number1 += i;
}

//Zdanie 5 
var n = 5;

for ( let i = 0; i <= n; i++) {
   if(i % 2 == 0){
       console.log(i+" - parzysta");
   } else {       
       console.log(i+" - nieparzysta");
   }
}

//Zadanie 6
for (let x = 1; x <= 10; x++) {
    for (let z = 1; z <= 10; z++) {
        console.log("x= " + x + ", z= " + z);
    }
}

//Zadanie 7
console.log(0);
for(i = 1; i < 100; i++) {
if(i%15==0)
    console.log("FizzBuzz")
else if(i%3 == 0)
    console.log("Fizz");
else if(i%5 == 0)
    console.log("Buzz");
else
    console.log(i);
}

//Zdanie 8 

// a
{
  let result = '';
  const size = 5;
  for (let i = 1; i <= size; i++) {
    result += '*'.repeat(i) + '\n';
  }
  console.log(result)
}


// b

{
  let result = '';
  const size = 5;
  for (let i = 1; i <= size; i++) {
    result += ' '.repeat(size-i);
    result += '* '.repeat(i) + '\n';
  }
  console.log(result);
}

//c 

{
  let result = '';
  const height = 5;
  let starsAmount = 1;
  for (let row = 1; row <= height; row++) {
    result += ' '.repeat(height-row);
    result += '*'.repeat(starsAmount) + '\n';
    starsAmount += 2;
  }
  console.log(result);
}

//d 

{
  let result1 = '';
  let result2 = '';
  const height = 5;
  for (let row = 1; row <= height; row++) {
    result1 += '*'.repeat(row)
    for (let i = row; i < height; i++) {
      result1 += i;
    }
    result1 += '\n';

    result2 += '*'.repeat(height - row + 1);
    for (let i = (height - row + 1); i < height; i++) {
      result2 += i;
    }
    result2 += '\n';
  }
  console.log(result1);
  console.log("-".repeat(height));
  console.log(result2);
}

//e

{
  let result = '';
  const size = 5;
  for (let i = 1; i <= size; i++) {
    result += ' '.repeat(size-i);
    result += '* '.repeat(i) + '\n';
  }
  for (let i = 0; i < (size-2); i++) {
    result += " ".repeat(size-1);
    result += "* \n";
  }
  console.log(result);
}









