import { productsCategories, categoryNames, createProducts } from "./fakeDB.js";

const $productsContainer = document.querySelector(".all__product__cards");
const $fragment = document.createDocumentFragment();

const products = createProducts(6);

const allProducts = [];

productsCategories.forEach((category) => {
    products[category].forEach((product) => {
        product.src = `./images/products/${category}/${product.productImage}`;
        allProducts.push(product);
    });
});

allProducts.forEach(({ productImage, productName, productPrice, src }) => {
    const $allProductsTemplate =
        document.getElementById("show__productos").content;
    const $allProductsTemplateClone = $allProductsTemplate.cloneNode(true);
    let $productCardContainer = $allProductsTemplateClone.querySelector(
        ".product_card__container"
    );
    let $productImg = $allProductsTemplateClone.querySelector(
        ".product__card__image"
    );
    $productImg.setAttribute("src", src);
    let $productName =
        $allProductsTemplateClone.querySelector(".product__name");
    $productName.innerText = productName;
    let $productPrice =
        $allProductsTemplateClone.querySelector(".product__price");
    $productPrice.innerText = productPrice;
    $allProductsTemplateClone.appendChild($productCardContainer);
    $fragment.appendChild($allProductsTemplateClone);
});

$productsContainer.appendChild($fragment);
