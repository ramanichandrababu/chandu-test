

function show(val)
{
 document.getElementById("demo").value+=val;

}

function solve(val)
{

let a=document.getElementById("demo").value;
let b=eval(a);
document.getElementById("demo").value=b;

}

function clear1() 
{ 

  document.getElementById("demo").value ="";

}  