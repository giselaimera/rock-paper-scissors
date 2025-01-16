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
  //getting the user input, making sure it is accepted even if uppercase or mixed
  function getHumanChoice() {
    let humanChoice = prompt("Enter Rock, Paper, or Scissor :")
      .trim()
      .toLowerCase();
    switch (humanChoice) {
      case "rock":
        return "Rock";
      case "paper":
        return "Paper";
      case "scissors":
        return "Scissors";
      default:
        return "Invalid Choice!";
    }
  }

  function playGame() {
    //score variables for both players
    let humanScore = 0;
    let computerScore = 0;
    //playRound function moved inside playGame
    function playRound(humanChoice, computerChoice) {
      if (humanChoice === computerChoice) {
        console.log("It is a tie!");
      } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You win. Paper beats Rock!");
        humanScore++;
      } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You win. Scissors beats Paper!");
        humanScore++;
      } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You win. Rock beats Scissors!");
        humanScore++;
      } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
      }
    }
    //run the game for 5 rounds getting both the user input and the computer choice
    for (let i = 1; i <= 5; i++) {
      console.log(`Round ${i}:`);
      const humanChoice = getHumanChoice();
      if (humanChoice == "Invalid Choice!") {
        console.log("Choose either Rock, Paper, or Scissor! Retry!");
        i--;
        continue;
      }
      const computerChoice = getComputerChoice();

      playRound(humanChoice, computerChoice);
    }
    //deciding on the winner and displaying the scores
    if (humanScore > computerScore) {
      console.log(
        `You win! Final score: You: ${humanScore}, Computer: ${computerScore}`
      );
    } else if (humanScore < computerScore) {
      console.log(
        `You lose! Final score: You: ${humanScore}, Computer: ${computerScore}`
      );
    } else {
      console.log(
        `It is a tie! Final score: You: ${humanScore}, Computer: ${computerScore}`
      );
    }
  }
  //calling the game function to start playing the game
  document.getElementById("playGame").addEventListener("click", playGame);
