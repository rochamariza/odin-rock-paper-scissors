let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 2)
    if(randomNumber === 0){
        console.log("The computer chooses Rock")
        return 0
    }else if(randomNumber === 1){
        console.log("The computer chooses Paper")
        return 1
    }else{
        console.log("The computer chooses Scissor")
        return 2
    }
}
function getHumanChoice(){
    const choice = prompt("Choose a number: 0 = Rock, 1 = Paper, 2 = Scissor")
    const computerChoice = getComputerChoice()
    if(choice == computerChoice){
        return "Draw"
    }else if(choice == 0 && computerChoice == 1){
        computerChoice = computerChoice + 1
        return "You lost!"
    }else if(choice == 1 && computerChoice == 2){
        computerChoice = computerChoice + 1
        return "You lost!"
    }else if(choice == 2 && computerChoice == 0){
        computerChoice = computerChoice + 1
        return "You lost!"
    }else{
        humanScore = humanScore + 1
        return "You win!"
    }
}

function playRound(humanChoice, computerChoice){
    
}