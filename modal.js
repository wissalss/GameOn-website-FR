function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground.modal-form");
const modalBgConfirm = document.querySelector('.bground.modal-confirm')
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
//* Adding const for close modal*//
const modalClose1 = document.querySelectorAll('.close')
const modalClose2 = document.querySelectorAll('.btn-close')

const modalForm = document.querySelector('.modal-inscription-form')
modalForm.addEventListener('submit', (event) => validate(event))


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";

}


// #1 TODO : close modal

modalClose1.forEach((close) => close.addEventListener('click', closeModal1))
modalClose2.forEach((close) => close.addEventListener('click', closeModal2))

function closeModal1() {
  modalbg.style.display = 'none'
}
function closeModal2() {
  modalBgConfirm.style.display = 'none'
}


// #TODO 2
function validate(event) {
  event.preventDefault()

  let formValid = true

// First Name
  const inputFirstName = document.querySelector('#first')
  const firstName = inputFirstName.value

  if (firstName.length < 2) {
    const errorLabel = document.querySelector('.firstName.error')
    errorLabel.style.display = 'inline'
    inputFirstName.style.border = "0.2rem solid #fe142f";
    formValid = false
  }

  // Last Name
  const inputLastName = document.querySelector('#last')
  const lastName = inputLastName.value
  if (lastName.length < 2) {
    const errorLabel = document.querySelector('.lastName.error')
    errorLabel.style.display = 'inline'
    inputLastName.style.border = "0.2rem solid #fe142f";
    formValid = false
  }

  // Email
  const inputEmail = document.querySelector('#email')
  const email = inputEmail.value

  const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

  if (regex.test(email) == false) {
    const errorLabel = document.querySelector('.Email.error')
    errorLabel.style.display = 'inline'
    inputEmail.style.border = "0.2rem solid #fe142f";
    formValid = false
  }

  
  // BirthDay
  const inputBirthdate = document.querySelector('#birthdate')
  const birthdate = inputBirthdate.value
  if (birthdate.length < 1) {
    const errorLabel = document.querySelector('.birthdate.error')
    errorLabel.style.display = 'inline'
    inputBirthdate.style.border = "0.2rem solid #fe142f";
    formValid = false
  }


  // Quantity
  const inputQuantityNumber = document.querySelector('#quantity')
  const nbTournois = parseInt(inputQuantityNumber.value, 10)
  if (isNaN(nbTournois) || nbTournois < 0 || nbTournois > 99) {
    const errorLabel = document.querySelector('.QuantityTournament.error')
    errorLabel.style.display = 'inline'
    inputQuantityNumber.style.border = "0.2rem solid #fe142f";
    formValid = false
  }

  // Radio
  const checkedRadios = document.querySelectorAll('[name=location]:checked')
  if (checkedRadios.length < 1) {
    const errorLabel = document.querySelector('.Location.error')
    errorLabel.style.display = 'inline'
    formValid = false
  }

  // condition
  const condition = document.querySelectorAll('[name=checkbox1]:checked')
  if (condition.length < 1) {
    const errorLabel = document.querySelector('.AcceptCondition.error')
    errorLabel.style.display = 'inline'
    formValid = false
  }

  if (formValid) {
    const modalBodyForm = document.querySelector('.bground.modal-form')
    const modalBodyConfirm = document.querySelector('.bground.modal-confirm')
    modalBodyForm.style.display = 'none'
    modalBodyConfirm.style.display = 'block'
  }

  return formValid
}
