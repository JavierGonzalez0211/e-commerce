/**
 * search the products included in input search
 * @param {Array} productsToFilter
 * @param {string} value
 * @returns products Array
 */
export const searchProducts = (productsToFilter, value) => {
    let filteredProducts = [];
    filteredProducts = productsToFilter.filter((product) =>
        product.productName.toLowerCase().includes(value)
    );
    return filteredProducts;
};
