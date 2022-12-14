import { cleanRenderedProductsByCategory } from "./cleanRenderedProducts.js";
import { createProducts } from "./fakeDB.js";
import { renderProductsByCategory } from "./renderingProducts.js";
import { searchProducts } from "./searchProducts.js";

export const products = createProducts(6);
const consoleProducts = products.filter(
    (product) => product.productCategory === "2_Consoles"
);

const $searchInput = document.getElementById("searchInput");
const $searchBtn = document.querySelector(".header__search__big__screen__btn");
const $productsContainer = document.querySelector(".products__one__container");

//? initial render
renderProductsByCategory(consoleProducts, $productsContainer);

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
