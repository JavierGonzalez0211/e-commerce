import { getCategories, getCategoryNames } from "./fakeDB.js";

/**
 * render all the products grouped by category
 * @param {Array} productsToRender
 * @param {HTMLElement} parentElement
 */
export const renderProductsByCategory = (productsToRender, parentElement) => {
    const $fragment = document.createDocumentFragment();
    const productsCategories = getCategories(productsToRender);
    const categoryNames = getCategoryNames(productsCategories);

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
        productsToRender.forEach(
            ({ productImage, productName, productPrice, productCategory }) => {
                if (productCategory === category) {
                    const $productTemplate =
                        $allProductsTemplate.getElementById(
                            "product_card"
                        ).content;
                    const $productTemplateClone =
                        $productTemplate.cloneNode(true);
                    let $productImg = $productTemplateClone.querySelector(
                        ".product__card__image"
                    );
                    $productImg.setAttribute("src", productImage);
                    let $productName =
                        $productTemplateClone.querySelector(".product__name");
                    $productName.innerText = productName;
                    let $productPrice =
                        $productTemplateClone.querySelector(".product__price");
                    $productPrice.innerText = productPrice;
                    $productsByCategory.appendChild($productTemplateClone);
                }
            }
        );
        $categoryContainer.appendChild($productsByCategory);
        $allProductsTemplateClone.appendChild($categoryContainer);
        $fragment.appendChild($allProductsTemplateClone);
    });
    parentElement.appendChild($fragment);
};

/**
 * render all the products
 * @param {Object} productsToRender
 * @param {HTMLElement} parentElement
 */
export const renderAllProducts = (productstoRender, parentElement) => {
    const $fragment = document.createDocumentFragment();

    productstoRender.forEach(({ productName, productPrice, productImage }) => {
        const $allProductsTemplate =
            document.getElementById("show__productos").content;
        const $allProductsTemplateClone = $allProductsTemplate.cloneNode(true);
        let $productCardContainer = $allProductsTemplateClone.querySelector(
            ".product_card__container"
        );
        let $productImg = $allProductsTemplateClone.querySelector(
            ".product__card__image"
        );
        $productImg.setAttribute("src", productImage);
        let $productName =
            $allProductsTemplateClone.querySelector(".product__name");
        $productName.innerText = productName;
        let $productPrice =
            $allProductsTemplateClone.querySelector(".product__price");
        $productPrice.innerText = productPrice;
        $allProductsTemplateClone.appendChild($productCardContainer);
        $fragment.appendChild($allProductsTemplateClone);
    });

    parentElement.appendChild($fragment);
};
