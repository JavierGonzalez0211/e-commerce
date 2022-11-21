const errorTypes = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
    "tooShort",
];

const errorMessages = {
    email: {
        typeMismatch: "El correo no es válido",
    },
    password: {
        tooShort: "Debe contener mínimo 6 caracteres",
    },
};

export function validation(inputID) {
    const input = document.getElementById(inputID);
    const validityState = input.validity;
    const messageZone = input.nextElementSibling;
    const isValid = validityState.valid;
    if (!isValid) {
        input.classList.add("input__error");
        let error = "";
        errorTypes.forEach((errorType) => {
            error = validityState[errorType] && errorType;
            if (error === "valueMissing") {
                messageZone.innerHTML = "Este campo es obligatorio";
            } else if (validityState[errorType]) {
                messageZone.innerHTML = errorMessages[inputID][errorType];
            }
        });
    } else {
        input.classList.remove("input__error");
        messageZone.innerHTML = "";
    }

    input.reportValidity();
}
