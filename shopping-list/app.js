let list = document.getElementById('shopping-list');

function addingText() {
    let addText = document.getElementById('input-add-text').value;
    let entry = document.createElement('li');
    if (addText.replace(/\s+/, '').length) {
        entry.appendChild(document.createTextNode(addText));
        list.appendChild(entry);
    } 
}