const texto =  document.querySelectorAll('.sec-texto');
const corazon1 = document.querySelector('.c1');
const corazon2 = document.querySelector('.c2');
const titulo = document.querySelector('.contenedor-titulo');

document.addEventListener('DOMContentLoaded', function(){
   
    main();
    parallax();
})

function main(){
    const grupo = document.querySelectorAll('.grupo img');
    for(let i = 0; i < grupo.length; i++){
        grupo[i].addEventListener('click', function(e){
            text = e.target.parentNode.nextElementSibling;
            text.classList.add('mostrar-texto');
            
        }
        );
    }
}

function parallax(){
    window.addEventListener('scroll', function(e){
        let value = window.scrollY;
        corazon1.style.bottom = 5 + value * 0.05 + '%';
        corazon1.style.left = 20 + value * -0.05 + '%';

        corazon2.style.bottom = 8 + value * 0.05 + '%';
        corazon2.style.right = 20 + value * -0.05 + '%';

        titulo.style.opacity = 100 + value * -0.2 + '%';




        console.log(value);
    })
}