
//create choices to choose from
const choices = ["rock", "paper", "scissors"];
//get the choice of the computer
function getComputerChoice() {
    const shoot = choices[Math.floor(Math.random() * choices.length)];
    return shoot;
}
//compare player/computer selection
function compareChoice(playerSelection, computerSelection){
    if(playerSelection == computerSelection) {
        return "Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")

    ){
        return "Player";
    }
    else {
        return "Computer";
    }
}

//compare computer/player selection

function playRound(playerSelection, computerSelection){
    const result = compareChoice(playerSelection, computerSelection);
    if(result == "Tie"){
        return `You both picked ${playerSelection}. You Tied!`
    }
    else if(result == "Player"){
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }

}

  /*  if (playerSelection === computerSelection) {

        return `You both picked ${playerSelection}. You Tied!`

    } else if (playerSelection === "rock" && computerSelection === "paper") {

        computerScore++

        return "You lose! Paper beats Rock!"

    } else if (playerSelection === "rock" && computerSelection === "scissors") {

        playerScore++

        return "You win! Rock beats Scissors!"

    } else if (playerSelection === "paper" && computerSelection === "scissors") {

        computerScore++

        return "You lose! Scissors beat Paper!"

    } else if (playerSelection === "paper" && computerSelection === "rock") {

        playerScore++

        return "You win! Paper beats Rock!"

    } else if (playerSelection === "scissors" && computerSelection === "rock") {

        computerScore++

        return "You lose! Rock beat Scissors!"

    } else if (playerSelection === "scissors" && computerSelection === "paper") {

        playerScore++

        return "You win! Scissors beat Paper!"

    }*/

//get player choice
        function getPlayerChoice() {
            let checkChoice = false;
            while(checkChoice == false) {
                const choice = prompt("Rock, Paper, or Scissors");
                if(choice == null) {
                    continue;
                }
                const lowerCaseChoice = choice.toLowerCase();
                if(choices.includes(lowerCaseChoice)){
                    checkChoice = true;
                    return lowerCaseChoice;
                }
            }
        }

        function game() {
            let playerScore = 0;
            let computerScore = 0;
            for (let i = 0; i < 5; i++) {
                const playerSelection = getPlayerChoice();
                const computerSelection = getComputerChoice();
                console.log(playRound(playerSelection, computerSelection));
                if (compareChoice(playerSelection, computerSelection) == "Player"){
                    playerScore++;
                }
                else if (compareChoice(playerSelection, computerSelection) == "Computer"){
                    computerScore++;
            }
            }
            if(playerScore > computerScore){
                console.log("Player defeats computer")
            }
            else if(playerScore < computerScore){
                console.log("Computer defeats player")
            }
    }

    game();
    //console.log(playerScore);
    //console.log(computerScore);
    