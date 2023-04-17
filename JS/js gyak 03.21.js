let elso = document.getElementById("elsosor")
elso.innerHTML = "javascript"

let masodik = document.getElementsByClassName("masodiksor")
masodik [0].innerHTML = "szintén"

let harmadik = document.getElementsByTagName("h1")
harmadik[0].innerHTML = "ez is"

let negyedik = document.getElementsByName("befogo")
negyedik[0].value = "meg ez is"

function haromszog(){
  
  let haromszog1 = Number(document.getElementsByName('haromszog1') [0].value)
  
  let haromszog2 = Number(document.getElementsByName('haromszog2')[0].value)
  
  
  let haromszog3 = Number (document.getElementsByName('haromszog3')[0].value)
  
  let uzenet= document.getElementById('kiiras')

  uzenet.style.backgroundColor="yellow"
  uzenet.style.color ="purple"
  uzenet.style.textShadow="5px 5px 5px black"
  
    if (haromszog1 === haromszog2 && haromszog1 === haromszog3 && haromszog2 === haromszog3) {
      uzenet.innerHTML="Ez egy egyenlő oldalú háromszög"
    } else if (haromszog1 === haromszog2 && haromszog1 + haromszog2 > haromszog3) {
      uzenet.innerHTML="Ez egy egyenlő szárú háromszög"
    } else if (haromszog1 + haromszog2 > haromszog3) {
      uzenet.innerHTML="Ez egy általános háromszög"
    } else if (haromszog1 + haromszog2 < haromszog3) {
      uzenet.innerHTML="Ez nem egy háromszög"
    }
}

/* document.getElementsByTagName ("h1")[0].style.display="none" */

function szaznal(){
  let szam = Number (document.getElementsByName("kisebbnagyobb")[0].value)

if (szam<100){
  vege.innerHTML="a szám kisebb 100-nál"
} else if(szam>100){
  vege.innerHTML="a szám nagyobb 100-nál"
} else {
  vege.innerHTML="a szám 100"
}
}

let szoveg1 = Gyula
let szoveg2 = Békés



