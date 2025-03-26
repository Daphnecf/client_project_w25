const currentYear = new Date().getFullYear();

document.getElementById("year").textContent = currentYear;

function handleSubmit() {
    document.getElementById('feedback-section').innerHTML = '<h2>Thank you for your feedback!</h2>';
  }