// let obj={

//     name1:"anjana",
//     new:function(){

//         const arrow= ()=>{

//             console.log(this.name1)
//         }
//         arrow()
//     }

// }
// obj.new()





// let obj={

//     name1:"anjana",
//     new:function(){

//         console.log(this.name1)
//     }
// }
// obj.new()



// function myName(name,city){

// console.log(`My name is ${name}.i'm live in ${city} and my age ${this.age}`)

// }

// const obj={

//     age:20
// }
// myName.call(obj,"Anjana","Palakkad")



// function myName(name,city){

// console.log(`My name is ${name}.i'm live in ${city} and my age ${this.age}`)

// }

// const obj={

//     age:20
// }
// myName.apply(obj,["Anjana","Palakkad"])






function myName(name,city){

console.log(`My name is ${name}.i'm live in ${city} and my age ${this.age}`)

}


let bindFn=myName.bind({age:20});
bindFn("Anjana","Palakkad");