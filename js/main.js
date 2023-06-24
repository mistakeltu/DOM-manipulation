console.clear();

// Styling an Element

// const title = document.querySelector('.main-heading');

// title.style.color = 'red'; //works in a single element

// const listItems = document.querySelectorAll('.list-items');

// for(let i = 0; i < listItems.length; i++){
//     listItems[i].style.fontSize = '2rem'; //visiem list itemams priskiria
// }

//Creating elements

// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// //Adding element
// ul.append(li);

// //Modifying element
// li.innerText = 'Hello';

// const firstNumber = document.querySelector('span');

// console.log(firstNumber);

// //Modifying Attributes & Classes

// // li.setAttribute('class', 'number');
// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');

// //Kitas budas pasiekti atributus

// const title = document.querySelector('#main-heading');

// console.log(title.getAttribute('id'));

//Classes

// li.classList.add('list-items');
// li.classList.remove('list-items');

//Contains(method)

// console.log(li.classList.contains('list-items'));

//Remove Elements

// li.remove();

//Parent Node Traversal

// let ul = document.querySelector('ul');

// console.log(ul.parentNode);
// console.log(ul.parentNode.parentNode); //du atgal
// console.log(ul.parentElement);

// const html = document.documentElement;

// console.log(html.parentNode); //tevo node
// console.log(html.parentElement); // atgal vienu

// let ul = document.querySelector('ul');

//------------------------> Child Node Traversal

// let ul = document.querySelector('ul');

// console.log(ul.childNodes); //atvaizduoja viska
// console.log(ul.firstChild); //pirmas
// console.log(ul.lastChild); //paskutinis

// ul.childNodes[1].style.backgroundColor = 'blue'; //pasirenkam konkretu node, nes jei naudojam firstchild, tj neduos priskirt spalvos, nes pirmas elementas yra tekstas

// let ul = document.querySelector('ul');

// console.log(ul.children); // atvaizduoja elemento vaikus
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

//Sibling Node Traversal

// let ul = document.querySelector('ul');
// const div = document.querySelector('div');

// console.log(div.childNodes);

// console.log(ul.previousSibling);
// console.log(ul.nextSibling)

// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);
