import { createProducts } from "./fakeDB.js";
import { renderProductsByCategory } from "./renderingProducts.js";
import { renderingSearchByCategory } from "./searchProducts.js";

export const products = createProducts(6);

const $searchInput = document.getElementById("searchInput");
const $searchBtn = document.querySelector(".header__search__big__screen__btn");
const $productsContainer = document.querySelector(".products__container");

//? initial render
renderProductsByCategory(products, $productsContainer);

//? searching bar button
$searchBtn.addEventListener("click", () =>
    renderingSearchByCategory(products, $searchInput.value, $productsContainer)
);

//? searching input
$searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        renderingSearchByCategory(
            products,
            $searchInput.value,
            $productsContainer
        );
    }
});
