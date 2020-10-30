const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList"); //toDoList 는 js-toDoList 와 같음//

const TODOS_LS = "toDos";

const toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //[JSON.stringify] method will make an object/value to string. so, stringify!)
}

function paintToDo(text) {
  const li = document.createElement("li"); // li can be anything, e.g. potato whatever//
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newID = toDos.length + 1;
  delBtn.innerText = "❌";
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li); // li 를 ul에다가 append 하는 것! 해석: toDoList(ul, 위 3번줄 참고) 에다가 li를 append 함.//
  //The append() method will insert DOMString (한번 언급 되었음! theory 파트에서.) objects as Text nodes.//
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDosObj);
  saveToDos()
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

//function something(toDo) {
 // console.log(toDo.text);
// }

function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (loadedtoDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo){
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();