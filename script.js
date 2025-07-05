const buttons = document.querySelectorAll("button");
const result = document.querySelector(".result");
const score = document.querySelector(".score");
const announce = document.querySelector(".announce");

let userScore = 0;
let computerScore = 0;
let humanChoice = "";

buttons.forEach(button => {
    button.addEventListener("click", event => {
        humanChoice = event.target.id;
        const compChoice = getComputerChoice();        
        if(userScore < 5 && computerScore < 5)
            playRound(humanChoice, compChoice);  
        checkForWinner();           
    });
});

function getComputerChoice()
{   
    let n = Math.round(Math.random() * 100);
    let compChoice;

    if (n <= 33)
        compChoice = "rock";
    else if (n >= 34 && n <= 66)
        compChoice = "paper";
    else 
        compChoice = "scissors";

    return compChoice;
}        

function playRound(humanChoice, computerChoice)
{
    if (humanChoice === "rock")
    {
        if (computerChoice === "rock")
            result.textContent = `RESULT: Draw! Both have chosen ${humanChoice}`;
        else if (computerChoice === "paper")
            {
            computerScore++;
            result.textContent = "RESULT: You lose! Paper beats rock";
            score.textContent = `SCORE: You - ${userScore} : ${computerScore} - Computer`;
            }
        else
            {
            userScore++;
            result.textContent = "RESULT: You win! Rock beats scissors";
            score.textContent = `SCORE: You - ${userScore} : ${computerScore} - Computer`;
            }
    }
    else if (humanChoice === "paper")
    {
        if (computerChoice === "paper")
            result.textContent = `RESULT: Draw! Both have chosen ${humanChoice}`;
        else if (computerChoice === "scissors")
            {
            computerScore++;
            result.textContent = "RESULT: You lose! Scissors beat paper";
            score.textContent = `SCORE: You - ${userScore} : ${computerScore} - Computer`;
            }
        else
            {
            userScore++;
            result.textContent = "RESULT: You win! Paper beats rock";
            score.textContent = `SCORE: You - ${userScore} : ${computerScore} - Computer`;
            }
    }
    else if (humanChoice === "scissors")
    {
        if (computerChoice === "scissors")
            result.textContent = `RESULT: Draw! Both have chosen ${humanChoice}`;
        else if (computerChoice === "rock")
            {
            computerScore++;
            result.textContent = "RESULT: You lose! Rock beats scissors";
            score.textContent = `SCORE: You - ${userScore} : ${computerScore} - Computer`;
            }
        else
            {
            userScore++;
            result.textContent = "RESULT: You win! Scissors beat paper";
            score.textContent = `SCORE: You - ${userScore} : ${computerScore} - Computer`;
            }
    }
};

function checkForWinner(){
    if(userScore == 5){announce.textContent = "Winner, winner, chicken dinner! Congrats!"}
    else if(computerScore == 5){announce.textContent = "You lost! Skynet is coming..."}
    else return;
}



