// console.log("start")

// setTimeout(()=>{

//     console.log("macro task1")
//      console.log("macro task2")

// },0);

// Promise.resolve().then(()=>{

//     console.log("micro task 1")
//     console.log("micro task 2")
// });


// console.log("end")


let arr=[1,2,[3,4],[5,[6]]]
let result=[];

function flatArray(){

    for(ele of array)
    {
        if(array.isarray(ele))
        {

            result=result.concat(flatArray(ele))
        }

        else{

            result.push(ele)
        }
    }

    return result;
}

console.log(flatArray())