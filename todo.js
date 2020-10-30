const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");
  //toDoList 는 js-toDoList 와 같음//

  const TODOS_LS = "toDos";

  let toDos = [];

  function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
      toDoList.removeChild(li);
      const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
      });
      toDos = cleanToDos;
      saveToDos();
  }
  
  function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  }

function paintToDo(text) {
  const li = document.createElement("li"); /* li can be anything, e.g. potato whatever*/
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1; // capital letter error, camelcase //
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li); /* li 를 ul에다가 append 하는 것! 해석: toDoList(ul, 위 3번줄 참고) 에다가 li를 append 함.*/
  /*The append() method will insert DOMString (한번 언급 되었음! theory 파트에서.) objects as Text nodes.*/
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj); // spelling mistake //
  saveToDos(); /* my mistake 1 : forgot to insert [;]! */
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

//function something(toDo) {//
 // console.log(toDo.text);//
// } //

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) { /* mistake 2 : forgot carmelcase */
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();