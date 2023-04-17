let pizza = [{
    "név": "<b>A kedvenc pizzám</b>",
    "méret": 32,
    "tészta": "vékony",
    "alap": "paradicsomos alap",
    "hús": "sonka",
    "zöldség": "kukorica",
    "sajt": "mozzarella",
    "ár": 2199,
    pizzatipus: function(){
        return this.név + "<br>" +
        "Mérete: " + this.méret + " cm"+ "<br>" +  "Feltétek: " + this.alap +
        ", " + this.hús + " , " + this.zöldség + " , " + this.sajt + "<br>" +
        "Ár: " + this.ár + " Ft."
        
    }
},
{
    "név": "<b>Margherita</b>",
    "méret": 32,
    "tészta": "vékony",
    "alap": "paradicsomos alap",
    "hús": "",
    "zöldség": "paradicsom",
    "sajt": "mozzarella",
    "ár": 1899,
    pizzatipus: function(){
        return this.név + "<br>" +
        "Mérete: " + this.méret + " cm"+ "<br>" +  "Feltétek: " + this.alap +
         " , " + this.zöldség + " , " + this.sajt + "<br>" +
        "Ár: " + this.ár + " Ft."
        
    }
},
{
    "név": "<b>Szalámis pizza</b>",
    "méret": 32,
    "tészta": "vékony",
    "alap": "paradicsomos alap",
    "hús": "sonka",
    "zöldség": "kukorica",
    "sajt": "mozzarella",
    "ár": 2199,
    pizzatipus: function(){
        return  this.név + "<br>" +
        "Mérete: " + this.méret + " cm"+ "<br>" +  "Feltétek: " + this.alap +
        ", " + this.hús + " , " + this.zöldség + " , " + this.sajt + "<br>" +
        "Ár: " + this.ár + " Ft."
        
    }
},
{
    "név": "A kedvenc pizzám",
    "méret": 32,
    "tészta": "vékony",
    "alap": "paradicsomos alap",
    "hús": "sonka",
    "zöldség": "kukorica",
    "sajt": "mozzarella",
    "ár": 2199,
    pizzatipus: function(){
        return "Név: " + this.név + "<br>" +
        "Mérete: " + this.méret + " cm"+ "<br>" +  "Feltétek: " + this.alap +
        ", " + this.hús + " , " + this.zöldség + " , " + this.sajt + "<br>" +
        "Ár: " + this.ár + " Ft."
        
    }
},
{
    "név": "A kedvenc pizzám",
    "méret": 32,
    "tészta": "vékony",
    "alap": "paradicsomos alap",
    "hús": "sonka",
    "zöldség": "kukorica",
    "sajt": "mozzarella",
    "ár": 2199,
    pizzatipus: function(){
        return "Név: " + this.név + "<br>" +
        "Mérete: " + this.méret + " cm"+ "<br>" +  "Feltétek: " + this.alap +
        ", " + this.hús + " , " + this.zöldség + " , " + this.sajt + "<br>" +
        "Ár: " + this.ár + " Ft."
        
    }
},
{
    "név": "A kedvenc pizzám",
    "méret": 32,
    "tészta": "vékony",
    "alap": "paradicsomos alap",
    "hús": "sonka",
    "zöldség": "kukorica",
    "sajt": "mozzarella",
    "ár": 2199,
    pizzatipus: function(){
        return "Név: " + this.név + "<br>" +
        "Mérete: " + this.méret + " cm"+ "<br>" +  "Feltétek: " + this.alap +
        ", " + this.hús + " , " + this.zöldség + " , " + this.sajt + "<br>" +
        "Ár: " + this.ár + " Ft."
        
    }
},
{
    "név": "A kedvenc pizzám",
    "méret": 32,
    "tészta": "vékony",
    "alap": "paradicsomos alap",
    "hús": "sonka",
    "zöldség": "kukorica",
    "sajt": "mozzarella",
    "ár": 2199,
    pizzatipus: function(){
        return "Név: " + this.név + "<br>" +
        "Mérete: " + this.méret + " cm"+ "<br>" +  "Feltétek: " + this.alap +
        ", " + this.hús + " , " + this.zöldség + " , " + this.sajt + "<br>" +
        "Ár: " + this.ár + " Ft."
        
    }
}
]

for (let i=0; i<pizza.length; i++){
    document.getElementById("menu"+i).innerHTML = pizza[i].pizzatipus()
}

document.write=(pizza[0].hús)

//
document.getElementById('menu').innerHTML = pizza.pizzatipus()
pizza.név= "vegetáriánus"
pizza.hús= "tofu"
document.getElementById('menu2').innerHTML = pizza.pizzatipus()

menu.style.backgroundColor = "yellow"
menu2.style.backgroundColor = "yellow"
menu.style.fontWeight = "bold"
/* console.log(pizza)

document.write(pizza.név+ "<br>")
document.write(pizza.méret+ " cm"+  "<br>")
document.write(pizza.tészta+ "<br>")
document.write(pizza.alap+ "<br>")
document.write(pizza.hús+ "<br>")
pizza.hús = "szalámi"
document.write(pizza.hús+ "<br>")
pizza.méret = 45
document.write(pizza["méret"]+ " cm"+ "<br>") */

