/*  ETCH-A-SKETCH PROJECT - WEBDEV101 - THE ODIN PROJECT
1. create a grid using div through JS.
2. create a hover effect.
3. create a "clear" feature.

STATUS:
    - created a grid 16x16 - align (REFERENCED: sqr.appendChild(col);)  [2h]
    - create a hover feature - timeout (DONE; MDN referenced)           [1h]
    - touchup: grid not setup properly - outside shade exists
        - re-size each square depending on grid size (line 26&27)
            Answer) set divHeight & divWidth then setAttribute based on set ratios.
        - removed outside shade by removing display inline-block at #gridSq CSS style.
    - add shade feature (regex as an option)
        Answer) style.opacity

NOTES
    - it would've been the preferred option to use CSS grid instead of nested for-loops.
*/

let cont = document.querySelector(".gridCont");
let but = document.querySelector ("#butt");
let shde = document.querySelector ("#shade");
let grr = document.querySelector("#gridSq");
let boxHeight = 400;
let boxWidth = 400;

function grid() {
    let grNum = prompt ("enter the number of grid x by x");
    let divHeight = boxHeight/grNum;
    let divWidth = boxWidth/grNum;
    
    for(i=0; i<grNum; i++) {   //column (# of rows); 0 -> 15: 16 squares.
        let sqr = document.createElement("div");
        sqr.id = "gridSq";  //OR sqr.setAttribute("id", "gridSq");
        sqr.setAttribute("style", `height: ${divHeight}px; width: ${divWidth}px`);  //IMPRTANT: sets grid square sizes by aspect ratio.
        cont.appendChild(sqr);   //OR .getElementsbyClassName("gridCont")[0]; this method takes everything in the class so must specify; querySelector is non-live vs. getElements is live.

        for (j=0; j<grNum; j++) {  //using nested loop "fills" the grid
            let col = document.createElement("div");
            col.id = "gridSq";
            col.setAttribute("style", `height: ${divHeight}px; width: ${divWidth}px`);
            sqr.appendChild(col);   //IMPORTANT: inline-block blocks by element ("div" in this case); appending to col spreads the squares from col.
        }
    }

    cont.addEventListener ("mouseover", function(e) {   // "e" is the target event; treat it like a temporary attribute
            e.target.style.background = "black";   
            but.addEventListener ("click", function(){
                setTimeout(function(){                  //we don't need this setTimeout method if we are just clearing without timeout.
                    e.target.style.background = "";  //reset after timeout "3000"
                });
            })
            
    })

    shde.addEventListener("click", function() {
        cont.addEventListener ("mouseover", function(e) {   // "e" is the target event; treat it like a temporary attribute
                e.target.style.background = gradient(e);  
                but.addEventListener ("click", function(){      
                        e.target.style.background = "";  
                })
        })
    })
       
       
    function gradient(e) {  // This is the actual function that gets applied in GradientMode
      if (e.ctrlKey) {      // Hold Ctrl to stop 'drawing'
        return
      } else if (e.target.style.backgroundColor !== 'black') {    // The first time you draw, make background 'Black' but opacity really low, so it looks white
        e.target.style.transition = 'none';
        e.target.style.opacity = 0.1;
        e.target.style.backgroundColor = 'black';
        e.target.style.borderColor = 'transparent';
      } else {
        e.target.style.transition = 'all 0.7s ease-out';          // To have a constant transition after it got randomised by a Reset
        e.target.style.opacity = Number(e.target.style.opacity) + 0.1;    // Darken the Pixel by 10%
      }
    }
       
}
    
grid();