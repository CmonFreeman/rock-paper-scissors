
//check that player selection matches criteria
//get computer selection
let playerScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
    let shoot = choices[Math.floor(Math.random() * choices.length)];
    return shoot;
}


getComputerChoice();

//compare computer/player selection

const playRound = (playerSelection, computerSelection) => {

    if (playerSelection === "rock" && computerSelection === "rock") {

        return "You both picked rock. You Tied!"

    } else if (playerSelection === "rock" && computerSelection === "paper") {

        computerScore++

        return "You lose! paper beats rock!"

    } else if (playerSelection === "rock" && computerSelection === "scissors") {

        playerScore++

        return "You win! rock beats scissors!"

    } else if (playerSelection === "paper" && computerSelection === "paper") {

        return "You both picked paper. You Tied!"

    } else if (playerSelection === "paper" && computerSelection === "scissors") {

        computerScore++

        return "You lose! scissors beat paper!"

    } else if (playerSelection === "paper" && computerSelection === "rock") {

        playerScore++

        return "You win! paper beats rock!"

    } else if (playerSelection === "scissors" && computerSelection === "scissors") {

        return "You both picked scissors. You Tied!"

    } else if (playerSelection === "scissors" && computerSelection === "rock") {

        computerScore++

        return "You lose! rock beat scissors!"

    } else if (playerSelection === "scissors" && computerSelection === "paper") {

        playerScore++

        return "You win! scissors beat paper!"

    }
}   

//get player choice
        function getPlayerChoice() {
            let checkChoice = false;
            while(checkChoice == false) {
                const choice = prompt("Rock, Paper, or Scissors");
                if(choice == null) {
                    continue;
                }
                const lowerCaseChoice =choice.toLowerCase();
                if(choices.includes(lowerCaseChoice)){
                    checkChoice = true;
                    return lowerCaseChoice;
                }
            }
        }

        function game() {
           
            for (let i = 0; i < 5; i++); {
            const playerSelection = getPlayerChoice();
            const computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection));
        }
    }

    game();
    console.log(playerScore);
    console.log(computerScore);
    




//if playerSelection 
//}

//return winner