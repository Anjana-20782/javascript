console.log("hellohi");
let i=1;
let abc=setInterval(()=>{

    console.log("hello"+1)
    ++i;

},1000);

setTimeout(()=>{

    clearInterval(abc);
},5000)