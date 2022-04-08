

async function loadingJSON() {

    // fetch data from JSON
    const response = await fetch('http://localhost:3000/todos');
    var arr = await response.json();
    console.log(arr);

    for(let i = 0; i < arr.length; i++){
        if(arr[i]["isCompleted"] == false){
            var ul = document.getElementById("pending-list");
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(arr[i]["content"]));
            ul.appendChild(li);
        }else{
            var ul = document.getElementById("completed-list");
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(arr[i]["content"]));
            ul.appendChild(li);
        }
    }



    // add data to JSON 
    let httpPush = new XMLHttpRequest();
    httpPush.open("POST", "http://localhost:3000/todos", true);
    httpPush.setRequestHeader("Content-Type", "application/json");
    var dataPush = JSON.stringify({ "content": "test", "isCompleted": false, });
    httpPush.send(dataPush);



    
    
}





