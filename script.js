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

function getHumanChoice(callback){
    const rock=document.querySelector(".rock");
    const paper=document.querySelector(".paper");
    const scissor=document.querySelector(".scissor");

    function removeListener(){
        rock.removeEventListener("click",rockFunction)
        paper.removeEventListener("click",paperFunction)
        scissor.removeEventListener("click",scissorFunction)
    }

    function rockFunction(){
        callback("Rock");
        removeListener();
    }

    function paperFunction(){
        callback("Paper");
        removeListener();
    }

    function scissorFunction(){
        callback("Scissor");
        removeListener();
    }

    rock.addEventListener("click",rockFunction);
    paper.addEventListener("click",paperFunction);
    scissor.addEventListener("click",scissorFunction);
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
 
  function playGame(call,roundLeft) {
    if (roundLeft > 0) {
        const computerSelection = getComputerChoice();
        getHumanChoice((humanSelection) => {
            playRound(humanSelection, computerSelection);
            playGame(call,roundLeft - 1); 
        });
    } else {
        call();
    }
}

function results(){
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
}
playGame(results,5);
    
