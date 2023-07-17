alert("Would you like to play Rock, Paper, Scissors?");

//global variables//
var PCN
var CPU
var wins
var loss
var ties
// Starting scores
var wins = 0;
var losses = 0;
var ties = 0;
//User Choice//
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
    else if (playerchoice === null){
        alert("If you'd like to play again, just refresh the page!")
        return;
    }
    else{alert("I don't think thats a legal play");
    userchoice();}
    console.log(PCN)
     CPUchoice();   
}
userchoice();

//CPU Choice//
function CPUchoice() {
    CPU = Math.floor(Math.random() * 3);
    console.log(CPU)
    if (CPU == 0){
        alert('CPU chose Rock!')
    }
    else if (CPU == 1){
        alert( 'CPU chose paper!')
    }
    else{alert('CPU chose scissors!')}
    game();
}
    

//Comparison PCN=players choice, CPU = Computers choice//
function game(){
    if (PCN == CPU){ 
        alert( "It's a tie!")
        tiecounter()
    }
    else if (PCN == 0 && CPU == 1 || PCN == 1 && CPU == 2 || PCN == 2 && CPU == 0){
        alert('CPU Wins')
        CPUcounter()
    }
    else{ 
        alert('Player Wins!')
        playercounter()
    } 
    console.log (PCN)
    console.log(CPU)
}


// Scoreboard
function tiecounter() {
    ties ++;
    score()
}
function CPUcounter(){
    losses ++;
    score()
}
function playercounter(){
    wins ++;
    score()
}
function score(){
    alert('The Score is ' + wins + ' wins, ' + losses + ' losses, and ' + ties + ' ties. Another Round?')
userchoice()
}