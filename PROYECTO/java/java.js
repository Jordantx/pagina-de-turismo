window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY>0);
})

const btnLeft = document.querySelector("#btn-left"),
      btnRight = document.querySelector("#btn-right"),
      hijoCarrusel = document.querySelector(".slider"),
      selection = document.querySelectorAll(".selectImg");

btnLeft.addEventListener("click", e => moveLeft());
btnRight.addEventListener("click", e => moveRight());



let operacion = 0,
    contador = 0,
    cantImg = 100 / selection.length;


function moveRight(){
    if(contador >= selection.length-1){
        contador = 0;
        operacion = 0;
        hijoCarrusel.style.transform = `translate(-${operacion}%)`;
        hijoCarrusel.style.transition = "none"
    }
    else{
        contador++;
        operacion+= cantImg;
        hijoCarrusel.style.transform = `translate(-${operacion}%)`;
        hijoCarrusel.style.transition = "all ease .6s"
    }
    
}

function moveLeft(){
    contador--;
    if(contador < 0){
        contador = selection.length-1;
        operacion = cantImg * (selection.length-1);
        hijoCarrusel.style.transform = `translate(-${operacion}%)`;
    }
    else{
        operacion-= cantImg;
        hijoCarrusel.style.transform = `translate(-${operacion}%)`;
        hijoCarrusel.style.transition = "all ease .6s"
    }
    
}

setInterval(() => {
    moveRight()
}, 3000);

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            
            buttons.forEach(btn => btn.classList.remove('active'));
            contents.forEach(content => content.style.display = 'none');
            
            
            button.classList.add('active');
            
            
            const target = button.getAttribute('data-target');
            document.getElementById(target).style.display = 'block';
        });
    });
    
    document.getElementById('program').style.display = 'block';
});