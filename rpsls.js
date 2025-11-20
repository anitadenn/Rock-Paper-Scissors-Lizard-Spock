
const choices = ['rock', 'paper', 'scissors','lizard','spock'];
const resultDisplay = document.getElementById('resultDisplay');
const computerChoiceDisplay = document.getElementById('computerChoiceDisplay');
const playerChoiceDisplay = document.getElementById('playerChoiceDisplay');
const verdict = document.getElementById('verdict');

// p > r > l > sp > s > l > p > sp > r > s



function playGame(playerChoice){

    let ChoiceIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[ChoiceIndex];

    playerChoiceDisplay.textContent = `Player: ${playerChoice}`
    computerChoiceDisplay.textContent = `Computer: ${computerChoice}`;
    

    if(playerChoice === computerChoice){
        resultDisplay.textContent = "It's a Tie!";
        resultDisplay.style.color = "orange";
        verdict.textContent = "";
    }
    else if(playerChoice === 'rock'){
        switch(computerChoice){
            case "paper":
                resultDisplay.textContent = 'You lose!';
                resultDisplay.style.color = "red";
                verdict.textContent = "paper covers rock!";
                break
            case "scissors":
                resultDisplay.textContent = 'You win!';
                resultDisplay.style.color = 'green';
                verdict.textContent = "rock crushes scissors!";
                break
            case "lizard":
                resultDisplay.textContent = 'You win!';
                resultDisplay.style.color = 'green';
                verdict.textContent = "rock crushes lizard!";
                break
            case "spock":
                resultDisplay.textContent = 'You lose!';
                resultDisplay.style.color = "red";
                verdict.textContent = "spock vaporizes rock!";
                break
        }
    }

    else if(playerChoice === 'paper'){
        switch(computerChoice){
            case "rock":
                resultDisplay.textContent = 'You win!';
                resultDisplay.style.color = 'green';
                verdict.textContent = "paper covers rock!";
                break
            case "scissors":
                resultDisplay.textContent = 'You lose!';
                resultDisplay.style.color = "red";
                verdict.textContent = "scissors cuts paper!";
                break
            case "lizard":
                resultDisplay.textContent = 'You lose!';
                resultDisplay.style.color = "red";
                verdict.textContent = "lizard eats paper!";
                break
            case "spock":
                resultDisplay.textContent = 'You win!';
                resultDisplay.style.color = 'green';
                verdict.textContent = "paper disproves spock!";
                break
        }
    }

    else if(playerChoice === 'scissors'){
        switch(computerChoice){
            case "paper":
                resultDisplay.textContent = 'You win!';
                resultDisplay.style.color = 'green';
                verdict.textContent = "scissors cuts paper!";
                break
            case "rock":
                resultDisplay.textContent = 'You lose!';
                resultDisplay.style.color = "red";
                verdict.textContent = "rock crushes scissors!";
                break
            case "lizard":
                resultDisplay.textContent = 'You win!';
                resultDisplay.style.color = 'green';
                verdict.textContent = "Scissors decapitates lizard!";
                break
            case "spock":
                resultDisplay.textContent = 'You lose!';
                resultDisplay.style.color = "red";
                verdict.textContent = "spock smashes scissors!";
                break
        }
    }

    else if(playerChoice === 'lizard'){
        switch(computerChoice){
            case "paper":
                resultDisplay.textContent = 'You win!';
                resultDisplay.style.color = 'green';
                verdict.textContent = "lizard eats paper!";
                break
            case "scissors":
                resultDisplay.textContent = 'You lose!';
                resultDisplay.style.color = "red";
                verdict.textContent = "scissors decapitates lizard!";
                break
            case "rock":
                resultDisplay.textContent = 'You lose!';
                resultDisplay.style.color = "red";
                verdict.textContent = "rock crushes lizard!";
                break
            case "spock":
                resultDisplay.textContent = 'You win!';
                resultDisplay.style.color = 'green';
                verdict.textContent = "lizard poisons spock!";
                break
        }
    }

    else if(playerChoice === 'spock'){
        switch(computerChoice){
            case "paper":
                resultDisplay.textContent = 'You lose!';
                resultDisplay.style.color = "red";
                verdict.textContent = "paper disproves spock!";
                break
            case "scissors":
                resultDisplay.textContent = 'You win!';
                resultDisplay.style.color = 'green';
                verdict.textContent = "spock smashes scissors!";
                break
            case "lizard":
                resultDisplay.textContent = 'You lose!';
                resultDisplay.style.color = "red";
                verdict.textContent = "lizard poisons spock!";
                break
            case "rock":
                resultDisplay.textContent = 'You win!';
                resultDisplay.style.color = 'green';
                verdict.textContent = "spock vaporizes rock!";
                break
        }
    }
}








