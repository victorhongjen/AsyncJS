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

//chaining promises
    // getToDos("todos/charlene.json").then( data => {
    //     console.log("promise 1 resolved", data);
    //     return getToDos("todos/stan.json");
    // }).then( data => {
    //     console.log("promise 2 resolved", data);
    //     return getToDos("todos/victor.json");
    // }).then( data => {
    //     console.log("promise 3 resolved", data)
    // }).catch( err => {
    //     console.log(err)
    // })

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



//fetch API

// fetch("todos/charlene.json").then((response)=> {
//     console.log("resolved", response);
//     return response.json()
// }).then(data=> {
//     console.log(data)
// }).catch((err)=> {
//     console.log("rejected", err)
// })

//async await

const gettingToDos = async () => { //async in front of the callback function is now an async function. Always returns a promise.
    //grab data
    const response = await fetch("todos/charlene.json"); // returns promise stalls by await

    if (response.status !== 200) {
        throw new Error("cannot feth data"); //throw our own error. If error is thrown, async function promise will be rejected.
    }
    const data = await response.json(); //response.json returns a promise, resolve with await and assign to data variable
    return data
}

//gettingToDos() //returns a promise

gettingToDos()
    .then(data => console.log("resolved", data))//still need one .then() because async returns a promise
    .catch(err => console.log("rejected", err.message))
