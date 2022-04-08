

async function loadingJSON() {

    // fetch data from JSON
    const response = await fetch('http://localhost:3000/todos');
    var arr = await response.json();
    console.log(arr);

    for(let i = 0; i < arr.length; i++){
        if(arr[i]["isCompleted"] == false){
            var ul = document.getElementById("pending-list");
            console.log(arr[i]["id"])
            var pendingRow = "<li id = '" + arr[i]["id"] + "'>" + arr[i]["content"] + "<button>Right</button><button onclick='deleteTask()'>Delete</button><button>Edit</button></li>";
            ul.insertAdjacentHTML('beforeend', pendingRow);
        }else{
            var ul = document.getElementById("completed-list");
            var completedRow = "<li id = '" + arr[i]["id"] + "'><button class='left'>Left</button>" + arr[i]["content"] + "<button class='right' onclick='deleteTask()'>Delete</button><button class='right'>Edit</button></li>";
            ul.insertAdjacentHTML('beforeend', completedRow);
        }
    }

}




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




function deleteTask(){
    console.log("delete in progress")
}
