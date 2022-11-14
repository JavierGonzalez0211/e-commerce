export const productsCategories = ["1_Star-Wars", "2_Consoles", "3_Various"];

export const createProducts = (quantity) => {
    const products = [];
    productsCategories.forEach((category) => {
        let counter = 1;
        while (counter < quantity + 1) {
            products.push({
                productImage: `./images/products/${category}/${category}_${counter}.png`,
                productName: `Product XYZ-${counter}`,
                productPrice: "$ 60.00",
                productCategory: category,
            });
            counter++;
        }
    });

    return products;
};

export const getCategories = (products) => {
    const categories = [];
    products.forEach(({ productCategory }) => {
        categories.indexOf(productCategory) === -1 &&
            categories.push(productCategory);
    });
    return categories;
};

export const getCategoryNames = (categories) => {
    const categoryNames = categories.map((category) =>
        category
            .substring(category.indexOf("_") + 1)
            .split("-")
            .join(" ")
    );
    return categoryNames;
};
