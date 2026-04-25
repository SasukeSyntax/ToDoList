
const task = document.getElementById("input");
const list = document.getElementById("list");

let taskCount = 0;

// list.addEventListener("keypress", function(event)){
//     if (event.key === "Del"){
//         deleteTask();
//     }
// }

// did not work :(

task.addEventListener("keypress", function(event){
        if (event.key === "Enter"){
            addtask();
        }
    })


function addtask(){

    taskCount++

    const newTag = document.createElement("li");

    const content = task.value;

    const deleteButton = document.createElement("button");


    newTag.textContent = content;
    newTag.classList.add("list-item");
    newTag.id = "item-" + taskCount;

    deleteButton.textContent = "X";
    deleteButton.classList.add("delete-btn");
    deleteButton.id = "deleteBtn-" + taskCount;

    newTag.appendChild(deleteButton);


    if (content == "") {
        console.log("error-empty string");
    } else {
        list.appendChild(newTag);
    }


    // deleteButton.onclick(deleteTask()); 

    deleteButton.addEventListener("click", function deleteTask(){
        newTag.remove();
    })

    // newTag.appendChild(deleteButton);



    // list.appendChild(newTag);
    saveTask();
}

function saveTask() {
    const tasks = [];
    document.querySelectorAll(".list-item").forEach(task => {
        tasks.push(task.childNodes[0].textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

window.onload = function() {
    const saved = localStorage.getItem("tasks");
    if (saved) {
        JSON.parse(saved).forEach(taskText => {
            taskCount++;
            const newTag = document.createElement("li");
            const deleteButton = document.createElement("button");

            newTag.textContent = taskText;
            newTag.classList.add("list-item");
            newTag.id = "item-" + taskCount;

            deleteButton.textContent = "X";
            deleteButton.classList.add("delete-btn");
            deleteButton.id = "deleteBtn-" + taskCount;

            newTag.appendChild(deleteButton);
            list.appendChild(newTag);

            deleteButton.addEventListener("click", function() {
                newTag.remove();
                saveTask();
            });
        });
    }
}


