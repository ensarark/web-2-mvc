// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const load = setTimeout(loader, 2000);



function loader() {
     document.getElementById("sil").style.display = "none"
     document.getElementById("pos").style.position = "fixed"
  }
 
$(document).ready(function sliderr() {
   
   
    $('.prev').on('click', function nxt() {

        $('.slidediv').prev().addClass('slidediv');
        $('.slidediv').next().removeClass('slidediv');

    });

    $('.next').on('click', function() {

        $('.slidediv').next().addClass('slidediv');
        $('.slidediv').prev().removeClass('slidediv');

    });

   });

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

    $(document).ready(function(){
      $(".dropdown-toggle").dropdown();
    });
