console.clear();

//Event Listeners

//Syntax: element.addEventListener("click", function, 3);

const buttonTwo = document.querySelector('.btn-2');

function alertBtn() {
    alert('Hello 2');
}

buttonTwo.addEventListener("click", alertBtn);

//Mouseover