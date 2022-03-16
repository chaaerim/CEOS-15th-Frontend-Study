const toDoInput = document.querySelector('input.toDoInput');
const toDoNum = document.getElementsByClassName('toDoNum');
const doneNum = document.getElementsByClassName('doneNum');
const submitForm = document.getElementsByClassName('submitForm');

let toDos = [];

//+버튼을 클릭하거나 엔터를 칠 때 실행
function handleToDoSubmit(event) {
  // 새로고침 방지
  event.preventDefault();

  //입력된 todo를 toDos 배열에 추가
  const newToDo = toDoInput.value;
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);

  // input창 비우기
  toDoInput.value = '';

  paintToDo(newToDoObj);
  saveToDos();
}

submitForm.addEventListener('submit', handleToDoSubmit);
