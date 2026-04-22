
const task = document.getElementById("input");
const list = document.getElementById("list");

let taskCount = 0;

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
}


