document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = "";
    });

    function addTask(taskText) {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.classList.add("delete-btn");
        deleteButton.addEventListener("click", () => {
            taskItem.remove();
        });

        taskItem.addEventListener("click", () => {
            taskItem.classList.toggle("completed");
        });

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    }
});