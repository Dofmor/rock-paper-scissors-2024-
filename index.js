function getComputerChoice () {

    let rand = Math.floor(Math.random() * 3)
    rand = validChoices[rand]
    return rand
}

function getUserChoice() {

    let userChoice 
    let isInvalid = true
    do {

        userChoice = prompt("Rock, Paper, or Scissors?")

        if (userChoice == validChoices[0] | userChoice == validChoices[1] |
            userChoice == validChoices[2]) 
                   isInvalid = false
    } while(isInvalid)

    return userChoice.toLowerCase()

}

function winChecker(playerChoice, computerChoice) {

    let winner

    if (playerChoice == computerChoice) {
        winner = 'tie'
    }

    else if ((playerChoice == validChoices[0] & computerChoice == validChoices[2]) | 
        (playerChoice == validChoices[1] & computerChoice == validChoices[0]) |
        (playerChoice == validChoices[2] & computerChoice == validChoices[1])) {
            winner = 'player'
        }
    else {
        winner = 'computer'
    }

        return winner


}

function playRound() {

   // let validChoices = ['rock', 'paper', 'scissors']
    let playerChoice = getUserChoice()
    let computerChoice = getComputerChoice()

    console.log (playerChoice)
    console.log (computerChoice)

    console.log (winChecker(playerChoice, computerChoice))
}

let validChoices = ['rock', 'paper', 'scissors']


playRound()
let humanScore = 0, computerScore = 0
