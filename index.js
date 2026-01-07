let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 2)
    if(randomNumber === 0){
        console.log("The computer chooses Rock")
        return "rock"
    }else if(randomNumber === 1){
        console.log("The computer chooses Paper")
        return "paper"
    }else{
        console.log("The computer chooses Scissor")
        return "scissor"
    }
}
function getHumanChoice(){
    const choice = prompt("Write Rock, Paper or Scissor")
    console.log(`You choose ${choice.slice(0, 1).toUpperCase() + choice.slice(1, choice.length)}`)
    return choice.toLowerCase()
}

function playRound(humanChoice, computerChoice){
    if(humanChoice == computerChoice){
        console.log("Draw")
        console.log(" ") 
    }else if(humanChoice == "rock" && computerChoice == "paper"){
        computerScore = computerScore + 1
        console.log("You lost this round!")
        console.log(" ") 
    }else if(humanChoice == "paper" && computerChoice == "scissor"){
        computerScore = computerScore + 1
        console.log("You lost this round!")
        console.log(" ") 
    }else if(humanChoice == "scissor" && computerChoice == "rock"){
        computerScore = computerScore + 1
        console.log("You lost this round!")
        console.log(" ") 
    }else{
        humanScore = humanScore + 1
        console.log("You won this round!")
        console.log(" ") 
    }
}
function playGame(){
    
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
    }
    if(humanScore > computerScore){
        console.log("You won the Game!")
    }else{
        console.log("You lost the Game!")
    }
    return `Humans: ${humanScore} // Computer: ${computerScore}`
}
