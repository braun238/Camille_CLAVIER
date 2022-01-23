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
