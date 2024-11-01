let randomNumber=Math.floor(Math.random()*100);
let humanScore=0;
let computerScore=0;

function getComputerChoice(){
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
function playRound(humanChoice, computerChoice) {
    if(humanSelection==computerSelection){
        console.log("It is a draw!");
        console.log(humanScore);
        console.log(computerScore);
    }
    else if (humanSelection=="Rock"&&computerSelection=="Scissor"){
        console.log("you won! Rock beats Scissor.")
        console.log(++humanScore);
        console.log(computerScore);
    }
    else if (humanSelection=="Paper"&&computerSelection=="Rock"){
        console.log("you won! Paper beats Rock.")
        console.log(++humanScore);
        console.log(computerScore);
    }
    else if (humanSelection=="Scissor"&&computerSelection=="Paper"){
        console.log("you won! Scissor beats Paper.")
        console.log(++humanScore);
        console.log(computerScore);
    }
    else if (humanSelection=="Rock"&&computerSelection=="Paper"){
        console.log("you lost! Paper beats Rock.")
        console.log(humanScore);
        console.log(++computerScore);
    }
    else if (humanSelection=="Paper"&&computerSelection=="Scissor"){
        console.log("you lost! Paper beats Scissor.")
        console.log(humanScore);
        console.log(++computerScore);
    }
    else if (humanSelection=="Scissor"&&computerSelection=="Rock"){
        console.log("you lost! Scissor beats Rock.")
        console.log(humanScore);
        console.log(++computerScore);
    }
    else{
        console.log("Invalid choice!")
    }
  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);



