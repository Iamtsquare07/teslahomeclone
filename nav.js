const shadow = document.querySelector(".shadow"),
    aside = document.querySelector('aside');

function viewMenu() {
    shadow.classList.add("active");
    aside.classList.add("active");
    aside.focus()
}

function closeMenu() {
    shadow.classList.remove("active");
    aside.classList.remove("active");
}

document.getElementById('menu').onclick = e => {
    e.preventDefault();
    viewMenu()
}

document.querySelector('.close').onclick = e => {
    e.preventDefault()
    closeMenu()
}

shadow.onclick = e => {
    e.preventDefault()
    closeMenu()
}