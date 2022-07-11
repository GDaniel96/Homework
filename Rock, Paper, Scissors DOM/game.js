var userScore = 0;
var computerScore = 0;
var result = document.getElementById("winner");
var userScoreSpan = document.getElementById("user-score");
var computerScoreSpan = document.getElementById("computer-score");
var rockId = document.getElementById("rock");
var paperId = document.getElementById("paper");
var scissorsId = document.getElementById("scissors");

//Logic

function computerChoice() {
    var choices = ["Rock", "Paper", "Scissors"];
    var computerChoiceRandom = Math.floor(Math.random() * choices.length);
    return choices[computerChoiceRandom];
}

function game(userChoice) {
    var getComputerChoice = computerChoice();

    switch (userChoice + getComputerChoice) {
        case "rockScissors":
        case "paperRock":
        case "scissorsPaper":
            document.getElementById("winner").innerHTML = "Computer choice: " + getComputerChoice + ". User Wins!";
            userScore++;
            document.getElementById("user-score").innerHTML = userScore;
            break;
        case "rockPaper":
        case "scissorsRock":
        case "paperScissors":
            document.getElementById("winner").innerHTML = "Computer choice: " + getComputerChoice + ". Computer Wins!";
            computerScore++;
            document.getElementById("computer-score").innerHTML = computerScore;
            break;
        case "rockRock":
        case "paperPaper":
        case "scissorsScissors":
            document.getElementById("winner").innerHTML = "Computer choice: " + getComputerChoice + ". Draw!";
            console.log("computer choice =>" + getComputerChoice + " Draw!");
            break;
    }
}

//Buttons assignment.

function buttons() {
    rockId.addEventListener("click", function () {
        game("rock");
    });
    paperId.addEventListener("click", function () {
        game("paper");
    });

    scissorsId.addEventListener("click", function () {
        game("scissors");
    });
}

buttons();
