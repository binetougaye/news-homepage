const navbarNav = document.querySelector(".navbar-nav")
const mediaScreen = window.matchMedia('(max-width: 600px)')
const iconMenu = document.querySelector(".icon-menu")
const closeMenu = document.querySelector(".close-menu")
const menuMobile = document.querySelector(".menu-mobile")
function mediaQuery(e) {
    if (e.matches) {
        navbarNav.classList.remove("visible")
        navbarNav.classList.add("hidden")
        iconMenu.classList.remove("hidden")
        iconMenu.classList.add("visible")

    } else {
        navbarNav.classList.add("visible")
        navbarNav.classList.remove("hidden")
        iconMenu.classList.add("hidden")
        iconMenu.classList.remove('visible')
    }

}

iconMenu.addEventListener("click", () => {
    // Vérifier si le menu est déjà affiché
    if (menuMobile.classList.contains("hidden")) {
        // Si caché, on l'affiche
        menuMobile.classList.remove("hidden");
        menuMobile.classList.add("visible");
        iconMenu.setAttribute("src", "./assets/images/icon-menu-close.svg");
    } else {
        // Si visible, on le cache
        menuMobile.classList.add("hidden");
        menuMobile.classList.remove("visible");
        iconMenu.setAttribute("src", "./assets/images/icon-menu.svg");
    }
});

mediaScreen.addEventListener("change", mediaQuery)
mediaQuery(mediaScreen)