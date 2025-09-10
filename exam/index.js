

let frmsubmt=document.getElementById("frm").addEventListener("submit",(event)=>{

  event.preventDefault();
  let arr=JSON.parse(localStorage.getItem("task")) || [];
  let name=document.getElementById("name1").value;
  let age=document.getElementById("age").value;
  let department=document.getElementById("select").value;
  let salary=document.getElementById("salary").value;
  let data={name,age,department,salary};
  arr.push(data);
  localStorage.setItem("task",JSON.stringify(arr));
  show();
});

function show(){

  let arr=JSON.parse(localStorage.getItem("task"));
  let HTML="";
  arr.forEach((a,i)=> {
     HTML+=`

     <tr>
     
     <td>${i}</td>
     <td>${a.name}</td>
     <td>${a.age}</td>
     <td>${a.department}</td>
     <td>${a.salary}</td>
     <td><button onclick="editshow(${i})">Edit</button><button onclick="deleteshow(${i})">Delete</button>

     </tr>

     
     `
    
let table=document.getElementById("tablebody");
table.innerHTML = HTML;
    
  });
}


function deleteshow(i){

  let arr=JSON.parse(localStorage.getItem("task"));
  arr.splice(i,1);
  localStorage.setItem("task",JSON.stringify(arr));

}
function editshow(i){

    let arr=JSON.parse(localStorage.getItem("task"));  
    let value=prompt("editshow",arr[i]);
    arr[i]=value;
     localStorage.setItem("task",JSON.stringify(arr));
    show();
}
