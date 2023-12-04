const menu = document.getElementById('hamburger')
const menuBg = document.getElementById('menuBg')
const mobileMenu = document.getElementById('mobileMenu')


menu.addEventListener('click', () => menuBg.classList.toggle('hidden')) 
menuBg.addEventListener('click', () => menuBg.classList.toggle('hidden')) 
mobileMenu.addEventListener('click', (e) => e.stopPropagation() ) 
