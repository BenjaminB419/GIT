   document.write("Ezt JS-ből írtam<br>")
    document.write("Ez már jól megy <br>")
    console.log("HTML oldal script")
    console.log(5+2)
    console.log(45-85)
    console.log(3*4)
    console.log(654/4)
    console.log( 13 % 4)
    console.log("szöveg" - 12)
    console.log(5>=2)
    console.log(4==19)
    console.log(4!=4)
    console.log((5+3)<= (8*6-15))
    console.log("Első " + "Második")
    console.log(15 == "15")
    console.log (15==="15") 

   /*  var szam = 15
    var szam = 18
    let szam=15 
    conts szam= 15 */

    //hozzunk létre 2 változót és egy harmadik változóban
    // adjuk össze és írjuk ki

    /* let szam=15
    const masikszam=18  */

/*     console.log (elso+masodik)
    document.write(elso+masodik) */

 /*    function osszeadas (a,b){
      let osszeadando1 = a
      let osszeadando2 = b
      let osszeg = osszeadando1 + osszeadando2
      document.write(osszeadando1, "+", osszeadando2, "=", osszeg)
  }

  osszeadas(szam,masikszam) */

  //írjunk függvényt,amely két paraméterrel kiszámolja
  // a téglalap területét és kerületét!
  //írjuk ki az eredményeket felhasználóbarát módon

 /*  let egyes= 5
  let kettes= 4

  function kerter(c,d){
    let egyes = c
    let kettes= d
    let terulet = egyes * kettes
    let kerulet = (egyes + kettes)*2
    document.write(egyes*kettes)
    document.write((egyes+kettes)*2)
  }

  kerter(egyes,kettes) */

/*   function teglalap (b,c){
  let oldal =b
  let masikoldal=c
  let terulet = oldal*masikoldal
  let kerulet = (oldal+masikoldal)*2
  document.write ("A téglalap területe ", terulet, " cm","<br>", "A téglalap kerülete ",kerulet, " cm", "<hr>")
  }

  teglalap(4,19)

  let szam = 4
  let masik = 19



  function osszeadas(a,b){
    let osszeadando1 = a
    let osszeadando2 = b
    return osszeg = osszeadando1 + osszeadando2
  }


  function osszegkiir(){
    document.write("összeadás eredménye<br>",szam, "+", masik, "=", osszeadas(szam,masik),"<hr>")
  }

  osszegkiir();

  function kivonas (a,b){
    let kivonando1 = a
    let kivonando2 = b
    let osszeg = a - b 
    document.write(kivonando1,"-",kivonando2, "= ", osszeg,"<hr>")
  }

  kivonas(szam,masik);

  function szorzas(a,b){
    let szorzando1 = a 
    let szorzando2 = b
    let osszeg = a * b
    document.write(szorzando1 , "*", szorzando2, "= ", osszeg, "<hr>" )
  }

  szorzas(szam,masik);

  function osztas (a,b){
    let osztando1 = b
    let osztando2 = a
    return osszeg = osztando1 / osztando2
  }

    function kiir(){
  document.write("Az osztás eredménye: ", masik,"/", szam, "=", osztas(szam,masik),"<hr>")
      }

      kiir();
 */

    
let lista = ["kenyér","víz","tej","liszt"]
let szamok = [123, 3215,5454]
lista.push("olaj","tészta","vaj",)
document.write(lista +"<br>")
lista.unshift("első")
document.write(lista+"<br>")
lista.pop() //végéről//
document.write(lista+"<br>")
lista.shift() //elejéről//
document.write(lista[4]+"<br>")
lista[4] = "csoki"
document.write(lista+"<br>")
document.write(lista.length+"<br>")

for(let i=0; i< szamok.length; i++){
  szamok [i]*=2
 
}  document.write(szamok+"<br>")

for (let i=0; i< lista.length; i++){
  lista[i] += " db"
} document.write(lista + "<br>")

//objektumok

let konyvem = {
  "cím": "Egri csillagok",
  "szerző" : "Gárdonyi Géza",
  "kiadás" : 1901 
}
document.write(konyvem.szerző + "<br>")
konyvem.kiadas = 1902
document.write(konyvem.kiadas + "<br>")


let pizza = {
  "mérete" : 32+" cm",
  "tészta" : "vékony",
  "feltét1": "sajt",
  "feltét2": "szalámi",
  "feltét3": "jalapeno"
}
pizza.feltét2 = "sonka"
document.write(pizza.feltét2)

const autok = {
  rendszam: "fdfsdf6565",
  szín: "fehér",
  kiadásiÉv: "2021",
  alvazSzam: 543253245234,
  elado: false,
  adatok: function(){
    return "Az autóm rendszáma: " +this.rendszam + ", a színe pedig: "+this.szín +". A kiadás éve:" + this.kiadásiÉv + ", alváz száma:" +this.alvazSzam + "."
  }
}

document.getElementById("kiiras").innerHTML = autok.adatok()



let bucketList = ["regényt írni","megtanulni olaszul","elutazni Új-Zélandra","búvárkodni"]

bucketList.push("megnézni a sarki fényt","megtanulni gitározni","ejtőernyőzni")
bucketList.unshift("vegetáriánussá válni","legalább 3 hónapra franciaországba költözni")
bucketList.pop()
bucketList.shift()
console.log(bucketList)
