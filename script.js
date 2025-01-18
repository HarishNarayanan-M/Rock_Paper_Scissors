function getComputerChoice(){
    let randomNumber=Math.floor(Math.random()*100);
    if(randomNumber>=0&& randomNumber<=33){
        return "Rock";
    }
    else if(randomNumber>33&& randomNumber<=66){
        return "Paper"
    }
    else{
        return "Scissor";
    }
}

function getHumanChoice(){
   let choice= prompt("Enter you choice 1.Rock 2.Paper 3.Scissor").toLowerCase();

   if(choice=="rock"){
    return "Rock"
}
   else if(choice=="paper"){
    return "Paper"
   }
   else if(choice=="scissor"){
    return "Scissor"
   }
   else{
    return "Invalid choice"
   }

}

let humanScore=0;
let computerScore=0;
function playRound(humanChoice, computerChoice) {
    if(humanChoice==computerChoice){
        console.log(`It is a draw! you and computer choose ${humanChoice}`);
        console.log(`Human score:${humanScore}`);
        console.log(`Computer score:${computerScore}`);
    }
    else if (humanChoice=="Rock"&&computerChoice=="Scissor"){
        console.log("you won! Rock beats Scissor.");
        console.log(`Human score:${++humanScore}`);
        console.log(`Computer score:${computerScore}`);
    }
    else if (humanChoice=="Paper"&&computerChoice=="Rock"){
        console.log("you won! Paper beats Rock.");
        console.log(`Human score:${++humanScore}`);
        console.log(`Computer score:${computerScore}`);
    }
    else if (humanChoice=="Scissor"&&computerChoice=="Paper"){
        console.log("you won! Scissor beats Paper.")
        console.log(`Human score:${++humanScore}`);
        console.log(`Computer score:${computerScore}`);
    }
    else if (humanChoice=="Rock"&&computerChoice=="Paper"){
        console.log("you lost! Paper beats Rock.")
        console.log(`Human score:${humanScore}`);
        console.log(`Computer score:${++computerScore}`);
    }
    else if (humanChoice=="Paper"&&computerChoice=="Scissor"){
        console.log("you lost! Scissor beats Paper.")
        console.log(`Human score:${humanScore}`);
        console.log(`Computer score:${++computerScore}`);
    }
    else if (humanChoice=="Scissor"&&computerChoice=="Rock"){
        console.log("you lost! Rock beats Scissor.")
        console.log(`Human score:${humanScore}`);
        console.log(+`Computer score:${++computerScore}`);
    }
    else{
        console.log("Invalid choice!")
    }
  }
 
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);




    
/*
if(humanScore>computerScore){
    console.log("Results:");
    console.log(`You won by ${humanScore-computerScore}`);
}
else if(computerScore>humanScore){
    console.log("Results:");
    console.log(`Computer won by ${computerScore-humanScore}`);
}
else{    
    console.log("Results:");
    console.log("The scores are tied and match draw!");
}
    */
