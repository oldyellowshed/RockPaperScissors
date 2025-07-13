function getComputerChoice() {
    let choiceComputer = Math.floor(Math.random() * 3);
    
    if(choiceComputer === 0) {
        console.log("Rock")
    } else if (choiceComputer === 1) {
        console.log("Paper")
    } else if (choiceComputer === 2) {
        console.log("Scissors")
    }

    alert(choiceComputer)
}

getComputerChoice()