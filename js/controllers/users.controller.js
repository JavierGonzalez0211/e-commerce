import { usersServices } from "../services/user-service.js";
import { URL_constants } from "../services/URL_constants.js";

const { getUsers } = usersServices;
const { getURL, usersURI } = URL_constants;
const allUsersURL = getURL(usersURI);
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.querySelector(".submit__btn");

const validateUser = async (userToValidate) => {
    getUsers(allUsersURL).then((users) => {
        const isUser = users.find(
            (user) => user.email === userToValidate.email
        );
        const isValidPassword = isUser?.password === userToValidate.password;
        if (isUser && isValidPassword) {
            window.location.href = "../allProductsAdmin.html";
        } else {
            alert("usuario o password incorrecto");
        }
    });
};

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const user = {
        email: emailInput.value,
        password: passwordInput.value,
    };
    validateUser(user);
});
