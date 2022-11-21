const getProducts = async (urlProducts) => {
    const response = await fetch(urlProducts);
    const data = await response.json();
    console.log("data", data);
    return data;
};

const createProduct = async (urlProducts, newProduct) => {
    await fetch(urlProducts, {
        method: "POST",
        headers: {
            "content-Type": "application/json",
        },
        body: JSON.stringify({
            id: uuid.v4(),
            ...newProduct,
        }),
    });
};

export const productServices = {
    createProduct,
    getProducts,
};
