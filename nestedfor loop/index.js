

for(let i=1;i<=5;i++)
{
    let inside="";
    for(let j=1;j<=i;j++)
    {
          inside+=(j+" ");
    }

    console.log(inside);
}




for(let i=1;i<=5;i++)
{
    let inside="";
    for(let j=1;j<=i;j++)
    {
          inside+=("*"+" ");
    }

    console.log(inside);
}





for(let i=1;i<=5;i++)
{
    let inside="";
    for(let j=1;j<=i;j++)
    {
          inside+=(i+" ");
    }

    console.log(inside);
}







rows=4;

for(let i=1;i<=rows;i++)
{
    let inside="";

    for(let k=1;k<=rows-i;++k)
    {
        inside+=" ";
    }
    for(let j=1;j<=i;j++)
    {
          inside+=("*"+" ");
    }

    console.log(inside);
}








function nested(rows){
for(let i=1;i<=rows;i++)
{
    let inside="";

    for(let k=1;k<=rows-i;++k)
    {
        inside+=" ";
    }
    for(let j=1;j<=i;j++)
    {
          inside+=("*"+" ");
    }

    console.log(inside);
}
}
nested(10)








rows=4;

for(let i=1;i<=rows;i++)
{
    let inside="";

    for(let k=1;k<=rows-i;++k)
    {
        inside+=" ";
    }
    for(let j=1;j<=i;j++)
    {
        if(i==1){
          inside+=("*"+" ");
        }
        else if(i==2){

            inside+=("@"+" ");
        }

        else if(i==3){

            inside+=("*"+" ");


        }

        else if(i==4)
        {
           inside+=("@"+" ");  
        }


    }

    console.log(inside);
}































































let arr=[1,5,4,10,8]
let temp=arr[0]

for(let p=0;p<=arr.length;p++){

    if(arr[p]>temp){
    temp=arr[p]
    }
}
console.log(temp)


for(i=0;i<=arr.length;i++){

let inside=" ";

for(k=1;k<arr[4]-arr[i];++k){

    inside +=" "
}

for(j=1;j<=arr[i];j++){

    inside +="*"+" "
}
console.log(inside)
}

























