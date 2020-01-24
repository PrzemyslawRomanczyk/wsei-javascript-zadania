document.addEventListener("DOMContentLoaded", function() {
    var taskInput = document.getElementById("taskInput");
    var priorityInput = document.getElementById("priorityInput");
    var addTaskButton = document.getElementById("addTaskButton");
    var taskList = document.getElementById("taskList");
    var removeFinishedTasksButton = document.getElementById("removeFinishedTasksButton");
    var counter = document.getElementById("counter");

    addTaskButton.addEventListener("click", function() {
        if (taskInput.value.length > 5 && taskInput.value.length < 100) {
            var priorityValue = parseFloat(priorityInput.value);

            if (priorityValue >= 1 && priorityValue <= 10 && Number.isInteger(priorityValue)) {
                let task = document.createElement("li");
                task.dataset.priority = priorityValue;

                let taskValue = document.createElement("h1");
                taskValue.innerText = taskInput.value + " (priority: " + priorityValue + ")";

                let buttonDelete = document.createElement("button");
                buttonDelete.innerText = "Delete";
                buttonDelete.addEventListener("click", function() {
                    task.remove();
                    countToDoTasks();
                });

                let buttonComplete = document.createElement("button");
                buttonComplete.innerText = "Complete";
                buttonComplete.addEventListener("click", function() {
                    task.classList.toggle("done");
                    countToDoTasks();
                });

                task.append(taskValue, buttonDelete, buttonComplete);

                taskList.appendChild(task);
                Array.from(taskList.children).sort((a, b) => b.dataset.priority - a.dataset.priority)
                    .forEach((element) => element.parentNode.appendChild(element));

                countToDoTasks();

                taskInput.value = "";
                priorityInput.value = "";
            } else {
                alert("Priorytet zadania powinien byc liczba calkowita od 1 do 10");
            }
        } else {
            alert("Tresc zadania powinna miec od 6 do 99 znaków");
        }

    });

    removeFinishedTasksButton.addEventListener("click", function() {
        var doneTasks = document.querySelectorAll(".done");

        for (var i = 0; i < doneTasks.length; i++) {
            doneTasks[i].remove();
        }
    });

    function countToDoTasks() {
        let doneTasks = document.querySelectorAll(".done");

        counter.innerText = taskList.children.length - doneTasks.length;
    }
});