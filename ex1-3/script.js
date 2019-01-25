
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/
document.querySelector('#Reset').addEventListener('click',() =>{
  document.getElementById('name').value="";
  document.getElementById('power').value="";
  document.getElementById('motivation').value="";
  document.getElementById('conquer').value="";
});
document.querySelector("#display").addEventListener("click", () =>{
  let box1 = document.getElementById('name').value;
  let box2 = document.getElementById('power').value;
  let box3 = document.getElementById('motivation').value;
  let box4 = document.getElementById('conquer').value;
  document.querySelector("#name").style.visibility = 'hidden';
  document.querySelector("#power").style.visibility = 'hidden';
  document.querySelector("#motivation").style.visibility = 'hidden';
  document.querySelector("#conquer").style.visibility = 'hidden';
  document.querySelector("#Reset").style.visibility = 'hidden';
  document.querySelector("#display").style.visibility = 'hidden';
  document.querySelector("#pname").innerText= "Name : " +box1;
  document.querySelector("#ppower").innerText= "Power : " +box2;
  document.querySelector("#pmotiv").innerText= "Motivation : " +box3;
  document.querySelector("#pconquer").innerText= "Plan to conquer the world : " +box3;
});
