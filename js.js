function getComputerChoice() {
   let compNumber = (Math.floor(Math.random() * 3));
   if (compNumber === 0) {
    return "rock"
   }
   else if (compNumber === 1) {
    return "paper"
   }
   else if (compNumber ===  2) {
    return "scissors"
   }
}

function singleRound() {
    let computerChoice = getComputerChoice()
    let playerChoice = prompt("Write rock, paper or scissors").toLowerCase();
    if (playerChoice === computerChoice) {
        return "Tie!" }
    else if (playerChoice === "rock" && computerChoice === "paper") {
        return "You lost!" }
    else if (playerChoice === "paper" && computerChoice === "scissors") {
        return "You lost!" }
    else if (playerChoice === "scissors" && computerChoice === "rock") {
        return "You lost!" }    
    else if (playerChoice === "rock" && computerChoice === "scissors") {
        return "You won!" }   
    else if (playerChoice === "paper" && computerChoice === "rock") {
         return "You won!" }     
    else if (playerChoice === "scissors" && computerChoice === "paper") {
        return "You won!" }               
}

function game() {
    let playerScore = "0"
    let computerScore = "0"

let round1 = singleRound()
     if (round1 === "You won!") {
        console.log("Win. Player score - " + (Number(++playerScore)) + " Computer score - "  + (Number(computerScore)))}
    else if (round1 === "You lost!") { console.log("Lost. Player score - " + (Number(playerScore)) + " Computer score - "  + (Number(++computerScore)))}
    else {console.log("Tie! Scores remain unchanged.")}

let round2 = singleRound()
    if (round2 === "You won!") {
        console.log("Win. Player score - " + (Number(++playerScore)) + " Computer score - "  + (Number(computerScore)))}
    else if (round2 === "You lost!") { console.log("Lost. Player score - " + (Number(playerScore)) + " Computer score - "  + (Number(++computerScore)))}
    else {console.log("Tie! Scores remain unchanged.")}

let round3 = singleRound()
    if (round3 === "You won!") {
        console.log("Win. Player score - " + (Number(++playerScore)) + " Computer score - "  + (Number(computerScore)))}
    else if (round3 === "You lost!") { console.log("Lost. Player score - " + (Number(playerScore)) + " Computer score - "  + (Number(++computerScore)))}
    else {console.log("Tie! Scores remain unchanged.")}

let round4 = singleRound()
    if (round4 === "You won!") {
        console.log("Win. Player score - " + (Number(++playerScore)) + " Computer score - "  + (Number(computerScore)))}
    else if (round4 === "You lost!") { console.log("Lost. Player score - " + (Number(playerScore)) + " Computer score - "  + (Number(++computerScore)))}
    else {console.log("Tie! Scores remain unchanged.")}

let round5 = singleRound()  
    if (round5 === "You won!") {
        console.log("Win. Player score - " + (Number(++playerScore)) + " Computer score - "  + (Number(computerScore)))}
    else if (round5 === "You lost!") { console.log("Lost. Player score - " + (Number(playerScore)) + " Computer score - "  + (Number(++computerScore)))}
    else {console.log("Tie! Scores remain unchanged.")}
if (playerScore > computerScore) {
    console.log("You win! The computer has been defeated by your exceptional finger abilities!")
}
else if (playerScore < computerScore) {
    console.log("You lost! The computer is simply too strong!")
}
else if (playerScore = computerScore) {
    console.log("Its a tie! Both of you were an even match. But that might not stand true next time....")
}
}

game()