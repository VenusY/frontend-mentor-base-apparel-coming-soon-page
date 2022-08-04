const desktopMediaQuery = window.matchMedia("(min-width: 1440px)");
const form = document.querySelector("#email-form");

// User submits email event
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevents form submission
    
    const inputField = document.querySelector("#input-field");
    const errorIcon = document.querySelector("#error-icon");
    const errorMessage = document.querySelector("#error-message");
    const successMessage = document.querySelector("#success-message");
    const btnContainer = document.querySelector("#submit-btn__container");

    if (!inputField.value || !inputField.value.includes("@")) {
        errorIcon.classList.remove("error-icon--hidden");
        errorMessage.classList.remove("error-message--hidden");
        successMessage.classList.add("success-message--hidden");
        form.classList.add("email-form--invalid");
        form.classList.remove("email-form--invalid-thick");

        // The point at which the webpage design switches from mobile to desktop
        if (desktopMediaQuery.matches) {
            form.classList.add("email-form--invalid-thick");
            form.classList.remove("email-form--invalid");
            // Adjust container size to keep the button lined up with the border
            btnContainer.style.minWidth = "96px";
        }
    } else {
        const userInput = inputField.value;
        successMessage.textContent = `Please check the inbox of '${userInput}' for the confirmation email`;
        inputField.value = "";

        // Removes focus on the input field
        // Visually removes the outline on the input field after user enters a valid email
        inputField.blur();

        errorIcon.classList.add("error-icon--hidden");
        errorMessage.classList.add("error-message--hidden");
        successMessage.classList.remove("success-message--hidden");
        form.classList.remove("email-form--invalid");
        form.classList.remove("email-form--invalid-thick");
    }
});

const outerContainer = document.querySelector("#outer-container");
const outerContainerHeight = outerContainer.clientHeight;
const heroImage = document.querySelector("#hero--desktop");
const heroImageHeight = heroImage.clientHeight;

// If the user is on desktop version of the webpage
// and container height is greater than image height
if (desktopMediaQuery.matches && outerContainerHeight > heroImageHeight) {
    // Makes the height of outer container equal to height of hero image
    outerContainer.style.height = `${heroImageHeight}px`;
    // Only outer container has scrolling instead of entire page
    outerContainer.style.overflow = "auto";
}
