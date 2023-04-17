function ellenorzes(){

  cim = regisztracio.email.value
  if (cim.length ==0){
    alert("Nem adtad meg az e-mail címed!")
  }
  }

  function ellenorzes2(){
    jelszo = regisztracio.password.value
    jelszo2 = regisztracio.password2.value
    if (jelszo.length <8 && jelszo.length >0){
      alert("Nem lehet kevesebb mint 8 karakter!")
    } if (jelszo.length ==0){
      alert("Nem adtál meg jelszót!")
    } if (jelszo != jelszo2){
      alert("A jelszavak nem egyeznek!")
    }
  }

  function ellenorzes3(){
    szulev=regisztracio.szuletesiev.value
    irsz=regisztracio.irszam.value


    if (szulev.length==0){
      alert("Nem adtál meg születési évet!")
    } if (szulev<1890 && szulev.length>1){
      alert ("Kamu!:D")
    } if (szulev>2023 && szulev.length>1){
      alert("Kamu!:D")
    }if (irsz.length==0){
      alert("Nem adtál meg irányítószámot!")
   } if (irsz.length<4 && irsz.length>1){
      alert("Nem jó szám!")
  } if (irsz.length>4 && irsz.length>1){
      alert("Nem jó szám!")
  }
  }
    


