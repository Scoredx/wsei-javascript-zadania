document.addEventListener('DOMContentLoaded', () => {

  //Zadanie 1
  let root = document.querySelector('#root');
  let div = document.createElement('div');
  div.innerHTML = 'To jest nowy element';
  root.appendChild(div);

  //Zadanie 2
  let ul = document.createElement('ul');
  ul.id = "list";

  let li1 = document.createElement('li');
  li1.innerText = "Durian";
  let li2 = document.createElement('li');
  li2.innerText = "Banana";
  let li3 = document.createElement('li');
  li3.innerText = "Apple";
  let li4 = document.createElement('li');
  li4.innerText = "Orange";
  let li5 = document.createElement('li');
  li5.innerText = "Kiwi";
  let li6 = document.createElement('li');
  li6.innerText = "RaspberryPi";

  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
  ul.appendChild(li5);
  ul.appendChild(li6);
  root.appendChild(ul);

  //Zadanie 3
  function deleteListEntry(event) {
      
      let sacrifice = document.querySelector('#list');
      let children = [...sacrifice.children];
      let childrenNum = children.length;

      if (event.key == 'q' && childrenNum > 2) {
          for (let i = 0; i < childrenNum; i++) {
              if (i % 2 == 0 + 1 ) {
                  children[i].remove();
              }
          }
      }
  }

  document.addEventListener('keypress', deleteListEntry);

  //Zadanie 4
  let button = document.createElement('button');
  button.innerText = 'Pls Don`t';
  button.addEventListener('click', (event) => event.target.remove());
  root.appendChild(button);

  //Zadanie 5
  let rndNum = Math.round(Math.random() * 10);

  for (let i = 0; i < rndNum; i++) {
      let div = document.createElement('div');

      div.innerHTML = `To jest div numer ${i}`;
      root.appendChild(div);
  }

  //Zadanie 6
  const structure = {
      div1: 'to jest div1',
      span1: 'to jest span1',
      div2: {
          div3: 'to jest div3',
          div4: {
            div5: 'to jest div5'
          }
      },
      span2: 'to jest span2',
  }
    
  
  function createDOM(element, parent) {
    Object.keys(element).forEach((el) => {
      const currentElement = document.createElement(el.replace(/\d+/g, ''))
      if (typeof element[el] !== 'object') {
        currentElement.innerHTML = element[el];
        parent.appendChild(currentElement)
      } else {
        parent.appendChild(currentElement)
        createDOM(element[el], currentElement)
      }
    })
  }
  
  createDOM(structure, document.querySelector('#root'))


  //Zadanie 7

  let ul2 = document.createElement('ul');
  ul2.id = "list2";
  let button2 = document.createElement('button');
  button2.id = "button2"
  button2.innerText = 'ul 2';

  let li10 = document.createElement('li');
  li10.innerText = "jeden";
  let li20 = document.createElement('li');
  li20.innerText = "dwa";
  let li30 = document.createElement('li');
  li30.innerText = "trzy";
  let li40 = document.createElement('li');
  li40.innerText = "cztery";
  let li50 = document.createElement('li');
  li50.innerText = "pięć";
  let li60 = document.createElement('li');
  li60.innerText = "sześć";

  ul2.appendChild(li10);
  ul2.appendChild(li20);
  ul2.appendChild(li30);
  ul2.appendChild(li40);
  ul2.appendChild(li50);
  ul2.appendChild(li60);

  
  let ul3 = document.createElement('ul');
  ul3.id = "list3";

  let button3 = document.createElement('button');
  button3.id = "button3"
  button3.innerText = "ul 3";

  root.appendChild(ul2);
  root.appendChild(button2);
  root.appendChild(ul3);
  root.appendChild(button3);

  function aToB(){
    let listA=document.querySelector("#list2");
    let listB=document.querySelector("#list3");

    var listItems = listA.getElementsByTagName("li");
    let  last=listItems[listItems.length-1];

    let lastItemOfList

    listA.removeChild(last);

    if( listItems.length < 1){
      document.querySelector("#button2").disabled = true;
    }
  }
  document.querySelector('#button2').addEventListener('click', aToB);

  function bToA(list1, list2){
    let listA=document.querySelector("#list2");
    let listB=document.querySelector("#list3");

    var listItems = listA.getElementsByTagName("li");
    let  last=listItems[listItems.length-1];

    let lastItemOfList

    listA.removeChild(last);

    if( listItems.length < 1){
      document.querySelector("#button2").disabled = true;
    }
  }
  document.querySelector('#button3').addEventListener('click', bToA );

  

}); 

