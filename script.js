let submitBtn = document.getElementById('submitBtn')


// Affichage de l'heure et de la date

let mois = ['janvier','fevrier','mars','avril','mai','juin','juillet','aout','septembre','octobre','novembre','decembre'] // 
let jours = ['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi']
let date=document.getElementById('date')
let date2 = new Date()
let jourS = jours[date2.getDay()]
let moisA=mois[date2.getMonth()]
let jour= date2.getDate()

date.textContent = jourS.charAt(0).toUpperCase() + jourS.slice(1).toLowerCase() + ' ' +  jour + ' ' + moisA.charAt(0).toUpperCase() + moisA.slice(1).toLowerCase()
// xxx.charAt(0).toUpperCase() ==> Met le premier caracteres de la chaine en majuscule
// xxx..slice(1).toLowerCase() ==> Met le reste de la string (à partir du 2e caractere) en minuscule. 
let hour = document.getElementById('hour')
hour.innerHTML=date2.getHours() + ':' + date2.getMinutes()


submitBtn.addEventListener("click",(e)=>{
    e.preventDefault()
   let cityInput= document.getElementById('input-city').value
try {
    const data = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=c73b20413bbdba237a8c36cc12d33587&units=metric&lang=fr`
    )
      .then((res) => res.json())
      .then((data) => {
console.log(data);

let icone = document.getElementById('icone')
icone.textContent=data.weather[0].icon
let ville = document.getElementById('ville')
ville.textContent= cityInput

let temperatureActuelle = document.getElementById('temperature')
let description = document.getElementById('description')


description.textContent=data.weather[0].description
temperatureActuelle.innerHTML= Math.round(data.main.temp)
  
    });
} catch (error) {
    
}

})
 

 