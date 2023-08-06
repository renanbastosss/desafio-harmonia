const menuHamburguer = document.querySelector('.menu-hamburguer')
const menu = document.querySelector('.header')

function abrirMenu() {
  if (menu.style.display === "block") {
    menu.style.display = "none"
  } else {
    menu.style.display = "block"
  }
}

menuHamburguer.addEventListener('click', abrirMenu)