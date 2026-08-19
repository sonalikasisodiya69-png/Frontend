const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

window.onload = loadTasks;

function addTask() {

    if(taskInput.value.trim() === ""){
        alert("Please enter a task");
        return;
    }

    createTask(taskInput.value);

    saveTasks();

    taskInput.value="";
}

function createTask(text){

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = text;

    span.onclick = function(){
        span.classList.toggle("completed");
        saveTasks();
    };

    const del = document.createElement("button");
    del.innerText = "Delete";
    del.className = "delete";

    del.onclick = function(){
        li.remove();
        saveTasks();
    };

    li.appendChild(span);
    li.appendChild(del);

    taskList.appendChild(li);
}

taskInput.addEventListener("keyup",function(e){
    if(e.key==="Enter"){
        addTask();
    }
});

function saveTasks(){

    localStorage.setItem("tasks",taskList.innerHTML);

}

function loadTasks(){

    taskList.innerHTML = localStorage.getItem("tasks") || "";

    document.querySelectorAll("#taskList span").forEach(span=>{
        span.onclick=function(){
            span.classList.toggle("completed");
            saveTasks();
        };
    });

    document.querySelectorAll(".delete").forEach(btn=>{
        btn.onclick=function(){
            btn.parentElement.remove();
            saveTasks();
        };
    });

}