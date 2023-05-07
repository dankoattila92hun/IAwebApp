const form = document.querySelector("#survey-form")
const submitButton = document.querySelector("#submit")
const scriptURL = 'https://script.google.com/macros/s/AKfycbwYUO2rF_IQxtup2bqLmll36I-u_pmuSiSTQgCBUIHA_CMYzQgZY5w2g10JUigiD_KqGg/exec'

form.addEventListener('submit', e => {
    submitButton.disabled = true
    e.preventDefault()
    let requestBody = new FormData(form)
    fetch(scriptURL, { method: 'POST', body: requestBody })
        .then(response => {
            alert('Success!', response)
            submitButton.disabled = false
        })
        .catch(error => {
            alert('Error!', error.message)
            submitButton.disabled = false
        }
        )
})
