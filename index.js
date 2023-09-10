const taskValue = document.getElementsByClassName("task_value")[0];
const taskSubmit = document.getElementsByClassName("task_submit")[0];
const taskList = document.getElementsByClassName("task_list")[0];
let number = 1;
// 追加ボタンを作成
const addTasks = (task) => {
  // 入力したタスクを追加・表示
  const listItem = document.createElement("li");
  taskList.appendChild(listItem);
  const taskName = document.createElement("p");
  taskName.setAttribute("id", number);
  listItem.appendChild(taskName);
  taskName.textContent = task;

  // タスクに編集ボタンを追加・表示
  const editButton = document.createElement("button");
  editButton.setAttribute("onclick", "editTask(" + number + ")");
  editButton.innerHTML = "Edit";
  // クラスをつける
  editButton.classList.add("edit");
  listItem.appendChild(editButton);

  // タスクに削除ボタンを付与
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.classList.add("delete");
  listItem.appendChild(deleteButton);
  // クラスをつける
  number++;
  // 削除ボタンをクリックし、イベントを発動（タスクが削除）
  deleteButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    deleteTasks(deleteButton);
  });

  // Allclearをクリックし、イベントを発動（タスクが全削除）
  clearButton.addEventListener("click", () => {
    clearAllTasks();
  });

  toggleClearButton();
};
//編集ボタンにタスクを編集する機能を追加
const editTask = (event) => {
  const editInput = document.getElementsByClassName("task_list");
  const parent = event.parentElement;
  const taskName = document.getElementById(event);
  taskName.textContent = taskValue.value;
  console.log(event);
  // console.log(parent);
  // for (let task = 0; task < editTask.length; task++) {
  //   console.log(task);
  // }
  // const editItem = editInput.getElementsByTagName("li")[0];
  // const editText = editItem.textContent;
  // editInput.value = taskText.textContent;
  // console.log(editInput);
};

// 削除ボタンにタスクを消す機能を付与
const deleteTasks = (deleteButton) => {
  const chosenTask = deleteButton.closest("li");
  taskList.removeChild(chosenTask);
};

// 追加ボタンをクリックし、イベントを発動（タスクが追加）
taskSubmit.addEventListener("click", (evt) => {
  evt.preventDefault();
  const task = taskValue.value;
  if (task === "") {
    alert("Taskの入力欄が空です");
    return;
  } else {
    addTasks(task);
    taskValue.value = "";
  }
});
// TODO: タイトルがあるときだけタスクを追加できるようにする
// TODO: 編集ができるようにする

// クリアボタンを押すと全てのTaskが削除
const clearButton = document.querySelector(".clear");
const clearAllTasks = () => {
  taskList.innerHTML = "";
  toggleClearButton();
};

const toggleClearButton = () => {
  const tasks = taskList.querySelector("li");
  if (tasks) {
    clearButton.style.display = "inline-block";
  } else {
    clearButton.style.display = "none";
  }
};
