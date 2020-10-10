document.addEventListener('DOMContentLoaded', () => {

//Zadanie 1

//Zadanie 2

document.querySelector('#ex2').addEventListener("click", function(){
    let element = document.querySelector('#ex2');
    let dataAttribute = element.dataset.text;
    let span = document.querySelector('#span-ex2')
    span.innerHTML = dataAttribute;
});

//Zadanie 3
document.querySelector('#ex3').addEventListener("mouseover", function(event){
    event.target.style.backgroundColor  = "blue";
});
//Zadanie 4 

//Zadanie 5 

//Zadanie 6

//Zadanie 7

});
