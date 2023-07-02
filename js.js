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

function singleRound(playerChoice) {
    let computerChoice = getComputerChoice()
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
 const scoreText = document.querySelector("#score")
 let humanScore = 0
 let computerScore = 0
 scoreText.textContent = `Player ${humanScore} - ${computerScore} Computer`

 function checkWinorlose(singleroundresult) {
    if (singleroundresult === "You won!") {
    humanScore += 1;
    }
    else if (singleroundresult === "You lost!") {
    computerScore += 1;
    }
    scoreText.textContent = `Player ${humanScore} - ${computerScore} Computer`
 }
 function winorlossChecker() {
    if ((humanScore + computerScore) >= 5) {
        if (humanScore > computerScore) {
            scoreText.textContent = "YOU WON!"
        }
        else if (humanScore < computerScore) {
            scoreText.textContent = "YOU LOST!"
        }
        else if (humanScore === computerScore) {
            scoreText.textContent = "TIE!"
        }
    }
 }

document.querySelector("#btn1").addEventListener('click', function() {
   const winorlose = singleRound("rock");
   checkWinorlose(winorlose);
   winorlossChecker();
}) 

document.querySelector("#btn2").addEventListener('click', function() {
    const winorlose = singleRound("paper")
    checkWinorlose(winorlose)
    winorlossChecker();
 }) 

document.querySelector("#btn3").addEventListener('click', function() {
    const winorlose = singleRound("scissors")
    checkWinorlose(winorlose)
    winorlossChecker();
 }) 