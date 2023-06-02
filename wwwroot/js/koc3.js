
document.getElementById("koc3").addEventListener("mouseover", mouseOver);
document.getElementById("koc3").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("koci3").style.opacity = "0.6";
  document.getElementById("koc-yazi3").style.color = "white";
  document.getElementById("koc-alt3").style.backgroundColor = " orangered";
  document.getElementById("disle3").style.visibility = "visible";
}

function mouseOut() {
  document.getElementById("koci3").style.opacity = "2";
  document.getElementById("koc-yazi3").style.color = "rgb(153, 139, 139)";
  document.getElementById("koc-alt3").style.backgroundColor = "#434345";
  document.getElementById("disle3").style.visibility = "hidden";
 }

