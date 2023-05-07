const form = document.querySelector("#survey-form")
const submitButton = document.querySelector("#submit")
const scriptURL = 'https://script.google.com/macros/s/AKfycbz0h6uEbzjNzpYh0eBJ-GuzHbi6j9Kzl-7KMgS_aGbyRzse6wHxeF4n7bDDVobDVyf0/exec'

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
