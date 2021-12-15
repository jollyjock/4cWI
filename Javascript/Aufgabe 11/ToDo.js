
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


function getHTMLTasks(){
    let html = "";
    tasks.forEach(element => {
        let checked = "";
        if (element.isDone){
            checked = "checked";
        }
        html += "<li><input type ='checkbox'"+ checked + "/>" +  element.name + " - " + element.responsible + "<li>"
        console.log(element)
    });

    return html;
}