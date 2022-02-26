const getToDos = ((resource)=> {

    return new Promise((resolve, reject)=> {
    
        const request = new XMLHttpRequest();
        
        request.addEventListener("readystatechange", () => { //fired when state changes
            //console.log(request, request.readyState)// request obj and its current state
            if (request.readyState === 4 && request.status === 200) { 
                //do something to the  data
                const data = JSON.parse(request.responseText) //turn JSON string to JS obj
                resolve(data)
            } else if (request.readyState === 4) {
                reject("error getting data")
            }
        })
        
        request.open("GET", resource); //setting up request path
        
        request.send();
    })
});


getToDos("todos/charlene.JSON").then(data => {
    console.log("promise resolved", data)
}).catch(err => {
    console.log(err)
})

//callback hell

// getToDos("todos/charlene.json", (err, data) => { //add callback function in getToDos function. Convention is err, data.
//     console.log(data); //will not block the code. Pass back data when network data request complete
//     getToDos("todos/stan.json", (err, data) => {
//         console.log(data);
//         getToDos("todos/victor.json", (err,data) => {
//             console.log(data);
//         })
//     })
// }); 

//promises

// const getSomething = () => {
//     //some network request

//     return new Promise((resolve, reject)=> {
//         //fetch something
//         resolve("some data") //data from fetch
//         // reject("some error") //error from fetch
//     });
// }

// getSomething().then(data => {
//     console.log(data)
// }, err => {
//     console.log(err)
// }); 

// getSomething().then(data=>{
//     console.log(data)
// }).catch(err=>{
//     console.log(err)
// });



