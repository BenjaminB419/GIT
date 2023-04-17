/* let lista = ["kenyér","víz","tej","liszt"]
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
console.log(bucketList) */


let lista = ["kenyér", "víz", "tej", "liszt"]
let szamok = [345, 3424, 123456]
lista.push("olaj")
document.write(lista+"<br>")
lista.unshift("első")  //első elem berak
document.write(lista+"<br>")
lista.pop() //végéről törlés
document.write(lista+"<br>")
lista.shift() //elejéről törlés
document.write(lista[0]+"<br>")
lista[4] = "csoki"
document.write(lista+"<br>")
document.write(lista.length + "<br>")

/* for (let i=0; i<3; i++){
  szamok [i] *=2
} */

for (let i=0; i<szamok.length; i++){
  szamok[i]*=2
}
document.write(szamok+"<br>")

for (let i=0; i<lista.length;i++){
  lista[i] += (" db")
}
document.write(lista+"<br>")

//objektumok

let konyvem = {
  "cím" :  "Egri csillagok",
  "szerző" : "Gárdonyi Géza",
  "kiadás" : 1901
}
document.write(konyvem.szerző+"<br>")
document.write(konyvem["kiadás"]+"<br>")
konyvem.kiadás = 1902
document.write(konyvem["kiadás"]+"<br>")

const autok = {
  rendszam: "dasdsadsa",
  szin: "fehér",
  kiadasiEv: 2021,
  alvazszam: 43434343,
  elado: false,
  adatok: function (){
    return "Az autóm rendszáma: " + this.rendszam + 
    ", a színe pedig: " + this.szin + ". A kiadás éve: " 
    + this.kiadasiEv + ", alvázszáma: " +this.alvazszam + "."
  }
}

document.getElementById("kiiras").innerHTML = autok.adatok()