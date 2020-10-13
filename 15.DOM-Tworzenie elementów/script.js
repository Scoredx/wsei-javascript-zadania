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


}); 

