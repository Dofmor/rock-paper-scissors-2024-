function getComputerChoice () {

    let validChoices = ['rock', 'paper', 'scissors']

    let rand = Math.floor(Math.random() * 3)
    rand = validChoices[rand]
    return rand
}

function getUserChoice() {

    let validChoices = ['rock', 'paper', 'scissors']
    let userChoice 
    let isInvalid = true
    do {

        userChoice = prompt("Rock, Paper, or Scissors?")

        if (userChoice == validChoices[0] | userChoice == validChoices[1] |
            userChoice == validChoices[2]) 
                   isInvalid = false
    } while(isInvalid)
    //userChoice = userChoice.toLowerCase()
    return userChoice.toLowerCase()

}

let humanScore = 0, computerScore = 0

let playerChoice = getUserChoice()
console.log(playerChoice)

let computerChoice = getComputerChoice()
console.log(computerChoice)