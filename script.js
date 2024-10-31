let randomNumber=Math.floor(Math.random()*100);

function getComputerChoice(){
    if(randomNumber>=0&& randomNumber<=33){
        console.log("Rock");
    }
    if(randomNumber>33&& randomNumber<=66){
        console.log("Paper");
    }
    if(randomNumber>66&& randomNumber<=100){
        console.log("Scissor");
    }
}

console.log(getComputerChoice());