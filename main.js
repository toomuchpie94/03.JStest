//Starts game
function game(){
    let player1Score = 0;
    let player2Score = 0;
    let keepPlaying = 'y';
    while (keepPlaying == 'y'){
        let player1 = prompt("player1 choose");
        let player2 = prompt("player2 choose")
        let winner = playRound(player1, player2);
        if (winner == 1){
            player1Score += 1;
        } else if (winner == 2){
            player2Score += 1;
        }
        keepPlaying = prompt("Player1: " + player1Score + "\nPlayer2: " + player2Score + "\nKeep playing? (y/n)");
    }
    alert("Thanks for playing!")
}

//Function determines winner. Returns 0 if tie, 1 if player 1 wins, and 2 if player 2 wins
function playRound(player1, player2) {
    if (player1 == player2){
        return 0;
    } else {
        if (player1 == "rock"){
            if (player2 == "paper"){
                return 2;
            } else {
                return 1;
            }
        } else if (player1 == "paper"){
            if (player2 == "scissors"){
                return 2;
            } else {
                return 1;
            }
        } else {
            if (player2 == "rock"){
                return 2;
            } else {
                return 1;
            }
        }
    }
}

game()