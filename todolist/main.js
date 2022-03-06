const submit = document.querySelector('form').addEventListener('submit', addToDo);
const item = document.querySelector('ul').addEventListener('click', deleteOrcheck);
// submit = form태그 정보 가져와서 submit(event) 되면 함수 수행
// add = ul태그 가져와서 click되면 함수 수행

function addToDo(e) {
    e.preventDefault();
    let toDoValue = document.getElementById('input');
    if(toDoValue.value !== '') {
        addTask(toDoValue.value);   //추가
        toDoValue.value = '';       //입력창 비워주기
    }
}

function addTask(value) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `<span class="delete">x</span><input type="checkbox"><label> ${value} </label>`;
    ul.appendChild(li);
    document.querySelector('.itemList').style.display = 'block';
}

//부모 노드를 가르키고 자식노드를 삭제한다
function deleteToDo(e) {
    let remove = e.target.parentNode;   //
    let parentNode = remove.parentNode; //
    parentNode.removeChild(remove);     //parentNode(=ul tag)
}

function checkToDo(e){  // 체크박스를 클릭한 경우 글씨 색을 연하게 바꿔준다.
    const list = e.target.nextSibling;  //label tag
    if(e.target.checked){   //e.target === 클릭된 tag
        list.style.color = "#dddddd";
    }else {
        list.style.color = "#000000";
    }
}
function deleteOrcheck(e) {
    if(e.target.className == 'delete') {
        deleteToDo(e);
    }
    else {
        checkToDo(e);
    }
}
