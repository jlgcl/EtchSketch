/*  ETCH-A-SKETCH PROJECT - WEBDEV101 - THE ODIN PROJECT
1. create a grid using div through JS.
2. create a hover effect.
3. create a "clear" feature.

STATUS:
    - created a grid 16x16 - align (REFERENCED: sqr.appendChild(col);)  [2h]
    - create a hover feature - timeout (DONE)                           [1h]
*/

let cont = document.querySelector(".gridCont");
let but = document.querySelector ("#butt");

function grid() {
    for(i=0; i<16; i++) {   //column (# of rows); 0 -> 15: 16 squares.
        let sqr = document.createElement("div");
        sqr.id = "gridSq";  //OR sqr.setAttribute("id", "gridSq");
        document.querySelector(".gridCont").appendChild(sqr);   //OR .getElementsbyClassName("gridCont")[0]; this method takes everything in the class so must specify; querySelector is non-live vs. getElements is live.
        for (j=0; j<16; j++) {  //using nested loop "fills" the grid
            let col = document.createElement("div");
            col.id = "gridSq";
            sqr.appendChild(col);   //inline-block blocks by element ("div" in this case); appending to col spreads the squares from col.
        }
    }

    cont.addEventListener ("mouseover", function(e) {   // "e" is the target event; treat it like a temporary attribute
            e.target.style.background = "black";   
            but.addEventListener ("click", function(){
                setTimeout(function(){
                    e.target.style.background = "";  //reset after timeout "3000"
                });
            })
    })
}

grid();