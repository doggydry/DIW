document.addEventListener("DOMContentLoaded", function(){
    const botonModo = document.getElementById('modoBoton');

    const cuerpo = document.body;

    cuerpo.style.backgroundColor = "white";
    cuerpo.style.color="black";
    botonModo.style.backgroundColor="black";
    botonModo.style.color="white";

    botonModo.addEventListener("click",function(){
        if(cuerpo.style.backgroundColor === "white"){
        cuerpo.style.color="white";
        cuerpo.style.backgroundColor = "black";

        botonModo.style.backgroundColor = "white";
        botonModo.style.color = "black";
        }else {
            cuerpo.style.color="black";
            cuerpo.style.backgroundColor = "white";
    
            botonModo.style.backgroundColor = "black";
            botonModo.style.color = "white";
        }
    })
});