function formsbmt(event)
{

event.preventDefault()
let value=document.getElementById("name1").value;
 localStorage.setItem("name",value);
// alert(`Your name is ${value}`)
// prompt("enter your name","hi")
}

// function update()
// {
//     let value="hello";
//   localStorage.setItem("name",value);
// }