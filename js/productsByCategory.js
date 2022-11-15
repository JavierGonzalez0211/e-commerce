import { cleanRenderedProductsByCategory } from "./cleanRenderedProducts.js";
import { createProducts } from "./fakeDB.js";
import { renderProductsByCategory } from "./renderingProducts.js";
import { searchProducts } from "./searchProducts.js";

export const products = createProducts(6);

const $searchInput = document.getElementById("searchInput");
const $searchBtn = document.querySelector(".header__search__big__screen__btn");
const $productsContainer = document.querySelector(".products__container");

//? initial render
renderProductsByCategory(products, $productsContainer);

//? searching bar button
$searchBtn.addEventListener("click", () => {
    const searchResult = searchProducts(products, $searchInput.value);
    if (searchResult.length > 0) {
        cleanRenderedProductsByCategory($productsContainer);
        renderProductsByCategory(searchResult, $productsContainer);
    } else {
        alert("producto no encontrado");
    }
});

//? searching input
$searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const searchResult = searchProducts(products, $searchInput.value);
        if (searchResult.length > 0) {
            cleanRenderedProductsByCategory($productsContainer);
            renderProductsByCategory(searchResult, $productsContainer);
        } else {
            alert("producto no encontrado");
        }
    }
});
