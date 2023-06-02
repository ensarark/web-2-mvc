const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});


function kontrol(form) {
    var adiniz = form.adiniz.value;
    var sifre = form.sifre.value;
    var sonuc=document.getElementById("sonuc");
    var gizle=document.getElementById("gizle");
    var ad ="ensar";
    var sf ="1234"
    var ad2 ="admin";
    var sf2 ="1234"
    var son=3;

    if (adiniz.length === 0) {
        alert("Lütfen Adınızı Girin");
        return false;
    }

    if (sifre.length === 0) {
        alert("Lütfen şifrenizi girin");
        return false;
    }
    if (adiniz==ad && sifre==sf) {
        window.location = "AnaSayfa.html"
        return false;
    }  
    else if(adiniz==ad2 && sifre==sf2) {
        window.location = "Admin-panel.html"
        return false;
    }
    else{
        alert("Lütfen Şifreniiz veya Adınızı Kontrol Ediniz ")
        sonuc.value=Number(sonuc.value)+1;
        console.log(sonuc.value)
        if(sonuc.value==3){
         gizle.style.display="block"
        }
        return false;
    }
 

    return true;
}
function arttir(){
var tr =document.getElementById("tr");
var sonuc=document.getElementById("sonuc");
sonuc.value=Number(sonuc.value)+1;
console.log(sonuc.value)
if(sonuc.value==3)
{
tr.style.display="block"
}
}
