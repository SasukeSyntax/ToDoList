
const task = document.getElementById("input");
const list = document.getElementById("list");

function addtask(){
    const newTag = document.createElement("li");

    const content = task.value;

    newTag.textContent = content;

    list.appendChild(newTag);

}

