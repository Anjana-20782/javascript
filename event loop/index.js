console.log("start")

setTimeout(()=>{

    console.log("macro task1")
     console.log("macro task2")

},0);

Promise.resolve().then(()=>{

    console.log("micro task 1")
    console.log("micro task 2")
});


console.log("end")