const slide_moi = document.querySelector('.img_moi')
const slide_titre_page2 = document.querySelector('.titre_page2')
const slide_titre_page3 = document.querySelector('.titre_page3')
const slide_titre_page4 = document.querySelector('.titre_page4')
const slide_titre_page5 = document.querySelector('.titre_page5')

const slide_competence_prog = document.querySelector('.placement_competence_programmation')
const slide_competence_com = document.querySelector('.placement_competence_com')
const slide_texte_page2 = document.querySelector('.texte_page2')
const slide_slider_projet = document.querySelector('.zone_slider')
const slide_projetpro_prog = document.querySelector('.zone_projet_pro_prog')
const slide_projetpro_com = document.querySelector('.zone_projet_pro_com')

let bouton_remonte = document.getElementById('placement_bouton_remonte');

let page_burn = document.getElementById("page_burn");
let page_theatre = document.getElementById("page_theatre");
let page_melies = document.getElementById("page_melies");
let page_2048 = document.getElementById("page_2048");

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    console.log(scrollTop, clientHeight);

    const topElementToTopViewport = slide_moi.getBoundingClientRect().top;

    // console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
        slide_moi.classList.add('active')
        slide_titre_page2.classList.add('active')
        slide_texte_page2.classList.add('active')
    }

    if (scrollTop > 500){
        bouton_remonte.style.opacity ="1"
    }

    if (scrollTop > 1200){
        slide_titre_page3.classList.add('active')
        slide_competence_prog.classList.add('active')
        slide_competence_com.classList.add('active')
    }

    if (scrollTop > 2000){
        slide_titre_page4.classList.add('active')
        slide_slider_projet.classList.add('active')
    }

    if (scrollTop > 3354){
        slide_titre_page5.classList.add('active')
        slide_projetpro_prog.classList.add('active')
        slide_projetpro_com.classList.add('active')
    }

    if (scrollTop < 500){
        bouton_remonte.style.opacity ="0"
    }
})

function spawn_burn(){
    page_burn.style.opacity = "1"
    page_burn.style.display ="block"
    document.body.style.overflowY ="hidden"
    document.body.style.overflowX ="hidden"
}

function spawn_theatre(){
    page_theatre.style.opacity = "1"
    page_theatre.style.display ="block"
    document.body.style.overflowY ="hidden"
    document.body.style.overflowX ="hidden"
}

function spawn_melies(){
    page_melies.style.opacity = "1"
    page_melies.style.display ="block"
    document.body.style.overflowY ="hidden"
    document.body.style.overflowX ="hidden"
}

function spawn_2048(){
    page_2048.style.opacity = "1"
    page_2048.style.display ="block"
    document.body.style.overflowY ="hidden"
    document.body.style.overflowX ="hidden"
}

function retour(){
    document.body.style.overflowY="visible"
    document.body.style.overflowX ="hidden"
    page_theatre.style.opacity ="0"
    page_burn.style.opacity ="0"
    page_melies.style.opacity ="0"
    page_2048.style.opacity ="0"
    page_theatre.style.display ="none"
    page_burn.style.display ="none"
    page_melies.style.display ="none"
    page_2048.style.display ="none"
}

function copie_mail(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    alert("mail copié !");
  }

  function copie_tel(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    alert("Téléphone copié !");
  }
