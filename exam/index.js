

let frmsubmt=document.getElementById("frm").addEventListener("submit",(event)=>{

  event.preventDefault();
  let arr=JSON.parse(localStorage.getItem("name")) || [];
  let name=document.getElementById("name1").value;
  let age=document.getElementById("age").value;
  let department=document.getElementById("select").value;
  let salary=document.getElementById("salary").value;
  let data={ name,age,department,salary};
  arr.push(data);
  localStorage.setItem("name",JSON.stringify(arr));
  Show();
});

function show(){

  let arr=JSON.parse(localStorage.getItem("name"));
  let HTML="";
  arr.forEach(a,i=> {
     HTML+=`

     <tr>
     
     <td>${i}</td>
     <td>${a.name}</td>
     <td>${a.age}</td>
     <td>${a.department}</td>
     <td>${a.salary}</td>

     </tr>

     
     `
    
let table=document.getElementById("tablebody");
table.innerHTML = HTML
    
  });
}