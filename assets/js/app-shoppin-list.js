/* VARIABLES
-----------------------------
*/
const list = document.querySelector('.shopping-list');
const buttonAdd = document.querySelector('.button-add');

/* EVENT
-----------------------------
*/
buttonAdd.addEventListener("click", function() {
    addText();
});


/* FUNCTIONS
-----------------------------
*/
function addText() {
    let addText = document.querySelector('.input-list').value;
    let li = document.createElement('li');
    if (addText.replace(/\s+/, '').length) {
        li.appendChild(document.createTextNode(addText));
        list.appendChild(li);
    } 
}