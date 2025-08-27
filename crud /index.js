function valuesubmit(){

    let arr=JSON.parse(localStorage.getItem("name"))||[];
    let value=document.getElementById("name1").value;
    arr.push(value);
    localStorage.setItem("name",JSON.stringify(arr));
}

function frmshow(){


    let arr=JSON.parse(localStorage.getItem("name"));     
     let HTML="";
    arr.forEach(element => {
    
     HTML+=`<li>${element}</li>`;
      
       });

          let container=document.getElementById("div");
        container.innerHTML=HTML;
}