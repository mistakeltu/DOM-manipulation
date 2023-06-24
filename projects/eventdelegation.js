console.clear();

// Event Delegation

document.querySelector('#football').addEventListener('click', function(e){
    console.log('Paspausta');

    const target = e.target;

    //console.log(target);

    if(target.matches('li')){
        target.style.backgroundColor = 'grey';
    }
})