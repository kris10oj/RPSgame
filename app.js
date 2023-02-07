const game = ()=> {
    let pScore = 0;
    let cScore = 0;


    //start the game 
    const startGame = () => {
        const playBtn = document.querySelector(`.intro button`);
        const introScreen = document.querySelector(`.intro`);
        const match = document.querySelector(`.match`);

        playBtn.addEventListener(`click`, () => {
            introScreen.classList.add(`.fadeOut`);
            match.classList.add("fadeIn");
        });
    };

    //play match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        //computer options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener("click", funtion() {
                //get computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                //call compareHands function 
                compareHands(this.textContent, computerChoice);


                //update images 
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
            });
        });
    };

    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }



    // find winner
    const compareHands = (playerChoice, computerChoice) => {
        //Update winner text
        const winner = document.querySelector(".winner");
        //checking for tie 
        if(playerChoice === computerChoice){
            winner.textContent = 'it is a tie';
            return;
        } 
        //check for rock 
        if (playerChoice === 'rock'){
            if (computerChoice === 'scissors'){
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
         //check for paper
        if (playerChoice === 'paper'){
            if (computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
        //check for scissors
        if (playerChoice === 'scissors'){
            if (computerChoice === 'rock'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
    }


    //call all inner funtions
    startGame();
    playMatch();
};

//call game funtion
game();