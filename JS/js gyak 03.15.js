/*  for(let i=1; i<25 i>35; i++){
  document.write(i , ". sor","<br>","<hr>")
} */

let j=1
while(j<25 && j>35){
document.write(j," . sor","<br>")
j++
}

szam1 = 15
szam2 = 14

if (szam1 > szam2){
  document.write(szam1, " nagyobb,mint", szam2,"<hr>")
} else if (szam1 < szam2){
  document.write(szam1, " kisebb,mint ",szam2)
}  else{
  document.write("A két szám egyenlő")
}

let eletkor=18

if (eletkor > 18){
  document.write("megtekintheted az oldalt")
} else if (eletkor < 18){
  document.write("Csak 18 éven felülieknek")
}
else{
  document.write("Gratulálunk 18.születésnapodhoz", "<br>")
}

for (let i=100; i<200;i++){
  if (i%3==0)
  document.write(i, "<br>")

}


/* ujszam=prompt("Számot!")
ujszam1=prompt("Másik számot!")


if (ujszam > ujszam1){
  document.write(ujszam, " nagyobb,mint", ujszam1,"<hr>")
} else if (ujszam < ujszam1){
  document.write(ujszam, " kisebb,mint ",ujszam1)
}  else{
  document.write("A két szám egyenlő")
} */


/* a= Number(prompt("egyik oldal"))
b= Number(prompt("másik oldal"))

alert ("A téglalap kerülete "+ (a+b)*2,) */

/* let egyik=Number(prompt("Egyik szám"))
let másik=Number(prompt("Másik szám"))

if (egyik<másik){
  document.write("Eredmény:" + (másik-egyik))
} else if(egyik<másik){
  document.write("Eredmény " + egyik-másik  )
} else {
  document.write("A különbség 0")
} */

/* szam1 = 15
szam2 = 14

megerosit = confirm("Biztos kiszámolod?")

if (szam1 > szam2 && megerosit==true){
  document.write(szam1, " nagyobb,mint", szam2,"<hr>")
} else if (szam1 < szam2){
  document.write(szam1, " kisebb,mint ",szam2)
}  else{
  document.write("A két szám egyenlő")
}


const pi=3.14
let r= prompt("Adja meg a kör sugarát")
korszamolas = confirm("biztos a kor sugara?")

if(korszamolas==true){
  alert("A kör területe"+(r*r*pi))
  
}else alert("Ez nem kör!") */


/* let haromszog1 = Number(prompt("Adja meg a háromszög egyik oldalát"))
let haromszog2 = Number(prompt("Adja meg a háromszög másik oldalát"))
let haromszog3 = Number(prompt("Adja meg a háromszög harmadik oldalát")) */






function haromszog(){

/*   let elso = document.getElementsByName('befogo') */


let haromszog1 = Number(document.getElementsByName('haromszog1') [0].value)

let haromszog2 = Number(document.getElementsByName('haromszog2')[0].value)


let haromszog3 = Number (document.getElementsByName('haromszog3')[0].value)

let uzenet= document.getElementById('kiiras')

  if (haromszog1 === haromszog2 && haromszog1 === haromszog3 && haromszog2 === haromszog3) {
    uzenet.innerHTML="Ez egy egyenlő oldalú háromszög"
  } else if (haromszog1 === haromszog2 && haromszog1 + haromszog2 > haromszog3) {
    uzenet.innerHTML="Ez egy egyenlő szárú háromszög"
  } else if (haromszog1 + haromszog2 > haromszog3) {
    uzenet.innerHTML="Ez egy általános háromszög"
  } else if (haromszog1 + haromszog2 < haromszog3) {
    uzenet.innerHTML="Ez nem egy háromszög"
  }

/*   uzenet.style.backgroundColor="yellow"
  uzenet.style.color="red"
  uzenet.style.fontSize="3rem" */


}

function myFunction(x){
  x.style.background="yellow"
  x.style.color="red"
}





/* if (haromszog1 === haromszog2 && haromszog1 === haromszog3 && haromszog2 === haromszog3) {
  document.write("Ez egy egyenlő oldalú háromszög")
} else if (haromszog1 === haromszog2 && haromszog1 + haromszog2 > haromszog3) {
  document.write("Ez egy egyenlő szárú háromszög")
} else if (haromszog1 + haromszog2 > haromszog3) {
  document.write("Ez egy általános háromszög")
} else if (haromszog1 + haromszog2 < haromszog3) {
  document.write("Ez nem egy háromszög")
} */



/* function szamolas(){
  let a = Number (document.getElementsByName("szaznal")[0].value)

  let uzenet2=document.getElementById("eredmeny")

  if (a>100){
  uzenet2.innterHTML="Ez a szám nagyobb mint 100"
  }

} */

