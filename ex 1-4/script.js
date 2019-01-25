
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/
let v1=0;
let v2=0;
let v3=0;
let vday=25;
let vmonth=1;
let vyear=2019;
let age=0;
document.querySelector("#bsubmit").addEventListener("click", ()=>{

let value1=document.querySelector("#day").value
v1=Number(value1);
let value2=document.querySelector("#month").value
v2=Number(value2);
let value3=document.querySelector("#year").value
v3=Number(value3);
if(v1>=vday && v2>=month && v3<vyear)
age= vyear-v3;
else{
  age=(vyear-v3)-1;
}
console.log(age);
document.querySelector("#para").innerText = "Votre age : " + age;

});
