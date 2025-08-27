function formsubmit(event)
{

    event.preventDefault();
    let value=document.getElementById("name").value;
    let container=document.getElementById("divcontainer");
      container.innerHTML+=`<h1>your name is ${value}</h1>`



      let value1=document.getElementById("area").value;
      let container1=document.getElementById("divcontainer1");
      container1.innerHTML+=`<h1>your adress is ${value1}</h1>`



      let value2=document.querySelector(`input[type="radio"]:checked`).value;
      let container2=document.getElementById("divcontainer2");
      container2.innerHTML+=`<h1>gender is ${value2}</h1>`


    let value3=document.querySelectorAll(`input[type="checkbox"]:checked`);
      let arr=[];
      value3.forEach(element=> {

        arr.push(element.value);
        
      });
      let container3=document.getElementById("divcontainer3");
      container3.innerHTML+=`<h1>subject is ${arr}</h1>`

}