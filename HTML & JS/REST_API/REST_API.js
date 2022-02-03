

function registerEvents(){
    document.getElementById("loadTasks").addEventListener("click", function(){
        loadTasks();

    })

    document.getElementById("loadUser").addEventListener("click", function(){
        loadUsers();
    })
}

function loadTasks(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        let html = "";
      data.forEach(task => {
          html += "<li>" + task.title + "</li>";
      });

      document.getElementById("list").innerHTML = html;
    })
    .catch(function (err) {
      console.log(err);
    });
}

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        let html = "";
      data.forEach(user => {
          html += "<li>" + user.name + "</li>";
      });

      document.getElementById("list").innerHTML = html;
    })
    .catch(function (err) {
      console.log(err);
    });
}

registerEvents();  