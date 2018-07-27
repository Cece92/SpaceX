let soon = document.querySelector(".soon")
let bye = document.querySelector(".bye")
let astro = document.querySelector(".astro")

bye.addEventListener(
  'click',
  function(){
    astro.style.transform = "translateY(-15000px)"
    astro.style.transition = "all 7s"
    setTimeout(function(){
          soon.style.display = "block"
    }, 500)
}, false);
