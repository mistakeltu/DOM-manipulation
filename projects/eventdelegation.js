console.clear();

// Event Delegation


//Ilgesnis budas
// document.querySelector('#football').addEventListener('click', function(e){
//     console.log('Paspausta');

//     const target = e.target;

//     console.log(target);

//     if(target.matches('li')){
//         target.style.backgroundColor = 'grey';
//     }
// })

//Trumpesnis

document.querySelector('#stuff').addEventListener('click', function(e){
    console.log(e.target.getAttribute('id') + ' is clicked');
    const target = e.target;
    //  console.log(target);
    if(target.matches('li')){
      target.style.backgroundColor = 'grey';
}
})

const stuff = document.querySelector('#sports');
const newStuff = document.querySelector('li');

newStuff.innerText = 'wassup';
newStuff.setAttribute('id', 'wassup');

//stuff.appendChild(newStuff);