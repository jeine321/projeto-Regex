

const inputUsername = document.querySelector('#username')
const form = document.querySelector('form')
const button = document.querySelector('button')

const paragraphUsernameFeedback = document.createElement('p')
const paragraphSubmitfeedback = document.createElement('p')

paragraphSubmitfeedback.setAttribute('data-feedback', 'submit-feedback')

const invalidSubmitInfo = {
  paragraph: paragraphSubmitfeedback,
  text: 'Por favor, insira um username válido', 
  className: 'submit-help-feedback', 
  previousSibling: button
}

const invalidUsernameInfo = {
  paragraph: paragraphUsernameFeedback,
  text:  'O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas',
  className:'username-help-feedback',
  previousSibling: inputUsername
}

const validUsernameInfo = {
  paragraph: paragraphUsernameFeedback,
  text:  'Username valido =)',
  className:'username-success-feedback',
  previousSibling: inputUsername
}

const insertParagraphIntoDom = paragraphInfo => {
  const {paragraph, text, className, previousSibling} = paragraphInfo
  paragraph.textContent = text
  paragraph.setAttribute('class', className)
  previousSibling.insertAdjacentElement('afterend', paragraph)
 }

const validSubmitInfo = {
  paragraph: paragraphSubmitfeedback, 
  text: 'Dados enviados =)', 
  className: 'submit-success-feedback', 
  previousSibling: button,
}

const removeSubmitPargraph = () => {
  const paragraphSubmitfeedbackExists = document
      .querySelector('[data-feedback="submit-feedback"]')

      if (paragraphSubmitfeedbackExists) {
        paragraphSubmitfeedback.remove()
      }
}

const testUsername = inputValue => /^[a-zA-Z]{6,}$/.test(inputValue)

  const showUsernameInfo = event => {
  const isUsernameValid =  testUsername(event.target.value)

  removeSubmitPargraph()

  if (!isUsernameValid) {
    insertParagraphIntoDom(invalidUsernameInfo)
    return
  }
  insertParagraphIntoDom(validUsernameInfo)
}
 const showSubmitInfo =  event => {
  event.preventDefault()

  const isUsernameValid = testUsername(inputUsername.value)
 
  if (!isUsernameValid) {
    insertParagraphIntoDom(invalidSubmitInfo)
    return
  }

 insertParagraphIntoDom(validSubmitInfo) 
}

inputUsername.addEventListener('input', showUsernameInfo)
form.addEventListener('submit', showSubmitInfo)


