
    function computerPlay(){
        let items= ['Rock', 'Paper', 'Scissors']; 
        let item=items[Math.floor(Math.random()*items.length)];
        return item; 
    } 
    let result = computerPlay();
    console.log(result);
    let countC=0;
    let countP=0; 
    function playRound (){
   
    let playerSelection= prompt('Enter ROCK, PAPER OR SCISSORS here');
    let computerSelection= computerPlay();
       if(playerSelection.toUpperCase()=='ROCK' && computerSelection == 'Rock'){
           
         return alert('It\'s a tie') , console.log(countP, countC);
         }
       
      else if(playerSelection.toUpperCase()=='PAPER' && computerSelection == 'Rock'){
        countP++;
        return alert('You Win!'), console.log('you have '+countP+' points');
           }
           else if(playerSelection.toUpperCase()=='SCISSORS' && computerSelection == 'Rock'){
               countC++;
              return alert('You Lose!'), console.log('the computer has '+countC+' points');
           }
           else if(playerSelection.toUpperCase()=='SCISSORS' && computerSelection == 'Scissors'){
              return alert('It\'s a tie'), console.log(countP, countC);
           }
           else if(playerSelection.toUpperCase()=='ROCK' && computerSelection == 'Scissors'){
            countP++;
              return alert('You Win!'), console.log('you have '+ countP +' points');
           }
           
           else if(playerSelection.toUpperCase()=='PAPER' && computerSelection == 'Scissors'){
            countC++;
              return alert('You Lose!'), console.log('the computer has '+ countC +' points');
           }
           else if(playerSelection.toUpperCase()=='PAPER' && computerSelection == 'Paper'){
              return alert('It\'s a tie'), console.log(countP, countC);
           }
           else if(playerSelection.toUpperCase()=='SCISSORS' && computerSelection == 'Paper'){
            countP++;
              return alert('You Win!'),console.log('you have '+countP+' points');
           }
           else if(playerSelection.toUpperCase()=='ROCK' && computerSelection == 'Paper'){
            countC++;
              return alert('You Lose!') , console.log('the computer has '+countC+' points');
           }

         }   
       
   console.log(playRound());

  
  function game(){
      for (let i=1; i<5; i++) playRound(i, computerPlay(i)); 
      if(countC>countP){
        return  console.log('you have lost the game, you have ' + countP + ' points and the computer has ' + countC + ' points');
      }
      else if (countP>countC){
        return  console.log('you have win the game, you have ' + countP + ' points and the computer has ' + countC +' points')
      }
      else {
         console.log('it\'s a tie, you have ' + countP + ' points, and the comouter has ' + countC + ' points');
      }
  }
  console.log(game(playRound, computerPlay));
