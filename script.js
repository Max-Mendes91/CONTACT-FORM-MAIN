// Contact Form Validation Script
// This script handles form validation, submission, and accessibility features

// ========================================
// 1. DOM ELEMENT SELECTION
// ========================================
// TODO: Select all necessary DOM elements
// Hint: You'll need the form, all inputs, error messages, success message, and submit button

const form = document.querySelector('form');
const input = document.querySelectorAll('input');
const firstNameError = document.getElementById('firstName-error');
const lastNameError = document.getElementById('lastName-error');
const emailFormatError = document.getElementById('email-format-error');
const emailRequiredError = document.getElementById('email-required-error');
const queryTypeError = document.getElementById('queryType-error');
const messageError = document.getElementById('message-error');
const consentError = document.getElementById('consent-error');
const successMessage = document.getElementById('success - message');


// TODO: Select first name input and its error message


// TODO: Select last name input and its error message

// TODO: Select email input and its error messages (both validation and required)

// TODO: Select query type radio buttons and error message

// TODO: Select message textarea and its error message

// TODO: Select consent checkbox and its error message

// TODO: Select submit button

// TODO: Select success message div


// ========================================
// 2. VALIDATION FUNCTIONS
// ========================================

/**
 * Validates if a field is not empty
 * @param {string} value - The value to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function isFieldEmpty(value) {
    // TODO: Check if value is empty or only whitespace
    // Hint: Use trim() method
}

/**
 * Validates email format
 * @param {string} email - The email to validate
 * @returns {boolean} - True if valid email format, false otherwise
 */
function isValidEmail(email) {
    // TODO: Use regex to validate email format
    // Hint: Basic pattern - something@something.something
    // Example regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
}

/**
 * Validates if at least one radio button is selected
 * @param {NodeList} radioButtons - Radio buttons to check
 * @returns {boolean} - True if one is selected, false otherwise
 */
function isRadioSelected(radioButtons) {
    // TODO: Loop through radio buttons and check if any is checked
    // Hint: Use Array.from() or spread operator with .some()
}


// ========================================
// 3. ERROR DISPLAY FUNCTIONS
// ========================================

/**
 * Shows error message for a field
 * @param {HTMLElement} errorElement - The error message element
 * @param {HTMLElement} inputElement - The input element (optional, for border styling)
 */
function showError(errorElement, inputElement = null) {
    // TODO: Remove 'hidden' class from error element

    // TODO: Add red border to input element if provided
    // Hint: Add 'border-red' and remove 'border-grey-medium' classes

    // TODO: Set aria-invalid="true" on input for screen readers
}

/**
 * Hides error message for a field
 * @param {HTMLElement} errorElement - The error message element
 * @param {HTMLElement} inputElement - The input element (optional, for border styling)
 */
function hideError(errorElement, inputElement = null) {
    // TODO: Add 'hidden' class to error element

    // TODO: Remove red border from input element if provided
    // Hint: Remove 'border-red' and add back 'border-grey-medium' classes

    // TODO: Set aria-invalid="false" on input for screen readers
}


// ========================================
// 4. INDIVIDUAL FIELD VALIDATION
// ========================================

/**
 * Validates the first name field
 * @returns {boolean} - True if valid, false otherwise
 */
function validateFirstName() {
    // TODO: Get the value from first name input

    // TODO: Check if field is empty using isFieldEmpty()

    // TODO: If empty, show error and return false

    // TODO: If valid, hide error and return true
}

/**
 * Validates the last name field
 * @returns {boolean} - True if valid, false otherwise
 */
function validateLastName() {
    // TODO: Implement same logic as validateFirstName for last name
}

/**
 * Validates the email field
 * @returns {boolean} - True if valid, false otherwise
 */
function validateEmail() {
    // TODO: Get the value from email input

    // TODO: Check if field is empty
    // If empty, show "required" error and return false

    // TODO: Check if email format is valid using isValidEmail()
    // If invalid, show "valid email" error and return false

    // TODO: If all checks pass, hide all errors and return true
}

/**
 * Validates the query type selection
 * @returns {boolean} - True if valid, false otherwise
 */
function validateQueryType() {
    // TODO: Get all radio buttons with name="query"

    // TODO: Check if at least one is selected using isRadioSelected()

    // TODO: If none selected, show error and return false

    // TODO: If valid, hide error and return true
}

/**
 * Validates the message field
 * @returns {boolean} - True if valid, false otherwise
 */
function validateMessage() {
    // TODO: Implement same logic as validateFirstName for message textarea
}

/**
 * Validates the consent checkbox
 * @returns {boolean} - True if valid, false otherwise
 */
function validateConsent() {
    // TODO: Get the consent checkbox

    // TODO: Check if it's checked

    // TODO: If not checked, show error and return false

    // TODO: If checked, hide error and return true
}


// ========================================
// 5. FORM SUBMISSION HANDLER
// ========================================

/**
 * Validates entire form
 * @returns {boolean} - True if all fields are valid, false otherwise
 */
function validateForm() {
    // TODO: Call all validation functions and store results
    // Example: const isFirstNameValid = validateFirstName();

    // TODO: Return true only if ALL validations pass
    // Hint: Use && operator or array with .every()
}

/**
 * Shows success message
 */
function showSuccessMessage() {
    // TODO: Remove 'hidden' class from success message

    // TODO: Set focus to success message for screen readers
    // Hint: Add tabindex="-1" and call .focus()

    // TODO: Scroll to top of page to show success message
    // Hint: window.scrollTo(0, 0)
}

/**
 * Resets the form
 */
function resetForm() {
    // TODO: Call form.reset() to clear all inputs

    // TODO: Hide all error messages
    // Hint: Loop through all error elements and call hideError()
}

/**
 * Handles form submission
 * @param {Event} e - The submit event
 */
function handleSubmit(e) {
    // TODO: Prevent default form submission

    // TODO: Validate the entire form

    // TODO: If form is valid:
    //   - Show success message
    //   - Reset form after 3 seconds
    //   - Hide success message after 5 seconds
    // Hint: Use setTimeout()

    // TODO: If form is invalid, focus on first error
    // Hint: Find first input with aria-invalid="true"
}


// ========================================
// 6. REAL-TIME VALIDATION (OPTIONAL ENHANCEMENT)
// ========================================

/**
 * Adds real-time validation on blur events
 */
function addRealtimeValidation() {
    // TODO: Add 'blur' event listeners to each input
    // When user leaves a field, validate just that field
    // Example: firstNameInput.addEventListener('blur', validateFirstName);

    // TODO: Add 'change' event listener to radio buttons

    // TODO: Add 'change' event listener to consent checkbox
}


// ========================================
// 7. INITIALIZATION
// ========================================

/**
 * Initializes the form validation
 */
function init() {
    // TODO: Add submit event listener to form

    // TODO: Call addRealtimeValidation() for better UX (optional)

    // TODO: Set up ARIA labels for accessibility
    // Hint: Ensure all inputs have proper aria-describedby linking to error messages

    console.log('Contact form validation initialized!');
}

// TODO: Call init() when DOM is fully loaded
// Hint: Use DOMContentLoaded event or place script at end of body