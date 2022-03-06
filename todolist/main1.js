const btn_click = document.querySelector('form').addEventListener('click', addData);
const deleteOrcheck1 = document.querySelector('ul').addEventListener('click', deleteOrcheck);

function addData(e) {
    e.preventDefault();
    let inputText = document.getElementById('input');
    if(inputText.value !== '') {
        addTask(inputText.value);
        inputText.value = '';   //초기화
    }
}
function addTask(value) {   //Create li tag in ul tag
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML=`<span class="delete">x</span><input type="checkbox"><label>${value}</label>`;
    ul.appendChild(li);
    document.querySelector('.itemList').style.display = 'block';
}
function deleteData(e) {
    let remove = e.target.parentNode;   // li
    let parentNode = remove.parentNode; // ul
    parentNode.removeChild(remove);
}
function checkedBox(e) {
    let list = e.target.nextSibling;
    if(e.target.checked){
        list.style.color = "#dddddd";
    }
    else {
        list.style.color = "#000000";
    }
}
function deleteOrcheck(e) {
    if(e.target.className == 'delete') {
        deleteData(e);
    }
    else {
        checkedBox(e);
    }
}
