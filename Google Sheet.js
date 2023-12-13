const scriptURL = 'https://script.google.com/macros/s/AKfycbz1C15Fl2lAPgjj3j_Lr2dvMHdDR_PSvK-6b8kmmbcZi-ILY6QjrLR5nsOB5khSAMk/exec'

const form = document.forms['contact-form']
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})