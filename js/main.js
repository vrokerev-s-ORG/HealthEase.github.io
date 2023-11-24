const benefits = document.querySelector("#benefits")
const testimonios = document.querySelector("#testimonios")
const seguimiento = document.querySelector("#seguimiento")
const suscribete = document.querySelector("#subscribete")

/* Beneficios */
benefits.addEventListener("click", (b) => {
    b.preventDefault();
    const sectionB = document.querySelector(".benefits-section");
    sectionB.scrollIntoView({behavior:"smooth"})
})

/* Testimonios */
testimonios.addEventListener("click", (t) => {
    t.preventDefault();
    const sectionT = document.querySelector(".comentarios");
    sectionT.scrollIntoView({behavior:"smooth"})
})

/* Seguimiento */
seguimiento.addEventListener("click", (s) => {
    s.preventDefault();
    const sectionS = document.querySelector(".SeguimientoGlobal");
    sectionS.scrollIntoView({behavior:"smooth"})
})

/* suscribete */
subscribe.addEventListener("click", (u) => {
    u.preventDefault();
    const sectionU = document.querySelector(".subscribe");
    sectionU.scrollIntoView({behavior:"smooth"})
})


function scrolll(){
    const container = document.querySelector(".scroll-test");
    container.scrollBy(-100, 0);
}
function scrollr(){
    const container = document.querySelector(".scroll-test");
    container.scrollBy(100, 0);
}   
