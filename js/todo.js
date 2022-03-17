const toDoInput = document.querySelector('input.toDoInput');
const toDoNum = document.querySelector('.toDoNum');
const doneNum = document.querySelector('.doneNum');
const submitForm = document.querySelector('form');

let toDos = [];

// todo 카운팅
function toDoCount() {
  const toDoLeft = toDos.filter(
    (newToDoObj) => newToDoObj.isCompleted === false
  );
  toDoNum.innerHTML = `(${toDoLeft.length})`;
}

// done todo 카운팅
function doneToDoCount() {
  const doneLeft = toDos.filter(
    (newToDoObj) => newToDoObj.isCompleted === true
  );
  doneNum.innerHTML = `(${doneLeft.length})`;
}

//+버튼을 클릭하거나 엔터를 칠 때 실행
function handleToDoSubmit(event) {
  // 새로고침 방지
  event.preventDefault();

  //입력된 todo를 toDos 배열에 추가
  const newToDo = toDoInput.value;
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
    isCompleted: false,
  };
  toDos.push(newToDoObj);

  // input창 비우기
  toDoInput.value = '';

  //paintToDo(newToDoObj);
  toDoCount();
  console.log(toDos);
  //saveToDos();
}

submitForm.addEventListener('submit', handleToDoSubmit);

//입력 받은 todo를 To Do 밑에 보여주기
function paintToDo(newToDo) {}
