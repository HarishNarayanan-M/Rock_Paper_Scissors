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

console.log(getComputerChoice());

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
console.log(getHumanChoice());


