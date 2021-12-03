//alert();
//para obtener ubicacion
//se estaba utilizando window.pageYOffset
//pero al estar descontinuada
//estoy utilizando scroolY para obtener la posicion
//cada que cambie el scroll y saber cuando va
//hacia arriba

//comenzamos con el nav
let ubicacionPrincipal=window.scrollY;
//activar el animate on scroll library

  AOS.init();

window.addEventListener("scroll",function(){
    let desplazamientoActual=window.scrollY;
    if(ubicacionPrincipal>=desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top="0px";
    }else{
        document.getElementsByTagName("nav")[0].style.top="-100px";
    }
    ubicacionPrincipal=desplazamientoActual;
})

//Menu

let enlacesHeader=document.querySelectorAll(".enlaces-header")[0];
let semaforo=true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click",function(){
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color="#fff";
        semaforo=false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color="#000";
        semaforo=true;
    }
    enlacesHeader.classList.toggle("menudos")
})
