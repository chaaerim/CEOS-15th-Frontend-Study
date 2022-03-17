const toDoInput = document.querySelector('input.toDoInput');
const toDoNum = document.querySelector('.toDoNum');
const doneNum = document.querySelector('.doneNum');
const submitForm = document.querySelector('form');
const toDoList = document.querySelector('.toDoList');
const doneList = document.querySelector('.doneList');

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

//checkBtn 클릭시 done으로 todo 이동
function moveToDone(event) {
  const doneItem = event.target.parentElement;
  if (!this.isCompleted) {
    doneList.appendChild(doneItem);
    this.isCompleted = true;
  } else {
    toDoList.appendChild(doneItem);
    this.isCompleted = false;
  }
}

// todo delete
function deleteToDo(event) {
  // li 가져와서 삭제
  const deleteLi = event.target.parentElement;
  deleteLi.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(deleteLi.id));

  //todo 카운팅과 done todo 카운팅 -1
  //if(toDoLeft.length<=0)
  //(doneLeft.length<=0)
  toDoCount();
  doneToDoCount();
}

//입력 받은 todo를 To Do 밑에 보여주기
function paintToDo(newToDo) {
  //todo 각각에 들어갈 요소들
  const li = document.createElement('li');
  const span = document.createElement('span');
  const deleteBtn = document.createElement('button');
  const checkBtn = document.createElement('button');

  //같은 이름의 todo가 여러개 있을 때를 대비해서 id 붙이기
  li.id = newToDo.id;

  //list에 요소 붙이기
  li.appendChild(span);
  li.appendChild(checkBtn);
  li.appendChild(deleteBtn);

  span.innerText = newToDo;
  checkBtn.innerText = `✔️`;
  deleteBtn.innerText = `🗑`;

  //button에 classd이름 붙이기
  checkBtn.classList.add('checkBtn');
  deleteBtn.classList.add('deleteBtn');

  //button에 이벤트 리스너 붙이기
  checkBtn.addEventListener('click', moveToDone);
  deleteBtn.addEventListener('click', deleteToDo);

  toDoList.appendChild(li);
}

//delete

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

  paintToDo(newToDo);
  toDoCount();
  //saveToDos();
}

submitForm.addEventListener('submit', handleToDoSubmit);
