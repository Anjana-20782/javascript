// arrow functions

// let sum=(a,b)=>{

//     let sums=a+b;
//     console.log(sums);
// }
// sum(10,20);



// anonymous function

// {(

//     function(a,b)
//     {
//         console.log(a+b);
//     }
// )(10,20)}




// function expression

// let sum=function(a,b){

//     let sums=a+b;
//     console.log(sums);

// }
// sum(10,15)




// callback function

// function greet(){

//     console.log("good bye");
// }

// function welcome(name,age,subject,cb)
// {

//     console.log("hello "+name +" "+age + " "+subject);
//     cb();
// }

// welcome("Anjana",20,"java",greet)




// closure function

// function outer(a,b)
// {
//     function inner()
//     {
//         let sum=a+b;
//         console.log(sum);
//     }


//     return inner;
// }
// let second=outer(8,20);
// second();




// recursive function

// function factorial(n)
// {
//     if(n<=1)
//     {
//         return 1;
//     }
//     return(factorial(n-1)*n);
// }
// console.log(factorial(5));  







