 //score constrain
 const SCORE_MAX=5;
 //score variables for both players
 let humanScore = 0;
 let computerScore = 0;
 //creating a button for each selection and adding a label to each one
 const rock=document.createElement("button");
 rock.textContent="Rock";
 const paper=document.createElement("button");
 paper.textContent="Paper";
 const scissors=document.createElement("button");
 scissors.textContent="Scissors";
//creating a div for displaying results/score
const result=document.createElement("div");
const score=document.createElement("div")
 //using Math.floor and Math.random to get the computer choice
 function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    switch (computerChoice) {
      case 1:
        return "Rock";
      case 2:
        return "Paper";
      case 3:
        return "Scissors";
    }
  }
  function updateScore(){
    score.textContent=`You: ${humanScore}, Computer: ${computerScore}`;
  }
    function disableButtons(){
      rock.disabled=true;
      paper.disabled=true;
      scissors.disabled=true;
    }
    //playRound function moved inside playGame
    function playRound(humanChoice, computerChoice) {
      if (humanChoice === computerChoice) {
        result.textContent="It is a tie!";
      } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        result.textContent="You win. Paper beats Rock!";
        humanScore++;
      } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        result.textContent="You win. Scissors beats Paper!";
        humanScore++;
      } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
         result.textContent="You win. Rock beats Scissors!";
        humanScore++;
      } else {
         result.textContent=`You lose! ${computerChoice} beats ${humanChoice}!`;
        computerScore++;
      }
    }
    
    //deciding on the winner and displaying the scores
    if (humanScore===SCORE_MAX || computerScore===SCORE_MAX){
      if (humanScore > computerScore) {
        result.textContent = `You win! Final score: You: ${humanScore}, Computer: ${computerScore}`;
      } else if (humanScore < computerScore) {
        result.textContent = `You lose! Final score: You: ${humanScore}, Computer: ${computerScore}`;
      } else {
        result.textContent = `It's a tie! Final score: You: ${humanScore}, Computer: ${computerScore}`;
      }
  
    
  }

  //selecting the elements
  const container=document.querySelector("div");
  const body=document.querySelector("body");
  //appending elements to the ui
  container.append(rock,paper,scissors);
  body.append(result,score);
  //event listener for each button clicked
  rock.addEventListener("click", ()=>{
    const humanChoice="Rock";
    const computerChoice=getComputerChoice();
    playRound(humanChoice,computerChoice);
  });
  paper.addEventListener("click", ()=>{
    const humanChoice="Paper";
    const computerChoice=getComputerChoice();
    playRound(humanChoice,computerChoice);
  });
  scissors.addEventListener("click", ()=>{
    const humanChoice="Scissors";
    const computerChoice=getComputerChoice();
    playRound(humanChoice,computerChoice);
  });


