function changeStyle() {
   switch (document.getElementById('style').value) {
       case ("black"): document.getElementById("changeStyle").style.background = "black";
       document.getElementById("changeStyle").style.color = "white";
       break;
       case ("blue"): document.getElementById("changeStyle").style.background = "blue";
       document.getElementById("changeStyle").style.color = "black";
       break;
       case ("white"): document.getElementById("changeStyle").style.background = "white";
       document.getElementById("changeStyle").style.color = "black";
       break
   }
}