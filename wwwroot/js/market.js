const btn = () => {
    const icerikDOM = document.getElementById("icerik");
    icerikDOM.style.backgroundImage ="url(../img/market-1.jpg)";
  }
  const btn2 = () => {
    const icerikDOM = document.getElementById("icerik");
    icerikDOM.style.backgroundImage ="url(../img/market-2.jpg)";
  };
  const btn3 = () => {
    const icerikDOM = document.getElementById("icerik");
    icerikDOM.style.backgroundImage ="url(../img/market-3.jpg)";
  };

  const btu = () => {
    const btu = document.getElementById("btu");
    const btu2 = document.getElementById("btu2");
    const btu3 = document.getElementById("btu3");
    const div1 = document.getElementById("div1");
    const div2 = document.getElementById("div2");
    const div3 = document.getElementById("div3");
    btu.style.borderRight="0px"
    btu2.style.borderRight="2px solid grey"
    btu3.style.borderRight="2px solid grey"
 
    btu.style.backgroundColor="white"
    btu2.style.backgroundColor="#f2f2f2"
    btu3.style.backgroundColor="#f2f2f2"
    div1.style.display="block"
    div2.style.display="none"
    div3.style.display="none"
  };
  const btu2 = () => {
    const btu = document.getElementById("btu");
    const btu2 = document.getElementById("btu2");
    const btu3 = document.getElementById("btu3");
    const div1 = document.getElementById("div1");
    const div2 = document.getElementById("div2");
    const div3 = document.getElementById("div3");
    btu.style.borderRight="2px solid grey"
    btu2.style.borderRight="0px"
    btu3.style.borderRight="2px solid grey"

    btu.style.backgroundColor="#f2f2f2"
    btu2.style.backgroundColor="white"
    btu3.style.backgroundColor="#f2f2f2"
    div1.style.display="none"
    div2.style.display="block"
    div3.style.display="none"
  };
  const btu3 = () => {
    const btu = document.getElementById("btu");
    const btu2 = document.getElementById("btu2");
    const btu3 = document.getElementById("btu3");
    const div1 = document.getElementById("div1");
    const div2 = document.getElementById("div2");
    const div3 = document.getElementById("div3");
    btu.style.borderRight="2px solid grey"
    btu2.style.borderRight="2px solid grey"
    btu3.style.borderRight="0px"

    btu.style.backgroundColor="#f2f2f2"
    btu2.style.backgroundColor="#f2f2f2"
    btu3.style.backgroundColor="white"
    div1.style.display="none"
    div2.style.display="none"
    div3.style.display="blcok"
   
  };
  function arttir(){
 
    var sonuc=document.getElementById("sonuc");
    sonuc.value=Number(sonuc.value)+1;
    }