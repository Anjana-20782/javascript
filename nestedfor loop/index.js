

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