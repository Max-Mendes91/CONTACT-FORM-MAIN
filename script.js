const form = document.querySelector('form');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const queryRadios = document.querySelectorAll('input[name="query"]');
const consentCheckbox = document.getElementById('consent')
const firstNameError = document.getElementById('firstName-error');
const lastNameError = document.getElementById('lastName-error');
const emailFormatError = document.getElementById('email-format-error');
const emailRequiredError = document.getElementById('email-required-error');
const queryTypeError = document.getElementById('queryType-error');
const messageError = document.getElementById('message-error');
const consentError = document.getElementById('consent-error');
const submitButton = document.getElementById('submitBtn');
const successMessage = document.getElementById('success-message');




// Validates if a field is not empty 
function isFieldEmpty(value) {
    // TODO: Check if value is empty or only whitespace
    return value.trim() === "";
}
//  Validates email format
function isValidEmail(email) {
    // TODO: Use regex to validate email format

    // Example regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


}
// Validates if at least one radio button is selected
function isRadioSelected(radioButtons) {
    // TODO: Loop through radio buttons and check if any is checked

    return Array.from(radioButtons).some(radio => radio.checked);
}



// ERROR DISPLAY FUNCTIONS
function showError(errorElement, inputElement = null) {
    // TODO: Remove 'hidden' class from error element
    // TODO: Add red border to input element if provided
    // Add 'border-red' and remove 'border-grey-medium' classes
    // TODO: Set aria-invalid="true" on input for screen readers
    errorElement.classList.remove('hidden');
    if (inputElement) {
        inputElement.classList.remove('border-grey-medium');
        inputElement.classList.add('border-red');
        inputElement.setAttribute('aria-invalid', 'true');
    }
}

//Hides error message for a field
function hideError(errorElement, inputElement = null) {
    // TODO: Add 'hidden' class to error element
    // TODO: Remove red border from input element if provided
    // Remove 'border-red' and add back 'border-grey-medium' classes
    // TODO: Set aria-invalid="false" on input for screen readers
    errorElement.classList.add('hidden');
    if (inputElement) {
        inputElement.classList.remove('border-red');
        inputElement.classList.add('border-grey-medium');
        inputElement.setAttribute('aria-invalid', 'false');
    }
}

//Hiddes all erros
function hideAllErrors() {
    const errors = [firstNameError, lastNameError, emailFormatError, emailRequiredError, queryTypeError, messageError, consentError];
    errors.forEach(error => hideError(error));
}

//Validates the names field
function validateField(inputElement, errorElement) {
    // TODO: Get the value from first name input
    // TODO: Check if field is empty using isFieldEmpty()
    // TODO: If empty, show error and return false
    // TODO: If valid, hide error and return true
    const inputValue = inputElement.value
    if (isFieldEmpty(inputValue)) {
        showError(errorElement, inputElement);
        return false;
    } else {
        hideError(errorElement, inputElement);
        return true;
    }
}
//Validate the email 
function validateEmail() {
    // TODO: Get the value from email input
    // TODO: Check if field is empty
    // If empty, show "required" error and return false
    // TODO: Check if email format is valid using isValidEmail()
    // If invalid, show "valid email" error and return false
    // TODO: If all checks pass, hide all errors and return true
    const inputValue = emailInput.value;

    if (isFieldEmpty(inputValue)) {
        showError(emailRequiredError, emailInput);
        hideError(emailFormatError, emailInput);
    } else if (!isValidEmail(inputValue)) {
        showError(emailFormatError, emailInput);
        hideError(emailRequiredError, emailInput);
        return false;
    } else {
        hideError(emailRequiredError, emailInput);
        hideError(emailFormatError, emailInput);
        return true;
    }
}
// Validates the query type selection
function validateQueryType() {
    // TODO: Get all radio buttons with name="query"
    // TODO: Check if at least one is selected using isRadioSelected()
    // TODO: If none selected, show error and return false
    // TODO: If valid, hide error and return true
    if (isRadioSelected(queryRadios)) {
        hideError(queryTypeError);
        return true;
    } else {
        showError(queryTypeError);
        return false;
    }
}
// Validates the consent checkbox
function validateConsent() {
    // TODO: Get the consent checkbox
    // TODO: Check if it's checked
    // TODO: If not checked, show error and return false
    // TODO: If checked, hide error and return true
    if (consentCheckbox.checked) {
        hideError(consentError);
        return true;
    } else {
        showError(consentError);
        return false;
    }
}



// 5. FORM SUBMISSION HANDLER
//  Validates entire form
function validateForm() {
    // TODO: Call all validation functions and store results
    // TODO: Return true only if ALL validations pass
    // Use && operator or array with .every()
    const functionsValidation = [
        validateField(firstNameInput, firstNameError),
        validateField(lastNameInput, lastNameError),
        validateEmail(),
        validateQueryType(),
        validateField(messageInput, messageError),
        validateConsent()
    ];
    const isFormValid = functionsValidation.every(result => result === true);
    return isFormValid;
}


// Shows success message
function showSuccessMessage() {
    // TODO: Remove 'hidden' class from success message
    // TODO: Set focus to success message for screen readers
    //  Add tabindex="-1" and call .focus()
    // TODO: Scroll to top of page to show success message
    //  window.scrollTo(0, 0)
    successMessage.classList.remove('hidden');
    successMessage.setAttribute('tabindex', '-1');
    successMessage.focus();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
}

//Resets the form

function resetForm() {
    // TODO: Call form.reset() to clear all inputs
    // TODO: Hide all error messages
    // Loop through all error elements and call hideError()
    form.reset();
    const errors = [firstNameError, lastNameError, emailFormatError, emailRequiredError, queryTypeError, messageError, consentError];
    errors.forEach(error => hideError(error));
}

//  Handles form submission
function handleSubmit(e) {
    e.preventDefault();

    if (validateForm()) {

        successMessage.classList.remove('hidden');
        successMessage.setAttribute('tabindex', '-1');
        successMessage.focus();
        window.scrollTo({ top: 0, behavior: 'smooth' });


        setTimeout(() => {
            form.reset();
            hideAllErrors();
            successMessage.classList.add('hidden');
        }, 3000);

    } else {
        const firstError = document.querySelector('[aria-invalid="true"]');
        if (firstError) firstError.focus();
    }
}
form.addEventListener('submit', handleSubmit);