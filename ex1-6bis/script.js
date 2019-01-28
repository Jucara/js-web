
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

import img1 from './chats/980x.jpg';
import img2 from './chats/38588p.jpg';
import img3 from './chats/cat1.jpg';
import img4 from './chats/cat2.jpg';
import img5 from './chats/cat4.jpg';
import img6 from './chats/cat12.jpg';
import img7 from './chats/cat123.jpg';
import img8 from './chats/cat124.jpg';
import img9 from './chats/cath1.png';
import img10 from './chats/index.jpeg';
import img11 from './chats/lead411.jpg';
import img12 from './chats/maxresdefault.jpg';

let image =[img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12];

        function shuffle(a) {
                var j, x, i;
                for (i = a.length - 1; i > 0; i--) {
                    j = Math.floor(Math.random() * (i + 1));
                    x = a[i];
                    a[i] = a[j];
                    a[j] = x;
                }
                return a;
            }


            function displ(a) {
              for (let i = 0; i < a.length; i++) {
              var x = document.createElement("IMG");

              x.setAttribute("src", a[i]);
              x.setAttribute("width", "100px");
              x.setAttribute("height", "100px");
              document.querySelector(".dimage").appendChild(x);
            }
            }
            document.querySelector("#brandom").addEventListener("click", ()=>{
              document.querySelector('.dimage').innerText = "";
              shuffle(image);
              displ(image);

            });
