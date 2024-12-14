const menu = document.getElementById('menu')
const header = document.getElementById('header')

menu.onclick = (e) => {
    header.classList.toggle('header_adaptive')
}