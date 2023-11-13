//get player selection
//check that player selection matches criteria
//get computer selection
const choices = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
    let shoot = choices[Math.floor(Math.random() * choices.length)];
    return shoot;
}

getComputerChoice();
//compare computer/player selection
//return winner