
document.getElementById("koc4").addEventListener("mouseover", mouseOver);
document.getElementById("koc4").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("koci4").style.opacity = "0.6";
  document.getElementById("koc-yazi4").style.color = "white";
  document.getElementById("koc-alt4").style.backgroundColor = " orangered";
  document.getElementById("disle4").style.visibility = "visible";
}

function mouseOut() {
  document.getElementById("koci4").style.opacity = "2";
  document.getElementById("koc-yazi4").style.color = "rgb(153, 139, 139)";
  document.getElementById("koc-alt4").style.backgroundColor = "#434345";
  document.getElementById("disle4").style.visibility = "hidden";
 }

