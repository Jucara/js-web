
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

/*function insult(){
  if (x>1 && x<4){
    document.querySelector(".oups").innerText="Neni sès";
  }else if (x>=4 && x<10){
    document.querySelector(".oups").innerText="Try again";
  }else(x>10)
  document.querySelector(".oups").innerText="J'abandonne."
}*/
function  slide(){
  document.querySelector("#trollbutton").style.top = (Math.random()*300) + "px";
  document.querySelector("#trollbutton").style.left = (Math.random()*300) + "px";
}
document.querySelector("#trollbutton").addEventListener("mouseover", slide);
