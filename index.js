function getComputerChoice() {

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
    } while (isInvalid)

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


function playGame() {

    let playerPoints = 0, computerPoints = 0
    const MAX_GAMES = 5

    function playRound() {
        // let validChoices = ['rock', 'paper', 'scissors']
        let playerChoice = getUserChoice()
        let computerChoice = getComputerChoice()

        console.log(playerChoice)
        console.log(computerChoice)

        console.log(winChecker(playerChoice, computerChoice))

        let winner = winChecker(playerChoice, computerChoice)
        console.log(winner)

        if (winner == 'player') {
            playerPoints += 1
        }
        else if (winner == 'computer') {
            computerPoints += 1
        }

        console.log(`player points: ${playerPoints}`)
        console.log(`computer points: ${computerPoints}`)

    }

    while ((playerPoints < MAX_GAMES) & (computerPoints < MAX_GAMES)) {
        playRound()
    }

}

let validChoices = ['rock', 'paper', 'scissors']
playGame()


