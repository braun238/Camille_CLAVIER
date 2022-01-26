let linear_toggle=document.getElementById("linear_toggle");
let liste_menu_d=document.getElementById("liste_menu_d");

let circular_toggle=document.getElementById("circular_toggle");
let loisirs=document.getElementById("loisirs");


linear_toggle.addEventListener('click',function(){
    if(liste_menu_d.classList.contains("active"))
    {
        liste_menu_d.classList.remove("active");
    }else {
        liste_menu_d.classList.add("active");
    }
})

circular_toggle.addEventListener('click',function(){
    if(loisirs.classList.contains("active"))
    {
        loisirs.classList.remove("active");
    }else {
        loisirs.classList.add("active");
    }
})

//utilisation de intersection observer
let ratio=0.1;
let options = {
    root: null, // le texte est dans l'écran
    rootMargin: '0px',
    threshold: ratio //Combien de pourcent visible pour lancer l'animation ?
  }


let if_intersect = function(experiences_show,observer) {
    experiences_show.forEach(function(experience_show){
        if(experience_show.intersectionRatio>ratio){
            experience_show.target.classList.add("appear");
            observer.unobserve(experience_show.target);
        }
    })
}
  
let observer = new IntersectionObserver(if_intersect /*fonction quand l'élément est visible*/, options);
document.querySelectorAll(".reveal").forEach(function(revealing){
    observer.observe(revealing);
})