function getComputerChoice() {
    let choiceComputer = Math.floor(Math.random() * 3);
    
    if(choiceComputer === 0) {
        console.log("Rock");
    } else if (choiceComputer === 1) {
        console.log("Paper");
    } else if (choiceComputer === 2) {
        console.log("Scissors");
    }
}

function getHumanChoice() {
    let choiceHuman = prompt("Rock? Paper? Or Scissors?")

    if(choiceHuman === "Rock") {
        console.log("Rock");
    } else if (choiceHuman === "Paper") {
        console.log("Paper");
    } else if (choiceHuman === "Scissors") {
        console.log("Scissors");
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if(humanChoice === "Rock" && computerChoice === "Rock") {
        console.log("DRAW!");
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log("Computer wins!");
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You win!");
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You win!!");
    } else if (humanChoice === "Paper" && computerChoice === "Paper") {
        console.log("DRAW!");
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log("Computer wins!");
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log("Computer wins!!");
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You win!"); 
    } else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
        console.log("DRAW!");
    }
} 

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection)