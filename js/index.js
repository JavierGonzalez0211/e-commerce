import { productsCategories, categoryNames, createProducts } from "./fakeDB.js";

const $productsContainer = document.querySelector(".products__container");
const $fragment = document.createDocumentFragment();

const products = createProducts(6);

productsCategories.forEach((category, index) => {
    const $allProductsTemplate =
        document.getElementById("show__productos").content;
    const $allProductsTemplateClone = $allProductsTemplate.cloneNode(true);
    const $categoryContainer = $allProductsTemplateClone.querySelector(
        ".category__container"
    );
    const $productsByCategory = $allProductsTemplateClone.querySelector(
        ".products__by__category"
    );
    const $categoryName =
        $allProductsTemplateClone.querySelector(".category__name");
    $categoryName.innerText = categoryNames[index];
    products[category].forEach(
        ({ productImage, productName, productPrice }) => {
            const $productTemplate =
                $allProductsTemplate.getElementById("product_card").content;
            const $productTemplateClone = $productTemplate.cloneNode(true);
            let $productImg = $productTemplateClone.querySelector(
                ".product__card__image"
            );
            $productImg.setAttribute(
                "src",
                `./images/products/${category}/${productImage}`
            );
            let $productName =
                $productTemplateClone.querySelector(".product__name");
            $productName.innerText = productName;
            let $productPrice =
                $productTemplateClone.querySelector(".product__price");
            $productPrice.innerText = productPrice;
            $productsByCategory.appendChild($productTemplateClone);
        }
    );
    $categoryContainer.appendChild($productsByCategory);
    $allProductsTemplateClone.appendChild($categoryContainer);
    $fragment.appendChild($allProductsTemplateClone);
});
$productsContainer.appendChild($fragment);