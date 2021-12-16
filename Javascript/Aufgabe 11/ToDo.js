
//JSON javascript object notation 

const tasks = [];
console.log(tasks);


printTaskList();


document.getElementById("addTask").addEventListener("click",function(){
    addTask();
});

function addTask(){
    let TaskName = document.getElementById("txtNewTask").value;
    let TaskResponsible = document.getElementById("txtResponsible").value;
    let Task = {name: TaskName, responsible: TaskResponsible, isDone: false};
    tasks.push(Task);
    printTaskList();
}


function printTaskList(){
    document.getElementById("taskList").innerHTML = getHTMLTasks();
}

function markTask(element){
    let index = element.attributes["data-index"].value;
    let isChecked = element.checked;

    tasks[index].isDone = isChecked;
    printTaskList();
}


function getHTMLTasks(){
    let html = "";
    let index = 0;
    tasks.forEach(element => {
        let checked = "";
        if (element.isDone){
            checked = "checked";
        }
        html += "<li><input onClick='markTask(this)' name= 'checkbox' data-index='" + index + "' type ='checkbox'" + checked + "/>" +  element.name + " - " + element.responsible + " - " + index + "<li>"
        index++;
    });

    return html;
}

function test(){
    alert("test");
}