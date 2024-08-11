
let imgON = document.getElementById("img");

function img() {
   imgON.src = "bulb.png";
   imgON.className = "styling";
   document.getElementById("on").disabled = true;
   document.getElementById("off").disabled = false;
   document.getElementById("body").className=" backgroundOn"
}

function imgOff() {
   imgON.src = "Bulb_light_png-removebg-preview.png";
   document.getElementById("on").disabled = false;
   document.getElementById("off").disabled = true;
  document.getElementById("body").className=" backgroundOf"
}
