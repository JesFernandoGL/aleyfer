const texto =  document.querySelectorAll('.sec-texto');
document.addEventListener('DOMContentLoaded', function(){
   
    main();
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

