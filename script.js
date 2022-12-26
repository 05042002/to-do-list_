var root = document.querySelector(":root");
var container = document.querySelector(".container");
var newTaskInput = document.getElementById("new_task_input");
var taskform = document.getElementById("new_task_form");
var tasksList = document.getElementById("tasksList");
var taskBtns = document.querySelectorAll(".task_check_btn");
var themeBtn = document.querySelector(".theme_toogle_btn");

taskform.addEventListener("submit", function (e) {
    e.preventDefault();
    var newtaskInputValue = taskform.elements.new_task_input;

    addTask(newtaskInputValue.value);

    newtaskInputValue.value = "";
    container.classList.remove("task_list_empty");
});

function addTask(newTask) {
    const newTaskItem = document.createElement("li");
    newTaskItem.setAttribute("class", "task_item");


    const newCheckBtn = document.createElement("div");
    newCheckBtn.setAttribute("class", "task_check_btn");

    const newTaskBio = document.createElement("span");
    newTaskBio.setAttribute("class", "task_bio");
    newTaskBio.innerText = newTask; 
    tasksList.appendChild(newTaskItem);
    newTaskItem.appendChild(newCheckBtn);

    newTaskItem.appendChild(newTaskBio);

    onTaskComplete(newCheckBtn);
}
function onTaskComplete(btns) {
    btns.addEventListener("click", function (element) {
        var parents = element.target.parentElement;
        parents.classList.add("task-completed");
        setTimeout(() => {
            parents.remove();
        }, 400);

        if (tasksList.childNodes.length === 1) {
            setTimeout(() => {
                container.classList.add("task_list_empty");
            }, 200);
        }
    });
}
themeBtn.addEventListener("click", function () {
    var darkTheme = themeBtn.classList.toggle("dark");

    if (darkTheme) {
        root.style.setProperty("--theme-transition", "1s");
        root.style.setProperty("--primary-color", "#1E1E1E");
        root.style.setProperty("--secondary-color", "#3B3B3B");
        root.style.setProperty("--text-color", "#EAEAEA");
        root.style.setProperty("--task-color", "#3B3B3B");
        root.style.setProperty("--footer-color", "#1E1E1E");
        root.style.setProperty(
            "--theme-btn",
            `url('assets/Light-theme-btn.svg')`
        );
        root.style.setProperty(
            "--container-bg",
            `url('./assets/Dark-empty.svg')`
        );
        root.style.setProperty("--filter", "invert()");
    } else {
        root.style.setProperty("transition", "1s");
        root.style.setProperty("--primary-color", "white");
        root.style.setProperty("--secondary-color", "#1E1E1E");
        root.style.setProperty("--text-color", "black");
        root.style.setProperty("--task-color", "white");
        root.style.setProperty("--footer-color", "#1E1E1E");
        root.style.setProperty(
            "--theme-btn",
            `url('assets/Dark-theme-btn.svg')`
        );
        root.style.setProperty(
            "--container-bg",
            `url('./assets/Light-empty.svg')`
        );
    }
});
