// MENU HAMBURGUER

document.addEventListener('DOMContentLoaded', ()=>{
    const menuIcone= document.getElementById("menu-icone");
    const navMenu = document.querySelector("nav");
    if(menuIcone && navMenu){
        menuIcone.onclick=()=>{
            navMenu.classList.toggle("active");
            menuIcone.classList.toggle("open")
        }
    }
})

function trocarTema(tema) {
    const root = document.documentElement;

    if (tema === 'laranja') {
        root.style.setProperty('--cor-destaque', '#FF9A3C');
        root.style.setProperty('--cor-destaque-claro', '#FF9A3C');
        root.style.setProperty('--descricao-card', '#FF9A3C');
    }

    if (tema === 'branco') {
        root.style.setProperty('--cor-destaque', '#F2F2F2');
        root.style.setProperty('--cor-destaque-claro', '#F2F2F2');
        root.style.setProperty('--descricao-card', '#F2F2F2');
    }

    if (tema === 'cinza') {
        root.style.setProperty('--cor-destaque', '#9A9A9A');
        root.style.setProperty('--cor-destaque-claro', '#9A9A9A');
        root.style.setProperty('--descricao-card', '#9A9A9A');
    }
}