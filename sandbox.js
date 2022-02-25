const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => { //fired when state changes
    //console.log(request, request.readyState)// request obj and its current state
    if (request.readyState === 4 && request.status === 200) { 
        //do something to the data
        console.log(request.responseText) // contains response data
    } else if (request.readyState === 4) {
        console.log("couldn't fetch data ");
    }
})

request.open("GET", "https://jsonplaceholder.typicode.com/todos/"); //setting up request path

request.send();



