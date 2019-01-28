
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/
import img1 from './980x.jpg';
import img2 from './38588p.jpg';
import img3 from './cat1.jpg';
import img4 from './cat2.jpg';
import img5 from './cat4.jpg';
import img6 from './cat12.jpg';
import img7 from './cat123.jpg';
import img8 from './cat124.jpg';
import img9 from './cath1.png';
import img10 from './index.jpeg';
import img11 from './lead411.jpg';
import img12 from './maxresdefault.jpg';

var indexphoto = 0;
phototurn ();

function phototurn(){
  var i;
  var x= document.getElementsByClassName("photo");
  for (i=0;i<x.length;i++){
    x[i].style.display="none";
  }
  indexphoto++;
  if (indexphoto > x.length)
  {indexphoto = 1}
  x[indexphoto-1].style.display = "block";
  setTimeout(phototurn,1000);
}
