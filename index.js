const taskValue = document.getElementsByClassName("task_value")[0];
const taskSubmit = document.getElementsByClassName("task_submit")[0];
const taskList = document.getElementsByClassName("task_list")[0];

// 追加ボタンを作成
const addTasks = (task) => {
  // 入力したタスクを追加・表示
  const listItem = document.createElement("li");
  const showItem = taskList.appendChild(listItem);
  showItem.innerHTML = task;

  // タスクに編集ボタンを追加・表示
  const editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  listItem.appendChild(editButton);

  // タスクに削除ボタンを付与
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  listItem.appendChild(deleteButton);

  //編集ボタンをクリックし、イベントを発動（タスクを編集）
  editButton.addEventListener("click", () => {});

  // 削除ボタンをクリックし、イベントを発動（タスクが削除）
  deleteButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    deleteTasks(deleteButton);
  });

  // Allclearをクリックし、イベントを発動（タスクが全削除）
  clearButton.addEventListener("click", () => {
    clearAllTasks();
  });
};
//編集ボタンにタスクを編集する機能を追加
const editTasks = () => {
  const task = taskValue.value;
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
};
