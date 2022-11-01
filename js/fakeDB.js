export const productsCategories = ["1_Star-Wars", "2_Consoles", "3_Various"];

export const categoryNames = productsCategories.map((category) =>
    category
        .substring(category.indexOf("_") + 1)
        .split("-")
        .join(" ")
);

export const createProducts = (quantity) => {
    const products = {};
    productsCategories.forEach((category) => {
        products[category] = [];
        let counter = 1;
        while (counter < quantity + 1) {
            products[category].push({
                productImage: `${category}_${counter}.png`,
                productName: `Product XYZ-${counter}`,
                productPrice: "$ 60.00",
            });
            counter++;
        }
    });

    return products;
};
