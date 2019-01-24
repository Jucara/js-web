
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

document.querySelector('.backblack').style.backgroundColor =  'black';
document.querySelector('.bluebutton').addEventListener("click",()=>{
  document.querySelector('.backblack').style.backgroundColor =  'blue';})
  document.querySelector('.greenbutton').addEventListener("click",()=>{
    document.querySelector('.backblack').style.backgroundColor =  'green';})
    document.querySelector('.redbutton').addEventListener("click",()=>{
      document.querySelector('.backblack').style.backgroundColor =  'red';})
