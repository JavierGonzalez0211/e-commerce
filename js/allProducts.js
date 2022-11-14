import { createProducts } from "./fakeDB.js";
import { renderAllProducts } from "./renderingProducts.js";
import { renderingSearch } from "./searchProducts.js";

const products = createProducts(6);
const $productsContainer = document.querySelector(".all__product__cards");
const $searchInput = document.getElementById("searchInput");
const $searchBtn = document.querySelector(".header__search__big__screen__btn");

//? initial render
renderAllProducts(products, $productsContainer);

//? searching bar button
$searchBtn.addEventListener("click", () =>
    renderingSearch(products, $searchInput.value, $productsContainer)
);

//? searching input
$searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        renderingSearch(products, $searchInput.value, $productsContainer);
    }
});
