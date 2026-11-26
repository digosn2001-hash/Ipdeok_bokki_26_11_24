
const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");
const sideMenu = document.getElementById("sideMenu");
const menuOverlay = document.getElementById("menuOverlay");


// 메뉴 열기

function openMenu() {

    sideMenu.inert = false;

    sideMenu.classList.add("active");
    menuOverlay.classList.add("active");
    document.body.classList.add("menu-open");

    sideMenu.setAttribute("aria-hidden", "false");
    menuOpen.setAttribute("aria-expanded", "true");

    menuClose.focus();

}


// 메뉴 닫기

function closeMenu() {

    sideMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
    document.body.classList.remove("menu-open");

    menuOpen.setAttribute("aria-expanded", "false");
    menuOpen.focus();

    sideMenu.inert = true;
    sideMenu.setAttribute("aria-hidden", "true");

}


// 버튼 클릭

menuOpen.addEventListener("click", openMenu);

menuClose.addEventListener("click", closeMenu);

menuOverlay.addEventListener("click", closeMenu);


// ESC 키로 닫기

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape" &&
        sideMenu.classList.contains("active")) {

        closeMenu();

    }

});

window.addEventListener("pagehide", closeMenu);
