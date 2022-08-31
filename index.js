const dateOfBirth = document.querySelector('#dateOfBirth')
const luckyNumber = document.querySelector('#luckyNumber')
const message = document.querySelector('.message')
const checkNumber = document.querySelector('#checkNumber')

function hideMessage(){
    console.log("hideMessage")
    message.style.display = 'none'
}


function displayMessage(msg){
    console.log("displayMessage" + msg)
    message.style.display = 'block'
    message.innerHTML = msg
}

function sum_digits_from_string(dstr) {
    var dsum = 0
    for (var i = 0; i < dstr.length; i++)
    {
      if (/[0-9]/.test(dstr[i])){
        dsum += parseInt(dstr[i])
        }
    }
    return dsum
}



function checkLucky(){
    hideMessage()
    console.log(dateOfBirth.value)
    console.log(sum_digits_from_string(dateOfBirth.value))
    console.log(dateOfBirth.value.length)
    console.log(luckyNumber.value.length)
    if(dateOfBirth.value.length > 9 && luckyNumber.value.length > 0){
        if(sum_digits_from_string(dateOfBirth.value) === parseInt(luckyNumber.value)){
            displayMessage('Your Birthday is Lucky')
        }else{
            displayMessage('Your Birthday is Not Lucky')
        }

    }else{
        displayMessage('Enter Valid Data in both the fields')
    }

}


checkNumber.addEventListener('click',checkLucky)