for(let i=1; i<6; i++){
  document.write(i,".","sor <br>",)
};


j=1
while(j<11){
  document.write(j,".","sor <br>",)
  j++
}
alert ("Vigyázz,nagy baj!")
szam1 = 4
szam2 = 19


if(szam1 > szam2){
  document.write(szam1, "nagyobb,mint ", szam2)
} else if(szam1<szam2) {
  document.write(szam1 , " kisebb,mint  ", szam2,"<hr>")
} else{
  document.write("A két szám egyenlő")
}

eletkor = 18
korhatar = 18

if (eletkor > korhatar){
  document.write ("Megtekinthető az oldal")
} else if (eletkor < korhatar){
  document.write("Az oldal csak 18 év felett látogatható")
  } else{
    document.write("Gratulálunk a 18.születésnapodhoz <hr>")
  }

for (let i=100; i<200; i++){
  if (i%3==0)
  document.write(i,"<br>")
}



szam2=Number (prompt("Számot!"))
szam3= Number (prompt("Másik számot!"))
 if (szam2>szam3 ){
  document.write("Az eredmény ",szam2 - szam3)
 }
 if(szam2<szam3)
 document.write("Az eredmény ",szam3-szam2)





