/* VARIABLES
-----------------------------
*/
const list = document.querySelector('.shopping-list');
const input = document.querySelector('.input-list');
const buttonAdd = document.querySelector('.add-list');

/* 
-----------------------------
*/
buttonAdd.addEventListener("click", function() {
    addingText();
});


/* FUNCTIONS
-----------------------------
*/
function addingText() {
    let li = document.createElement('li');
    input.appendChild(document.createTextNode(li));
    list.appendChild(li);
}

