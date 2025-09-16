
/**
 * Creacion de boton hamburguesa
 */

const btn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-links");

//EventListener para click 
btn.addEventListener("click", ()=> {
    //Al dar click en el icono de menu hamburguesa, se alterna
    menu.classList.toggle("active");
});

//Se cierra el menu-horizontal al hacer otro click
document.querySelectorAll(".nav-links li a").forEach((link) =>
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  })
);