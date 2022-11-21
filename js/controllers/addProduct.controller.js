import { productServices } from "../services/product-service.js";
import { URL_constants } from "../services/URL_constants.js";

const { createProduct } = productServices;
const { getURL, productsURI } = URL_constants;
const allProductsURL = getURL(productsURI);
const submitBtn = document.querySelector(".submit__btn");

const product = {
    productImage: "./images/products/1_Star-Wars/1_Star-Wars_2.png",
    productName: "Product XYZ-2",
    productPrice: "$ 60.00",
    productCategory: "1_Star-Wars",
};

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    createProduct(allProductsURL, product);
});
