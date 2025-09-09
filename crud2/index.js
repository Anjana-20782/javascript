function form(event){

    let arr=JSON.parse(localStorage.getItem("name")) || [];
    event.preventDefault();
    let value=document.getElementById("name1").value;
    arr.push(value);
    localStorage.setItem("name",JSON.stringify(arr));
}