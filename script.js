const codes = document.querySelectorAll(".code");

codes.forEach((input, index) => {

    input.addEventListener("input", (e) => {

        // Allow only numbers
        input.value = input.value.replace(/[^0-9]/g, "");

        // Move to next input
        if (input.value !== "" && index < codes.length - 1) {
            codes[index + 1].focus();
        }
    });

    input.addEventListener("keydown", (e) => {

        if (e.key === "Backspace") {

            // Delete current value
            input.value = "";

            // Move to previous input
            if (index > 0) {
                codes[index - 1].focus();
            }

        }
    });
});