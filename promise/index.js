let abc=new Promise((resolve, reject) => {
    
    let sucess=true;

    if(sucess)
    {
        resolve("sucess")
    }
    else{

        reject("failed")
    }
})

abc.then((msg)=>{

    console.log(msg)
    console.log("step 1")
    return msg;
}).then((msg)=>{

    console.log(msg)
    console.log("step 1")
    return msg;
}).then((msg)=>{

    console.log(msg)
    console.log("step 1")
    return msg;}).catch((err)=>{

        console.log(err)
    })