function playNumberGuessingGame() {
    let playAgain = true; // to play the game

    while (playAgain) {
        let num = Math.floor(Math.random() * 100);
        console.log(num);

        let attempts = 0;
        let maxAttempts = 7;

        while (attempts < maxAttempts) {
            let player = prompt("Guess a number between 0-100");

            if (isNaN(player) || player < 0 || player > 100) {
                alert("Please enter a valid number between 0-100");
                continue;
            }

            if (player == num) {
                alert("Correct!");
                break;
            } else if (player < num) {
                alert("Too low. You have " + (maxAttempts - attempts) + " attempts left.");
            } else if (player > num) {
                alert("Too high. You have " + (maxAttempts - attempts) + " attempts left.");
            }

            attempts++;
        }

        if (attempts === maxAttempts) {
            alert("Sorry, you've run out of attempts. The correct number was " + num);
        }

        // Ask the user if they want to play again
        let response = prompt("Do you want to play again? (yes/no)").toLowerCase();
        playAgain = response === 'yes';
    }

    alert("Thanks for playing!");
    return playAgain; //whether the user chose to play again or not.
}

// Call the function to start the game
let finalPlayAgainStatus = playNumberGuessingGame();
console.log(finalPlayAgainStatus);