] let lowercase = "";
for(let i=97;i<=122;i++)
{
    lowercase+=String.fromCharCode(i);
}
const cipher=(pt,shift)=>
{
    let ind=0;
    let res=" ";
    for(let i = 0; i < pt.length; i++)
    {
            ind = lowercase.indexOf(pt[i]);
            ind = (shift+ind)%26;
            res+=lowercase[ind];
    }
    alert(res);
}
let p=prompt("Enter the string");
let s=parseInt(prompt("Enter the shift value"));
cipher(p,s);
