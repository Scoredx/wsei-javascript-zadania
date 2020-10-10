
document.addEventListener('DOMContentLoaded', () => {
    // Zadanie 1.
    //a
    function parentFinder(){
    var x = document.querySelector("#buz").parentElement;
    return x;
    }
    console.log(parentFinder());

    //b
    function siblingFinder(){
        var x = document.querySelector("#baz").previousElementSibling;
        return x;
        }
        console.log(siblingFinder());
    //c 
    function childrenFinder(){
        var x = document.querySelector("#foo").children;
        return x;
        }
        console.log(siblingFinder());
});