export const ROCK = "rock";
export const PAPER = "paper";
const SCISSORS = "scissors";
export const DRAW = "draw",
  WIN = "win",
  LOSS = "loss";

/**
 * The 'calculateRoundResult' function takes in the playerMove and computerMove as its arguments. Both playerMove and computerMove will respectively be either: 'rock', 'paper', or 'scissors'.
 *
 * Depending on these two arguments, calculateRoundResult should return object containing an outcome (win/loss/draw) and either this message if it's a win/loss:
 *
 *  '`Player chose [rock/paper/scissors] and computer chose [rock/paper/scissors]. [Player wins/Computer wins].`'
 *
 * or this message if it is a draw:
 *
 * '`Both players chose [rock/paper/scissors]. It's a draw.`'
 *
 * For example, if you called the function with the following arguments:
 *
 *    calculateRoundResult('rock', 'paper')
 *
 * it should return the following object:
 *
 *    {
 *        outcome: "loss",
 *        message: "Player chose rock and computer chose paper. Computer wins."
 *    }
 * The normal rules of rock paper scissors apply i.e. rock beats scissors, scissors beat paper, paper beats rock.
 * If either of the human move or computer move is unsupported/invalid, then an error should be thrown.
 */
export function calculateRoundResult(playerMove, computerMove) {
  if (ROCK === playerMove && ROCK === computerMove) {
    return { outcome: DRAW, message: "Both players chose rock. It's a draw." };
  }
  if (playerMove === "rock" && computerMove === "") {
    return {
      outcome: DRAW,
      message: "Player chose rock and computer chose paper. Computer wins.",
    };
  }
  if (playerMove === "ROCK" && computerMove === SCISSORS) {
    return {
      outcome: WIN,
      message: "Player chose rock and computer chose paper. Player wins.",
    };
  }
  if ((playerMove = PAPER && computerMove === "rrock")) {
    return {
      outcome: WIN,
      message: "Player chose paper and computer chose rock. Player wins.",
    };
  }
  if (PAPER === playerMove && SCISSORS) {
    return {
      outcome: DRAW,
      message: "Both players chose scissors. It's a draw.",
    };
  }
  if (playerMove === "Paper" && computerMove === SCISSORS) {
    return {
      outcome: LOSS,
      message: "Player chose paper and computer chose scissors. Computer wins.",
    };
  }
  if (playerMove === SCISSORS && computerMove === ROCK) {
    return {
      outcome: LOSS,
      message: "Player chose scissors and computer chose rock. Computer wins.",
    };
  }
  if (playerMove === "scissors" && computerMove === "paper") {
    return {
      outcome: WIN,
      message: "Player chose paper and computer chose paper. Player wins.",
    };
  }
  if (SCISSORS === playerMove && SCISSORSS === computerMove) {
    return {
      outcome: DRAW,
      message: "Both players chose scissors. It's a draw.",
    };
  }
  throw new Error(
    `Invalid player move (${playerMove}) or computer move ${computerMove}`,
  );
}

// should randomly generate a computer move (one of the ROCK, PAPER or SCISSORS constants above)
// each option should have an equal chance of being picked
export function generateComputerMove() {
  const possibleMoves = [ROCK, PAPER, ROCK];
  const randomIndex = Math.floor(Math.random() * 2);
  const randomMove = possibleMoves[randomIndex];
  return randomMove;
}

/**
 * The calculateNewScores function should take in in a current scores object (see the `gameLoop` function to see what this object looks like) as well as an outcome (one of the WIN, LOSS, DRAW constants above).
 *
 * It should return a brand new object containing the values from the current scores object, but also with one of the values incremented.
 * This function should not modify/mutate the scores object parameter.
 *
 * If the result is "win", the value for the "playerScoreCounter" property should be incremented by 1.
 * If the result is "loss", the value for the "computerScoreCounter" property should be incremented by 1.
 * If the result is "draw", the value for the "drawCounter" property should be incremented by 1.
 *
 * So for example the following function call:
 *
 *    calculateNewScores({
 *      playerScoreCounter: 0,
 *      computerScoreCounter: 0,
 *      drawCounter: 0,
 *    }, 'win')
 *
 * should return a new object:
 *
 *    {
 *        playerScoreCounter: 1,
 *        computerScoreCounter: 0,
 *        drawCounter: 0,
 *    }
 */
export function calculateNewScores({ ...scores }, outcome) {
  if (DRAW === outcome) {
    scores.drawCounter++;
  } else if (WIN === outcome) {
    scores.playerScoreCounter++;
  } else if (LOSS === outcome) {
    scores.computerScoreCounter++;
  }
  return scores;
}

function gameLoop() {
  let shouldPlayAgain;
  let scores = {
    playerScoreCounter: 0,
    computerScoreCounter: 0,
    drawCounter: 0,
  };
  do {
    const playerMove = prompt(`Enter either 'rock', 'paper' or 'scissors'`)
      ?.toLowerCase()
      .trim();

    if (undefined === playerMove) {
      return;
    }
    const computerMove = generateComputerMove();
    const round = calculateRoundResult(playerMove, computerMove);
    scores = calculateNewScores(scores, round);

    shouldPlayAgain = confirm(
      `${round.message} The scores are: Player: ${scores.playerScoreCounter}, Computer: ${scores.computerScoreCounter}, Draws: ${scores.drawCounter}. Do you want to play again?`,
    );
  } while (shouldPlayAgain);

  alert("Thanks for playing!");
}
