/**
 * delete all the products rendered by category
 * @param {element_to_clean} parentElement
 */
export const cleanRenderedProductsByCategory = (parentElement) => {
    for (let i = parentElement.children.length - 1; i > -1; i--) {
        if (parentElement.children[i].className === "category__container") {
            let elementToRemove = parentElement.children[i];
            parentElement.removeChild(elementToRemove);
        }
    }
};

/**
 * delete all the products rendered
 * @param {element_to_clean} parentElement
 */
export const cleanRenderedProducts = (parentElement) => {
    for (let i = parentElement.children.length - 1; i > -1; i--) {
        if (parentElement.children[i].className === "product_card__container") {
            let elementToRemove = parentElement.children[i];
            parentElement.removeChild(elementToRemove);
        }
    }
};
