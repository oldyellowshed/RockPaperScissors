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