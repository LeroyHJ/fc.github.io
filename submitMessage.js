let submitBtn = document.getElementById('submit');
let firstName = document.getElementById('inputFirstName');
let lastName = document.getElementById('inputLastName');
let email = document.getElementById('inputEmail');
let message = document.getElementById('message');
const form = document.getElementById('form');

function submitMessage() {
  submitBtn.addEventListener('click', () => {
    if (firstName.value !== '' && lastName.value !== '' && email.value.includes("@") && message.value !== '') { 
      submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...'
      setTimeout(() => {
        submitBtn.innerHTML = "Message Submitted!"
        form.reset()
      }, 3000);
      setTimeout(() => {
        submitBtn.innerHTML = 'submit <i class="fas fa-paper-plane"></i>'
      }, 6000);
    }
  })
}