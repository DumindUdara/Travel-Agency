// validation.js
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
      var fname = document.getElementById("fname").value;
      var lname = document.getElementById("lname").value;
      var email = document.getElementById("email").value;
      var message = document.getElementById("message").value;

      var isValid = true;

      // Check if the first name is empty
      if (fname.trim() === "") {
          isValid = false;
          showError("fname", "First name is required");
      } else {
          clearError("fname");
      }

      // Check if the last name is empty
      if (lname.trim() === "") {
          isValid = false;
          showError("lname", "Last name is required");
      } else {
          clearError("lname");
      }

      // Check if the email is valid
      if (!isValidEmail(email)) {
          isValid = false;
          showError("email", "Please enter a valid email address");
      } else {
          clearError("email");
      }

      // Check if the message is empty
      // if (message.trim() === "") {
      //     isValid = false;
      //     showError("message", "Message is required");
      // } else {
      //     clearError("message");
      // }

      if (!isValid) {
          event.preventDefault(); // Prevent form submission if there are errors
      }
  });

  function showError(fieldId, message) {
      var field = document.getElementById(fieldId);
      var errorField = document.getElementById(fieldId + "-error");

      if (!errorField) {
          errorField = document.createElement("div");
          errorField.className = "error-message";
          errorField.id = fieldId + "-error";
          field.parentNode.appendChild(errorField);
      }

      errorField.textContent = message;
  }

  function clearError(fieldId) {
      var errorField = document.getElementById(fieldId + "-error");
      if (errorField) {
          errorField.textContent = "";
      }
  }

  function isValidEmail(email) {
      // Simple email validation regex
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }
});
