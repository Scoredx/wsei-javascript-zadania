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
    let listItems = listA.getElementsByTagName("li");
    let listItemsB = listB.getElementsByTagName("li");
    let  last=listItems[listItems.length-1];
    let lastItemOfList = listItems[listItems.length-1].innerText;
    let node = document.createElement('li'); 
    node.innerText = lastItemOfList;
    listB.appendChild(node);
    listA.removeChild(last);

    if( listItems.length < 1){
      document.querySelector("#button2").disabled = true;
    }
    if(listItemsB.length >= 1){
      document.querySelector("#button3").disabled = false;
    }
  }
  document.querySelector('#button2').addEventListener('click', aToB);

  function bToA(){
    let listB=document.querySelector("#list2");
    let listA=document.querySelector("#list3");
    let listItems = listA.getElementsByTagName("li");
    let listItemsB = listB.getElementsByTagName("li");
    let last=listItems[listItems.length-1];
    let lastItemOfList = listItems[listItems.length-1].innerText;
    let node = document.createElement('li'); 
    node.innerText = lastItemOfList;
    listB.appendChild(node);
    listA.removeChild(last);

    if( listItems.length < 1){
      document.querySelector("#button3").disabled = true;
    }
    if(listItemsB.length >= 1){
      document.querySelector("#button2").disabled = false;
    }

  }
  document.querySelector('#button3').addEventListener('click', bToA );

  //Zadanie 8

  let form = document.createElement("FORM");
  root.appendChild(form);
  let elemType = document.createElement("input");
  elemType.setAttribute('type', 'text');
  elemType.setAttribute('value', 'element name');
  let elemText = document.createElement("input");
  elemText.setAttribute('type', 'text');
  elemText.setAttribute('value', 'text');
  let elemTextColor = document.createElement("input");
  elemTextColor.setAttribute('type', 'text');
  elemTextColor.setAttribute('value', 'text color');
  let elemQuantity = document.createElement("input");
  elemQuantity.setAttribute('type', 'text');
  elemQuantity.setAttribute('value', 'quantity');

  form.appendChild(elemType);
  form.appendChild(elemText);
  form.appendChild(elemTextColor);
  form.appendChild(elemQuantity);

  let button4 = document.createElement('button');
  button4.id = "button4"
  button4.type = 'button'
  button4.innerText = "make";
  form.appendChild(button4);

  function makeThingsHappen(){
    for(let i = 0; i < elemQuantity.value; i++){
      let newelem = document.createElement(elemType.value);
      newelem.innerText = elemText.value;
      newelem.style.color = elemTextColor.value;
      root.appendChild(newelem);
    }
  }
  document.querySelector('#button4').addEventListener('click', makeThingsHappen );

  //Zadanie 9

  let form2 = document.createElement("FORM");
  root.appendChild(form2);
  let name = document.createElement("input");
  name.setAttribute('type', 'text');
  name.setAttribute('value', 'name');
  let surname = document.createElement("input");
  surname.setAttribute('type', 'text');
  surname.setAttribute('value', 'surname');
  let age = document.createElement("input");
  age.setAttribute('type', 'text');
  age.setAttribute('value', 'age');
  let childrenNumber = document.createElement("input");
  childrenNumber.setAttribute('type', 'text');
  childrenNumber.setAttribute('value', 'Number of Children');

  form2.appendChild(name);
  form2.appendChild(surname);
  form2.appendChild(age);
  form2.appendChild(childrenNumber);

  let button5 = document.createElement('button');
  button5.id = "button5"
  button5.type = 'button'
  button5.innerText = "Więcej";
  form2.appendChild(button5);

  let button6 = document.createElement('button');
  button6.id = "button6"
  button6.type = 'button'
  button6.innerText = "Utwórz";
  form2.appendChild(button6);

  let nameArr = [];
  let surnameArr = [];
  let ageArr = [];
  let childrenArr = [];

  function moreSpace(){
    nameArr.push(name.value);
    surnameArr.push(surname.value);
    ageArr.push(age.value);
    childrenArr.push(childrenNumber.value);
    name.value = '';
    surname.value = '';
    age.value = '';
    childrenNumber.value = '';

  }
  document.querySelector('#button5').addEventListener('click', moreSpace);

  function makeTable(){
    nameArr.push(name.value);
    surnameArr.push(surname.value);
    ageArr.push(age.value);
    childrenArr.push(childrenNumber.value);
    name.value = '';
    surname.value = '';
    age.value = '';
    childrenNumber.value = '';


    let table = document.createElement("table");
    table.style.border = '1';
    
    let headerTr = document.createElement('tr');
    table.appendChild(headerTr);
    let nameTh = document.createElement('th');
    nameTh.innerHTML = "Name";
    let surnameTh = document.createElement('th');
    surnameTh.innerHTML = "Surname";
    let ageTh = document.createElement('th');
    ageTh.innerHTML = "Age";
    let childrenTh = document.createElement('th');
    childrenTh.innerHTML = "ChildrenNo";
    
    root.appendChild(table);
    headerTr.appendChild(nameTh);
    headerTr.appendChild(surnameTh);
    headerTr.appendChild(ageTh);
    headerTr.appendChild(childrenTh);
    
    for (var i = 0; i < nameArr.length; i++) {
      let elemTr = document.createElement('tr');
      table.appendChild(elemTr);
      let delButton = document.createElement('button');
      delButton.innerText = "Delete row";
      elemTr.appendChild(delButton);

      let nameTd = document.createElement('td');
      nameTd.innerText = nameArr[i];
      let surnameTd = document.createElement('td');
      surnameTd.innerText = surnameArr[i];
      let ageTd = document.createElement('td');
      ageTd.innerText = ageArr[i];
      let childrenTd = document.createElement('td');
      childrenTd.innerText= childrenArr[i];   

      
      elemTr.appendChild(nameTd);
      elemTr.appendChild(surnameTd);
      elemTr.appendChild(ageTd);
      elemTr.appendChild(childrenTd);
      elemTr.appendChild(delButton);

      delButton.addEventListener('click', delRow);
    
    }
    nameArr = [];
    surnameArr = [];
    ageArr = [];
    childrenArr = [];
  }

  function delRow(e) {
    
    e.target  .parentElement.remove()
  }

  document.querySelector('#button6').addEventListener('click', makeTable);

  //Zadanie 10

  let button7 = document.createElement('button');
  button7.id = "button7"
  button7.type = 'button'
  button7.innerText = "Zamień litery";
  root.appendChild(button7);  

	function capitalize() {
    document.querySelectorAll('tr').forEach((row) => {
      row.querySelectorAll('td').forEach((cell) => {
        cell.innerText = cell.innerText[0].toUpperCase() + cell.innerText.slice(1); 
      })
    })
    }  

  document.querySelector('#button7').addEventListener('click', capitalize);
  
}); 

