
const burger_btn = document.getElementsByClassName("header__btn-menu")[0];
const close_btn = document.getElementsByClassName("header__btn-menu-close")[0];
const header__nav = document.getElementsByClassName("header__nav")[0];


burger_btn.addEventListener('click', (e) => {
    header__nav.classList.add("header__nav--open");
    document.body.style.overflowY = 'hidden';    
})
close_btn.addEventListener("click", (e) => {
    header__nav.classList.remove("header__nav--open");
    document.body.style.overflowY = "auto";    
});