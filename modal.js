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


function checkform(type, idelement, iderror) {
    const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    var item = document.getElementById(idelement)
    if (type === "text") {
        if (item.value.length < 2) {
            document.getElementById(iderror).style.display = "block"
            item.style.borderColor = "red"
            return ""
        }
    } else if (type === "email") {
        if (!regex.test(item.value)) {
            document.getElementById(iderror).style.display = "block"
            item.style.borderColor = "red"
            return ""
        }
    } else if (type === "date") {
        if (item.value === "") {
            document.getElementById(iderror).style.display = "block"
            item.style.borderColor = "red"
            return ""
        }

    }
    document.getElementById(iderror).style.display = "none"
    item.style.borderColor = "white"
    return item.value
}

// #TODO 2
function validate(event) {
    event.preventDefault()

    var firstName = checkform("text", "first", "firstError")
    var lastName = checkform("text", "last", "lastError")
    var email = checkform("email", "email", "emailError")
    var birthday = checkform("date", "birthday", "birthdayError")
    var quantity = checkform("date", "quantity", "quantityError")



}