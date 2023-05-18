//form data send to Google Sheets with URL
const form = document.querySelector("#survey-form");
const submitButton = document.querySelector("#submit");
const scriptURL =
  "https://script.google.com/macros/s/AKfycbygT-zrI0Nli84NkBLOy_GGxcl5nJXuiE_pA4mqDoXtAPcmrvHltLdBjVb3jiJqjj8EYw/exec";

form.addEventListener("submit", (e) => {
  submitButton.disabled = true;
  e.preventDefault();
  let requestBody = new FormData(form);
  fetch(scriptURL, { method: "POST", body: requestBody })
    .then((response) => {
      alert("Köszönjük a jelentkezését! Hamarosan értesítjük.", response);
      submitButton.disabled = false;
    })
    .catch((error) => {
      alert(
        "A jelentkezését sajnos nem tudtuk fogadni. Kérjük, küldje el ismét!",
        error.message
      );
      submitButton.disabled = false;
    });
});

(function () {
        emailjs.init("IfzgPhXLTbldH8mpx");
      })();
      
// Add an event listener for form submission
form.addEventListener('submit', event => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Convert the form data to an object
  const data = Object.fromEntries(formData);

  // Use EmailJS to send the email
  emailjs.send('service_27ert4a', 'template_2e57aqa', data)
    .then(response => {
      console.log('Email sent successfully!', response);
    })
    .catch(error => {
      console.error('Error sending email:', error);
    });
});

function resetFunction() {
  document.getElementById("#reset").reset();
}