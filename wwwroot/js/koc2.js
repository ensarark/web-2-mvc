document.getElementById("koc2").addEventListener("mouseover", mouseOver);
document.getElementById("koc2").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("koci2").style.opacity = "0.4";
  document.getElementById("koc-yazi2").style.color = "white";
  document.getElementById("koc-alt2").style.backgroundColor = " orangered";
  document.getElementById("disle2").style.visibility = "visible";
}

function mouseOut() {
  document.getElementById("koci2").style.opacity = "2";
  document.getElementById("koc-yazi2").style.color = "rgb(153, 139, 139)";
  document.getElementById("koc-alt2").style.backgroundColor = "#434345";
  document.getElementById("disle2").style.visibility = "hidden";

 }

 
