alert("Would you like to play Rock, Paper, Scissors?");
//global variables//
//User Choice//
var PCN
var CPU
function userchoice() {
    var playerchoice = prompt( "Please Choose rock, paper, or scissors", "rock");
    console.log(playerchoice);
    if (playerchoice === 'rock'){
        PCN = 0;
    } 
    else if (playerchoice === 'paper'){
        PCN = 1;
    }
    else if (playerchoice === 'scissors'){
        PCN = 2;
          }
    else{alert("I don't think thats a legal play");
    userchoice();}
    console.log(PCN)

}
userchoice();

//CPU Choice//
function CPUchoice() {
    CPU = Math.floor(Math.random() * 3);
    console.log(CPU)
}
       
CPUchoice();

//Comparison PCN=players choice, CPU = Computers choice//
function game(){
    if (PCN == CPU){ 
        alert( "It's a tie!")
    }
    else if (PCN == 0 && CPU == 1 || PCN == 1 && CPU == 2 || PCN == 2 && CPU == 0){
        alert('CPU Wins')
    }
    else{ 
        alert('Player Wins!')
    } console.log (PCN)
    console.log(CPU)
}
game();
