

let countC=0;
let countP=0; 

const winner=5;
const controls = document.querySelector('.controls');
const endResult = document.createElement('div');
endResult.classList.add('end-result');
controls.appendChild(endResult);
let results = document.createElement('p');
endResult.appendChild(results);
const score = document.querySelector('.the-score');


function computerPlay(){
    const items= ['Rock', 'Paper', 'Scissors']; 
    let item=items[Math.floor(Math.random()*items.length)];
    return item; 
} 


function playRound (playerSelection , computerSelection){

 computerSelection= computerPlay();
 const rock = buttons[0];
 const paper = buttons[1];
 const scissors = buttons[2];
 game();

   if(playerSelection===rock && computerSelection == 'Rock'){
       
  results.textContent ='It\'s a tie';
  score.textContent= countP+'-'+countC;
     }
   
  else if(playerSelection===paper && computerSelection == 'Rock'){
    results.textContent ='You Win!, PAPER BEATS ROCK';
    score.textContent=  ++countP +'-'+countC;
       }
       else if(playerSelection===scissors && computerSelection == 'Rock'){
          results.textContent ='You Lose! ROCK BEATS SCISSORS';
          score.textContent= +countP+'-'+ ++countC;
       }
       else if(playerSelection===scissors && computerSelection == 'Scissors'){
      results.textContent ='It\'s a tie';
      score.textContent= countP + '-' + countC;
       }
       else if(playerSelection===rock && computerSelection == 'Scissors'){
       
     results.textContent ='You Win! ROCK BEATS SCISSORS';
     score.textContent=  ++countP +'-'+countC;
       }
       
       else if(playerSelection===paper && computerSelection == 'Scissors'){
        
        results.textContent ='You Lose! SCISSORS BEATS PAPER';
        score.textContent=  +countP +'-'+ ++countC;
       }
       else if(playerSelection===paper && computerSelection == 'Paper'){
         results.textContent ='It\'s a tie';
         score.textContent= countP+'-'+countC;
       }
       else if(playerSelection===scissors && computerSelection == 'Paper'){
        results.textContent ='You Win! SCISSORS BEATS PAPER';
        score.textContent=  ++countP +'-'+countC;
       }
       else if(playerSelection===rock && computerSelection == 'Paper'){
       
        results.textContent ='You Lose! ROCK BEATS PAPER';
        score.textContent= countP +'-' + ++countC;
       }

     }   


function game(){
  
  if(countC===winner){
   endResult.textContent ='you have lost the game, you have ' + countP + ' points and the computer has ' + countC + ' points';
  }
  else if (countP===winner){
    endResult.textContent='you have win the game, you have ' + countP + ' points and the computer has ' + countC +' points';
  }
  if (countC>=(winner+1) || countP>=(winner+1)){
    window.location.reload();
}
}



const buttons = document.querySelectorAll('button');        
buttons.forEach((button) => {
 button.addEventListener('click' , function(e){
    let playerSelection = e.target;
    let computerSelection = e.target;
    playRound(playerSelection, computerSelection);
    game();
  })
})