import { validation } from "./validations.js";

const inputElements = document.querySelectorAll(".input");

inputElements.forEach((input) => {
    input.addEventListener("blur", (input) => {
        validation(input.target.id);
    });
});
