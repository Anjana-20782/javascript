// function printNum(num){

        
//     num=num+10;
//     console.log(`inside : ${num}`)
// }
// let x=10;

// printNum(x);

// console.log(`outside : ${x}`);





function printNum(obj){

        
    obj.name="Archana";
    console.log(`inside : ${obj.name}`)
}
let x={

    name:"Anjana"
}


console.log(`outside 1 : ${x.name}`);

printNum(x);

console.log(`outside 2 : ${x.name}`);