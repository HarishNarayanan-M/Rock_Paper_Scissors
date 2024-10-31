let randomNumber=Math.floor(Math.random()*100);

function getComputerChoice(){
    if(randomNumber>=0&& randomNumber<=33){
        console.log("Rock");
    }
    else if(randomNumber>33&& randomNumber<=66){
        console.log("Paper");
    }
    else{
        console.log("Scissor");
    }
}

console.log(getComputerChoice());

function getHumanChoice(){
   let choice= prompt("Enter you choice 1.Rock 2.Paper 3.Scissor").toLowerCase();

   if(choice=="rock"){
    console.log("Rock")
   }
   else if(choice=="paper"){
    console.log("Paper");
   }
   else if(choice=="scissor"){
    console.log("scissor");
   }
   else{
    console.log("Invalid choice");
   }

}

getHumanChoice();