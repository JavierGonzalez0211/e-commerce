const baseURL = "http://localhost:3000/";
const productsURI = "products";
const usersURI = "users";

const getURL = (uri) => {
    return `${baseURL}${uri}`;
};

export const URL_constants = {
    productsURI,
    getURL,
    usersURI,
};
