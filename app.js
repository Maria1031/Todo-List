const taskValue = document.getElementsByClassName("task_value")[0];
const submitButton = document.getElementsByClassName("submitButton")[0];
const taskList = document.getElementsByClassName("task_list")[0];
const deleteButton = document.getElementsByClassName("deleteButton")[0];

const addTasks = (task) => {
    const listItem = document.createElement("li");
    const showItem = taskList.appendChild(listItem);
    showItem.innerHTML = task;

    const doneButton = document.createElement("button");
    doneButton.innerHTML = "未着手";
    doneButton.classList.add("doneButton");
    listItem.appendChild(doneButton);

    let clickCount = 0;
    doneButton.addEventListener("click", (evt) => {
        evt.preventDefault();
        clickCount += 1;
        if (clickCount %2 === 1) {
            showItem.classList.add("doneTask");
            doneButton.innerHTML = "完了済み";
        } else if (clickCount %2 === 0) {
            showItem.classList.remove("doneTask");
            doneButton.innerHTML = "未着手";
        }
    });

    // 削除ボタンをクリックすると、タスクが削除される
    deleteButton.addEventListener("click", (evt) => {
        evt.preventDefault();
        if (showItem.className == "doneTask") {
            showItem.remove();
        }
    });
};

// 追加ボタンをクリックすると、タスクが追加される
submitButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    const task = taskValue.value;
    addTasks(task);
    taskValue.value = " ";
});

