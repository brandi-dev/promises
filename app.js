const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if(delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500; 
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

//CALLBACK HELL
// fakeRequestCallback('books.com/page1', 
//     function (response) {
//         console.log("IT WORKED!!!")
//         console.log(response)
//         fakeRequestCallback('books.com/page2', 
//         function (response) {
//             console.log("IT WORKED AGAIN!!!")
//             console.log(response)
//             fakeRequestCallback('books.com/page3', 
//             function (response) {
//                 console.log("IT WORKED AGAIN (3RD REQUEST)!!!")
//                 console.log(response)
//             }, 
//             function (err) {
//                 console.log("ERROR (3rd REQ)!!!!", err)
//             })
//         }, 
//         function (err) {
//             console.log("ERROR (2ND REQ)!!!", err)
//         })
//     }, function (err) {
//         console.log("ERROR!!!", err)
//     })

   
// fakeRequestPromise('yelp.com/api/coffee/page1')
//     // this is an Object with method on it .then and .catch
//     // we pass a callback into both methods and only one will 
//     // run.
//     request
//     //this method runs if the promise is resolved
//         .then(() => {
//             console.log("IT WORKED!!!!!!! (page1)")
//             fakeRequestPromise('yelp.com/api/coffee/page2')
//                 .then(() => {
//                     console.log("IT WORKED!!!!!!! (page2)")
//                     fakeRequestPromise('yelp.com/api/coffee/page3')
//                         .then(() => {
//                             console.log("IT WORKED!!!!!!! (page3)")
//                         })
//                         .catch(() => {
//                             console.log("OH NO, ERROR!!! (page3)")
//                     })
//                 })
//                 .catch(() => {
//                     console.log("OH NO, ERROR!!! (page2)")
//             })
//     })
//     //this method runs if the promise is rejected
//         .catch(() => {
//             console.log("OH NO, ERROR!!! (page1)")
//     })

// you can chain .then as long as you return the promise request
fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log("IT WORKED!!!!!!! (page1)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then(() => {
        console.log("IT WORKED!!!!!!! (page2)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then(() => {
        console.log("IT WORKED!!!!!!! (page3)")
        console.log(data)
    })
    .catch((err) => {
        console.log("OH NO, A REQUEST FAILED!!!")
    })