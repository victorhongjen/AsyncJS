const getToDos = (callback) => { 
    const request = new XMLHttpRequest();
    
    request.addEventListener("readystatechange", () => { //fired when state changes
        //console.log(request, request.readyState)// request obj and its current state
        if (request.readyState === 4 && request.status === 200) { 
            //do something to the  data
            callback(undefined, request.responseText) //callback function with error or responseText
        } else if (request.readyState === 4) {
            callback("couldn't fetch data", undefined)
        }
    })
    
    request.open("GET", "https://jsonplaceholder.typicode.com/todos/"); //setting up request path
    
    request.send();
};

console.log(1)
console.log(2)
getToDos((err, data) => { //add callback function in getToDos function. Convention is err, data.
    console.log("callback fired"); //will not block the code. Pass back data when network data request complete
    if(err) {
        console.log(err);
    }else {
        console.log(data);
    }
}); 
console.log(3)
console.log(4)




