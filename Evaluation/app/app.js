

async function loadingJSON() {

    // fetch data from JSON
    const response = await fetch('http://localhost:3000/todos');
    var arr = await response.json();
    console.log(arr);

    for(let i = 0; i < arr.length; i++){
        if(arr[i]["isCompleted"] == false){
            var ul = document.getElementById("pending-list");
            console.log(arr[i]["id"])
            var pendingRow = "<li id = '" + "rowContent" + arr[i]["id"] + "' >" + arr[i]["content"] + "<button id = '" + "pendingRight" + arr[i]["id"] + "' onclick='rightTask(this.id)'>Right</button><button id = '" + "pendingDelete" + arr[i]["id"] + "' onclick='deleteTask(this.id)'>Delete</button><button id = '" + "pendingEdit" + arr[i]["id"] + "' onclick='editTask(this.id)'>Edit</button></li>";
            ul.insertAdjacentHTML('beforeend', pendingRow);
        }else{
            var ul = document.getElementById("completed-list");
            var completedRow = "<li id = '" + "rowContent" + arr[i]["id"] + "'><button id = '" + "completedLeft" + arr[i]["id"] + "' class='left' onclick='leftTask(this.id)'>Left</button>" + arr[i]["content"] + "<button id = '" + "completedDelete" + arr[i]["id"] + "' class='right' onclick='deleteTask(this.id)'>Delete</button><button id = '" + "completedEdit" + arr[i]["id"] + "' onclick='editTask(this.id)' class='right'>Edit</button></li>";
            ul.insertAdjacentHTML('beforeend', completedRow);
        }
    }

}



// tested
function addTask(){

    var inputValue = document.getElementById("inputValue").value;

    var ul = document.getElementById("pending-list");
    var pendingRow = "<li>" + inputValue + "<button>Right</button><button onclick='deleteTask()'>Delete</button><button>Edit</button></li>";
    ul.insertAdjacentHTML('beforeend', pendingRow);


    // add data to JSON 
    let httpPush = new XMLHttpRequest();
    httpPush.open("POST", "http://localhost:3000/todos", true);
    httpPush.setRequestHeader("Content-Type", "application/json");
    var dataPush = JSON.stringify({"content": inputValue, "isCompleted": false});
    httpPush.send(dataPush);

}



// tested
function deleteTask(id_clicked){
    
    let result = id_clicked.match(/[a-zA-Z]+|[0-9]+/g);
    console.log(result[1])

    document.getElementById("rowContent" + result[1]).outerHTML = "";

    console.log(id_clicked) 
    var url = "http://localhost:3000/todos/" + result[1]
    return fetch(url, {
        method: 'DELETE'
    }).then(response => response.json())

}


function editTask(id_clicked){
    let result = id_clicked.match(/[a-zA-Z]+|[0-9]+/g);
    console.log(result[1])

}




function rightTask(id_clicked){
    
    let result = id_clicked.match(/[a-zA-Z]+|[0-9]+/g);
    console.log(result[1])

    let originalContent = document.getElementById("rowContent" + result[1]).textContent;
    originalContent = originalContent.replace("RightDeleteEdit", "");

    console.log("original content: ", originalContent)

    document.getElementById("rowContent" + result[1]).outerHTML = "";

    
    var url = "http://localhost:3000/todos/" + result[1];

    const data = { 
        isCompleted: true,
        content: originalContent,
        id: result[1]
    };

    fetch(url, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(window.location.reload())
}






function leftTask(id_clicked){
    let result = id_clicked.match(/[a-zA-Z]+|[0-9]+/g);
    console.log(result[1])

    let originalContent = document.getElementById("rowContent" + result[1]).textContent;
    originalContent = originalContent.replace("Left", "");
    originalContent = originalContent.replace("Delete", "");
    originalContent = originalContent.replace("Edit", "");
    
    console.log("original content: ", originalContent)

    document.getElementById("rowContent" + result[1]).outerHTML = "";

    
    var url = "http://localhost:3000/todos/" + result[1];

    const data = { 
        isCompleted: false,
        content: originalContent,
        id: result[1]
    };

    fetch(url, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(window.location.reload())
}