const showSearchBar = () => {
    const $headerLogo = document.querySelector(".header__logo");
    const $headerLoginBtn = document.querySelector(".header__login__Btn");
    const $headerAdminMenuBtn = document.querySelector(
        ".header__adminMenu__Btn"
    );
    const $heaerSearchBigScreen = document.querySelector(
        ".header__search__big__screen__container"
    );

    $headerLogo.classList.toggle("hidden");
    $headerLoginBtn && $headerLoginBtn.classList.toggle("hidden");
    $headerAdminMenuBtn && $headerAdminMenuBtn.classList.toggle("hidden");
    $heaerSearchBigScreen.classList.toggle("hidden");
};

const $headerSearch = document.querySelector(".header__search");
$headerSearch.addEventListener("click", showSearchBar);
