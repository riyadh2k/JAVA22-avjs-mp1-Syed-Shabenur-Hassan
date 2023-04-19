import { displayHighscore, updateHighscore, userName } from "./main";



const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  //let moves = 0;
  let lastScore = 0;


  // Function to
  const playGame = () => {
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorBtn = document.querySelector('.scissor');
    const playerOptions = [rockBtn, paperBtn, scissorBtn];
    const computerOptions = ['rock', 'paper', 'scissors']

    // Function to start playing game
    playerOptions.forEach(option => {
      option.addEventListener('click', function () {

        //   const movesLeft = document.querySelector('.movesleft');
        //   moves++;
        //movesLeft.innerText = `Moves Left: ${5-moves}`;


        const choiceNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[choiceNumber];

        // Function to check who wins
        winner(this.innerText, computerChoice)

        //Check if the computer won 
        if (computerScore === 1) {
          gameOver(playerOptions)
          // const userName = prompt("Enter your username:");
          // document.getElementById("userName").innerText = userName;
          updateHighscore(userName, lastScore).then(() => {
            displayHighscore();
            lastScore = 0;
            location.reload();

          });
        }
      })
    })

  }

  // Function to decide winner
  const winner = (player, computer) => {
    const result = document.querySelector('.result');
    const playerScoreBoard = document.querySelector('.p-count');
    //const computerScoreBoard = document.querySelector('.c-count');
    const choicesSection = document.querySelector(".choices");
    const playerChoiceSpan = document.querySelector(".player-choice");
    const compChoiceSpan = document.querySelector(".comp-choice");
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if (player === computer) {
      result.textContent = 'Tie'
    }
    else if (player == 'rock') {
      if (computer == 'paper') {
        result.textContent = 'Computer Won';
        computerScore = 1;
        playerScore = 0;
        playerScoreBoard.textContent = playerScore;
        

      } else {
        result.textContent = 'Player Won';
        playerScore++;
        lastScore=playerScore;
        playerScoreBoard.textContent = playerScore;
      }
    }
    else if (player == 'scissors') {
      if (computer == 'rock') {
        result.textContent = 'Computer Won';
        computerScore = 1;
        lastScore = playerScore;
        playerScore = 0;
        playerScoreBoard.textContent = playerScore;
        
      } else {
        result.textContent = 'Player Won';
        playerScore++;
        lastScore=playerScore;
        playerScoreBoard.textContent = playerScore;
      }
    }
    else if (player == 'paper') {
      if (computer == 'scissors') {
        result.textContent = 'Computer Won';
        computerScore = 1;
        lastScore = playerScore;
        playerScore = 0;
        playerScoreBoard.textContent = playerScore;
       
      } else {
        result.textContent = 'Player Won';
        playerScore++;
        lastScore=playerScore;
        playerScoreBoard.textContent = playerScore;
      }
    }
    choicesSection.classList.add("active");
    playerChoiceSpan.innerHTML = player;
    compChoiceSpan.innerHTML = computer;
  }

  // Function to run when game is over
  const gameOver = (playerOptions) => {

    const chooseMove = document.querySelector('.move');
    const result = document.querySelector('.result');
    const reloadBtn = document.querySelector('.reload');

    playerOptions.forEach(option => {
      option.style.display = 'none';
    })


    chooseMove.innerText = 'Game Over!!'


    if (playerScore > computerScore) {
      result.style.fontSize = '2rem';
      // result.innerText = 'You Won The Game'
      result.style.color = '#308D46';
    }
    else if (playerScore < computerScore) {
      result.style.fontSize = '2rem';
      result.innerText = 'Game is Over';
      result.style.color = 'red';
    }
    else {
      result.style.fontSize = '2rem';
      result.innerText = 'Tie';
      result.style.color = 'grey'
    }
    // reloadBtn.innerText = 'Restart';
    // reloadBtn.style.display = 'flex'
    // reloadBtn.addEventListener('click', () => {
    //   window.location.reload();
    // })
  }


  // Calling playGame function inside game
  playGame();

}

// Calling the game function
game();

  //export{playerScore};