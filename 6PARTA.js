const capi=(str) => {
  let words = str.split(" ");
  for(let i=0;i<words.length;i++){
    words[i]=words[i][0].toUpperCase()+words[i].slice(1);
  }
  return words.join(" ");
}
const originalString = prompt("Enter string");
const caps=capi(originalString);
alert(caps);
