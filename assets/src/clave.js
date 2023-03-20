/*****cambio de password ******/
const passwordCorrect = 'mia'
let passwordUser = prompt('enter password')
let changePassword

function CambioPassword(passwordCorrect, passwordUser, changePassword) {
  if (passwordCorrect === passwordUser) {
    alert(`pasword correct ,change your password`)
    changePassword = prompt('new password')
    return alert(`your password was changed`)
  }
  return alert(`password incorrect`)
}
let resultado = CambioPassword(passwordCorrect, passwordUser, changePassword)
console.log(resultado)
