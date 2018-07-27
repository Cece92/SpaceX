//décollage fusée
let propulsion = document.querySelector(".lancement")
let countdown = document.querySelector(".countdown")
let rocket = document.querySelector(".imgrocket")
let miniRocket = document.querySelector(".miniRocket")
let satellite = document.querySelector(".imgsat")
let miniSat = document.querySelector(".miniSat")
let number = 3

miniRocket.addEventListener(
  'click',
  function(){
    rocket.style.display = "inline"
    satellite.style.display = "none"
  },
  false
);

miniSat.addEventListener(
  'click',
  function(){
    satellite.style.display = "inline"
    rocket.style.display = "none"
  },
  false
);

propulsion.addEventListener(
  'click',
  function(){
  setInterval(decollage, 1000);
}, false);

function decollage() {
    if(number > 0){
      countdown.innerHTML = (number -= 1)
    } else {
      countdown.innerHTML =
      rocket.style.transform = "translateY(-15000px)"
      rocket.style.transition = "all 15s"


      countdown.innerHTML = 0
      satellite.style.transform = "translateY(-15000px)"
      satellite.style.transition = "all 15s"
    }
  }



  //interrogation button
  let interrogation = document.querySelector(".dot")
  let bonus = document.querySelector(".info")
  let isActive = 0

  interrogation.addEventListener(
    "click",
    function(){
      if (isActive == 0){
        bonus.style.opacity = "1"
        isActive = 1
      } else {
        bonus.style.opacity = "0"
        isActive = 0
      }
    }
  )


  
