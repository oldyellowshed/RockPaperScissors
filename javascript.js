function getComputerChoice() {
    let choiceComputer = Math.floor(Math.random() * 3);
    
    if(choiceComputer === 0) {
        return "rock";
    } else if (choiceComputer === 1) {
        return "paper";
    } else if (choiceComputer === 2) {
        return "scissors";
    }
}

function getHumanChoice() {
    let choiceHuman = prompt("Rock? Paper? Or Scissors?")
    choiceHuman = choiceHuman.toLowerCase()

    if(choiceHuman == "rock") {
        return "rock";
    } else if (choiceHuman == "paper") {
        return "paper";
    } else if (choiceHuman == "scissors") {
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {

    function playRound(humanChoice, computerChoice) {
        
        if(humanChoice === "rock" && computerChoice === "rock") {
            console.log("DRAW! Round will be replayed");
            playRound(getHumanChoice(), getComputerChoice());
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("Computer wins!");
            ++computerScore
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win!");
            ++humanScore
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win!!");
            ++humanScore
        } else if (humanChoice === "paper" && computerChoice === "paper") {
            console.log("DRAW! Round will be replayed");
            playRound(getHumanChoice(), getComputerChoice());

        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("Computer wins!");
            ++computerScore
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("Computer wins!!");
            ++computerScore
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win!"); 
            ++humanScore
        } else if (humanChoice === "scissors" && computerChoice === "scissors") {
            console.log("DRAW! Round will be replayed");
            playRound(getHumanChoice(), getComputerChoice());

        }
    } 

        playRound(getHumanChoice(), getComputerChoice());
        playRound(getHumanChoice(), getComputerChoice());
        playRound(getHumanChoice(), getComputerChoice());  
        playRound(getHumanChoice(), getComputerChoice());
        playRound(getHumanChoice(), getComputerChoice());
        
        if(humanScore>computerScore) {
            console.log("You win! Congradulations! ☺");
        } else if (humanScore<computerScore) {
            console.log("You lost! Computer wins! ☺");
        }
}

playGame();