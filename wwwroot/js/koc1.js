document.getElementById("koc").addEventListener("mouseover", mouseOver);
document.getElementById("koc").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("koci").style.opacity = "0.4";
  document.getElementById("koc-yazi").style.color = "white";
  document.getElementById("koc-alt").style.backgroundColor = " orangered";
  document.getElementById("disle").style.visibility = "visible";
}

function mouseOut() {
  document.getElementById("koci").style.opacity = "2";
  document.getElementById("koc-yazi").style.color = "rgb(153, 139, 139)";
  document.getElementById("koc-alt").style.backgroundColor = "#434345";
  document.getElementById("disle").style.visibility = "hidden";

 }

 
