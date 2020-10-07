//Zadanie 1 

let arr = [1,"a",2,"b",3,"c"];

console.log(arr);

//Zadanie 2

let arr = [1,"a",2,"b",3,"c"];

console.log(arr[0] + "; " + arr[1]);
console.log(arr[arr.length - 1]);
console.log(arr);
console.log(arr.filter((value) => value % 2 === 0))
for(let x = 0; x<arr.length; x++){
    if( x%2 === 0){
        console.log(arr.push(arr[x]));
    }
}
console.log()


//Zadanie 3
let arr = [0,1,2,3,4,5,6,8,9];

console.log(arr.reduce((a, b) => a + b ));
console.log(arr.reduce((a, b) => a - b ));
console.log(arr.reduce((a, b) => a+b / arr.length));
console.log(arr.filter(x => x % 2 == 0));
console.log(arr.filter(x => x % 2 != 0));
console.log(arr.reduce((a, b) => a > b ? a : b ));
console.log(arr.reduce((a, b) => a > b ? b : a )); 
console.log(arr.reverse());

// Zadanie 4 

function foo(arr){
    console.log(arr.reduce((a,b) => a+b));
}
foo([1,2,3,4,5]);

//Zadanie 5

function foo(arr){
    let average = arr.reduce((a, b) => a += b) / arr.length;

    arr.map((val) => console.log(val * average))
}
foo([1,2,3,4,5]);

//Zadanie 6

function foo(arr){
    let average = (array) => array.reduce((a, b) => a += b) / array.length;
    avg = average(arr);
    let evenArr = arr.filter(x => x % 2 == 0);

   console.log( evenArr.reduce((a,b) => a += b) / evenArr.length);
}
foo([1,2,3,4,5]);

// Zadanie 7
function foo(arr){
    console.log(arr.sort((a, b) => a - b));
}
foo([5,3,2,10,8]);

//Zadanie 8

function foo(x,y){ 
    console.log(x.length + y.length);
    
}
foo([1,2,3,4,5],[5,4,3,2,1])

//Zadanie 9 

function foo(x,y){ 
        return x.filter(z => z != y);
}
console.log(foo([1,2,3,4,5],3));

//Zadanie 10

function foo(arr){
    return arr.map((val) => -val);
}
console.log(foo([1,-2,3,-4,5]));
