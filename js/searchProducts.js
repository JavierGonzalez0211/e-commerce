import {
    cleanRenderedProducts,
    cleanRenderedProductsByCategory,
} from "./cleanRenderedProducts.js";
import {
    renderAllProducts,
    renderProductsByCategory,
} from "./renderingProducts.js";

//* Products by category
/**
 * search the products included in input search
 * @param {Array} productsToFilter
 * @param {string} value
 * @returns
 */
export const productsByCategoryToSearch = (productsToFilter, value) => {
    let filteredProducts = [];
    filteredProducts = productsToFilter.filter((product) =>
        product.productName.toLowerCase().includes(value)
    );
    return filteredProducts;
};

/**
 * render the products included in search result
 * grouped by category
 */
export const renderingSearchByCategory = (products, value, parentElement) => {
    const productsToRender = productsByCategoryToSearch(products, value);
    if (Object.entries(productsToRender).length > 0) {
        cleanRenderedProductsByCategory(parentElement);
        renderProductsByCategory(productsToRender, parentElement);
    } else {
        alert("producto no encontrado");
    }
};

//* All products (not grouped by categories)
/**
 * search the products included in input search
 * @param {Array} productsToFilter
 * @param {string} value
 * @returns
 */
export const allProductsToSearch = (productsToFilter, value) => {
    const filteredProducts = [];
    productsToFilter.forEach((product) => {
        if (product.productName.toLowerCase().includes(value)) {
            filteredProducts.push(product);
        }
    });
    return filteredProducts;
};

/**
 * render the products included in search result
 *
 */
export const renderingSearch = (productsToSearch, value, parentElement) => {
    const productsToRender = allProductsToSearch(productsToSearch, value);
    if (productsToRender.length > 0) {
        cleanRenderedProducts(parentElement);
        renderAllProducts(productsToRender, parentElement);
    } else {
        alert("producto no encontrado");
    }
};
