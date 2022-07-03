console.log("Rock, Paper, Scrissors game");

var gamePosibilities = ["Rock", "Paper", "Scissors"];



function play() {
    var computerChoice = Math.floor(Math.random() * gamePosibilities.length);
    console.log("Computer Choice:" + gamePosibilities[computerChoice]);

    var userChoice = Math.floor(Math.random() * gamePosibilities.length);
    console.log("User Choice:" + gamePosibilities[userChoice]);

    //Play function logic//

    if (gamePosibilities[computerChoice] === "Rock") {
        switch (gamePosibilities[userChoice]) {
            case "Rock":
                console.log("Draw!");
                break;
            case "Paper":
                console.log("User Wins!");
                break;
            default:
                console.log("Computer Wins!");
                break;
        }

    } else if (gamePosibilities[computerChoice] === "Paper") {
        switch (gamePosibilities[userChoice]) {
            case "Rock":
                console.log("Computer Wins!");
                break;
            case "Paper":
                console.log("Draw!");
                break;
            default:
                console.log("User Wins!");
                break;
        }

    } else {
        switch (gamePosibilities[userChoice]) {
            case "Rock":
                console.log("User Wins!");
                break;
            case "Paper":
                console.log("Computer Wins!");
                break;
            default:
                console.log("Draw!");
                break;
        }
    }

}


