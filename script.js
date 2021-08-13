const button = document.querySelector(".btn");
const result = document.querySelector(".result");

const check = ()=>{
const word =document.querySelector(".input-text").value;
const len = word.length;
let strt = word.substring( 0,Math.floor(len/2)).toLowerCase();
let end = word.substring(len-Math.floor(len/2)).toLowerCase();
// let flip = end.split("").reverse().join("");
let flip = [...end].reverse().join("");
if (strt === flip) {
      result.innerHTML = `${word.toUpperCase()} is a palindrome`;
    } else {
      result.innerHTML = `${word.toUpperCase()} is NOT a palindrome`;
    }
};


button.addEventListener("click",check);

