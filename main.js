//Function determines winner. Returns 0 if tie, 1 if player 1 wins, and 2 if player 2 wins
function playRound(player1, player2) {
    let winner = 0;
    
    if (player1 == player2){
        winner = 0;
    } else {
        if (player1 == "rock"){
            if (player2 == "paper"){
                winner = 2;
            } else {
                winner = 1;
            }
        } else if (player1 == "paper"){
            if (player2 == "scissors"){
                winner = 2;
            } else {
                winner = 1;
            }
        } else {
            if (player2 == "rock"){
                winner = 2;
            } else {
                winner = 1;
            }
        }
    }

    return [player1, player2, winner];
}

//Produces random choice for AI opponent
function aiChoice() {
    let rps = ["rock", "paper", "scissors"];
    return rps[Math.floor(Math.random()*3)];
}

//DOM for buttons
function AIGameDOM() {
    let rps = ["rock", "paper", "scissors"];

    const content = document.querySelector('#content');
    
    //box for buttons
    const gameContainer = document.createElement('div');
    gameContainer.id = "gamecontainer";
    content.appendChild(gameContainer);

    //buttons
    function createButton(choice){
        const button = document.createElement('button');
        button.id = choice;
        button.textContent = choice;
        button.className = 'choicebutton'
        button.addEventListener('click', () => {
            showWinner(choice, aiChoice());
        });
        gameContainer.appendChild(button);
    }
    rps.forEach(createButton);

    
    //  once clicked, buttons will disappear and be replaced by winner of game and display computer choice
    function showWinner(player1, player2) {
        const winnerContainer = document.createElement('div');
        winnerContainer.id = "winnercontainer"

        let winner = playRound(player1, player2);
        const player1Choice = document.createElement('h2');
        player1Choice.textContent = "Player 1 Chose: " + winner[0];
        const player2Choice = document.createElement('h2');
        player2Choice.textContent = "Player 2 Chose: " + winner[1];
        const winnerText = document.createElement('h1');
        winnerText.textContent = "WINNER IS PLAYER " + winner[2];

        const restartButton = document.createElement('button');
        restartButton.id = "restartbutton"
        restartButton.textContent = 'RESTART';
        restartButton.addEventListener('click', () => {
            content.replaceChild(gameContainer, winnerContainer);
        });

        winnerContainer.append(player1Choice, player2Choice, winnerText, restartButton);
        content.replaceChild(winnerContainer, gameContainer);

    }
}

AIGameDOM()