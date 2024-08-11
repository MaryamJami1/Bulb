
let imgON = document.getElementById("img")
function img(){
   imgON.src="bulb.png"
   imgON.className="styling"
   document.getElementById("on").disabled= true
   document.getElementById("off").disabled= false
}


function imgOff(){
imgON.src="Bulb light png.jfif"
document.getElementById("on").disabled= false
document.getElementById("off").disabled= true
}
