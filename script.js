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
        const message=document.querySelector("#round");
        const hScore=document.querySelector("#hScore");
        const cScore=document.querySelector("#cScore");

        message.innerHTML=`It is a draw! you and computer choose ${humanChoice}`;
        hScore.innerHTML=`Human score:${humanScore}`;
        cScore.innerHTML=`Computer score:${computerScore}`;
    }
    else if (humanChoice=="Rock"&&computerChoice=="Scissor"){
        const message=document.querySelector("#round");
        const hScore=document.querySelector("#hScore");
        const cScore=document.querySelector("#cScore");

        message.innerHTML="you won! Rock beats Scissor.";
        hScore.innerHTML=`Human score:${++humanScore}`;
        cScore.innerHTML=`Computer score:${computerScore}`;
    }
    else if (humanChoice=="Paper"&&computerChoice=="Rock"){
        const message=document.querySelector("#round");
        const hScore=document.querySelector("#hScore");
        const cScore=document.querySelector("#cScore");

        message.innerHTML="You won! Paper beats Rock.";
        hScore.innerHTML=`Human score:${++humanScore}`;
        cScore.innerHTML=`Computer score:${computerScore}`;
    }
    else if (humanChoice=="Scissor"&&computerChoice=="Paper"){
        const message=document.querySelector("#round");
        const hScore=document.querySelector("#hScore");
        const cScore=document.querySelector("#cScore");

        message.innerHTML="you won! Scissor beats Paper.";
        hScore.innerHTML=`Human score:${++humanScore}`;
        cScore.innerHTML=`Computer score:${computerScore}`;
    }
    else if (humanChoice=="Rock"&&computerChoice=="Paper"){
        const message=document.querySelector("#round");
        const hScore=document.querySelector("#hScore");
        const cScore=document.querySelector("#cScore");

        message.innerHTML="you lost! Paper beats Rock.";
        hScore.innerHTML=`Human score:${humanScore}`;
        cScore.innerHTML=`Computer score:${++computerScore}`;
    }
    else if (humanChoice=="Paper"&&computerChoice=="Scissor"){
        const message=document.querySelector("#round");
        const hScore=document.querySelector("#hScore");
        const cScore=document.querySelector("#cScore");

        message.innerHTML="you lost! Scissor beats Paper.";
        hScore.innerHTML=`Human score:${humanScore}`;
        cScore.innerHTML=`Computer score:${++computerScore}`;
    }
    else if (humanChoice=="Scissor"&&computerChoice=="Rock"){
        const message=document.querySelector("#round");
        const hScore=document.querySelector("#hScore");
        const cScore=document.querySelector("#cScore");

        message.innerHTML="you lost! Rock beats Scissor.";
        hScore.innerHTML=`Human score:${humanScore}`;
        cScore.innerHTML=`Computer score:${++computerScore}`;
    }
    else{
        alert("Invalid choice!")
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
        const result1=document.querySelector("#results");
        result1.innerHTML=`Results: You won by ${humanScore-computerScore} points`;
    }
    else if(computerScore>humanScore){
        const result2=document.querySelector("#results");
        result2.innerHTML=`Results: computer won by ${computerScore-humanScore} points`;
    }
    else{    
        const result3=document.querySelector("#results");
        result3.innerHTML="Scores are tied and match draw !";
    }
}
playGame(results,5);
    
