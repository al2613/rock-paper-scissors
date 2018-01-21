function promptMe (){
  var playerChoice = prompt ("Enter your Choice: rock, paper, scissors")
  var choiceUpper = playerChoice.toUpperCase();
  var computerChoice = Math.random ();
    console.log (computerChoice);
  if (computerChoice < 0.33){
    computerChoice = "ROCK";
  } else if (computerChoice > 0.33 && computerChoice <=0.60){
    computerChoice = "PAPER";
  }
  else {
    computerChoice = "SCISSORS";
  }
  var game = function (user,computer){
    if (user === computer){
      alert ("It's a draw!");
    }
    else if (user === "PAPER"){
      if (computer === "SCISSORS"){
        alert ("Sorry, computer wins!");
      }
      else {
        alert ("You win!");
      }
    }
    else if (user === "ROCK"){
      if (computer === "PAPER"){
        alert ("Sorry, computer wins");
      }
      else {
        alert ("You win");
      }
    }
    else if (user === "SCISSORS") {
      if (computer === "ROCK"){
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
