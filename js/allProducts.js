import { cleanRenderedProducts } from "./cleanRenderedProducts.js";
import { createProducts } from "./fakeDB.js";
import { renderAllProducts } from "./renderingProducts.js";
import { searchProducts } from "./searchProducts.js";

const products = createProducts(6);
const $productsContainer = document.querySelector(".all__product__cards");
const $searchInput = document.getElementById("searchInput");
const $searchBtn = document.querySelector(".header__search__big__screen__btn");

//? initial render
renderAllProducts(products, $productsContainer);

//? searching bar button
$searchBtn.addEventListener("click", () => {
    const searchResult = searchProducts(products, $searchInput.value);
    if (searchResult.length > 0) {
        cleanRenderedProducts($productsContainer);
        renderAllProducts(searchResult, $productsContainer);
    } else {
        alert("producto no encontrado");
    }
});

//? searching input
$searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const searchResult = searchProducts(products, $searchInput.value);
        if (searchResult.length > 0) {
            cleanRenderedProducts($productsContainer);
            renderAllProducts(searchResult, $productsContainer);
        } else {
            alert("producto no encontrado");
        }
    }
});
