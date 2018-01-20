function promptMe (){
  var playerChoice = prompt ("Enter your Choice: rock, paper, scissors")
  var choiceUpper = playerChoice.toUpperCase();
  var computerChoice = Math.random ();
  if (computerChoice < 0.33){
    computerChoice = "rock";
  } else if (computerChoice > 0.33 && computerChoice <=0.60){
    computerChoice = "paper";
  }
  else {
    computerChoice = "scissors";
  }
  var game = function (user,computer){
    if (user === computer){
      alert ("It's a draw!");
    }
    else if (user === "PAPER"){
      if (computer === "scissors"){
        alert ("Sorry, computer wins!");
      }
      else {
        alert ("You win!");
      }
    }
    else if (user === "ROCK"){
      if (computer === "paper"){
        alert ("Sorry, computer wins");
      }
      else {
        alert ("You win");
      }
    }
    else if (user === "SCISSORS") {
      if (computer === "rock"){
        alert ("Sorry, computer wins");
      }
      else {
        alert ("You win!");
      }
    }
    else {
      alert ("Please enter a valid choice.")
    }
  };
  game (choiceUpper, computerChoice);
}
