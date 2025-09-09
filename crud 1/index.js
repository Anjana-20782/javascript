function valuesubmit(){

    let arr=JSON.parse(localStorage.getItem("name"))||[];
    let value=document.getElementById("name1").value;
    arr.push(value);
    localStorage.setItem("name",JSON.stringify(arr));
}

function frmshow(){


    let arr=JSON.parse(localStorage.getItem("name"));     
     let HTML="";
    arr.forEach((element,i) => {
    
     HTML+=`<li>${element}</li><button onclick="editshow(${i})">Edit</button><button onclick="deleteshow(${i})">Delete</button>`;
      
       });

          let container=document.getElementById("div");
        container.innerHTML=HTML;
}

function editshow(i){

    let arr=JSON.parse(localStorage.getItem("name"));  
    let value=prompt("editshow",arr[i]);
    arr[i]=value;
     localStorage.setItem("name",JSON.stringify(arr));
    frmshow();
}

function deleteshow(i){

  let arr=JSON.parse(localStorage.getItem("name"));
  arr.splice(i,1)
   localStorage.setItem("name",JSON.stringify(arr));
   frmshow();

}


