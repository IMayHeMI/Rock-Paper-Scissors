const buttons = document.querySelectorAll("button");

let humanChoice = "";

buttons.forEach(button => {
    button.addEventListener("click", event => {
        humanChoice = event.target.id;
        const compChoice = getComputerChoice();
        playRound(humanChoice, compChoice);
    });
});

let humanScore = 0;

let computerScore = 0;

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
            console.log(`Draw! Both have chosen ${humanChoice}`);
        else if (computerChoice === "paper")
            {
            computerScore++;
            console.log("You lose! Paper beats Rock")
            console.log(`Your score: ${humanScore}, computer's score: ${computerScore}.`)
            }
        else
            {
            humanScore++;
            console.log("You win! Rock beats Scissors")
            console.log(`Your score: ${humanScore}, computer's score: ${computerScore}.`)
            }
    }
    else if (humanChoice === "paper")
    {
        if (computerChoice === "paper")
            console.log(`Draw! Both have chosen ${humanChoice}`);
        else if (computerChoice === "scissors")
            {
            computerScore++;
            console.log("You lose! Scissors beat Paper")
            console.log(`Your score: ${humanScore}, computer's score: ${computerScore}.`)
            }
        else
            {
            humanScore++;
            console.log("You win! Paper beats Rock")
            console.log(`Your score: ${humanScore}, computer's score: ${computerScore}.`)
            }
    }
    else if (humanChoice === "scissors")
    {
        if (computerChoice === "scissors")
            console.log(`Draw! Both have chosen ${humanChoice}`);
        else if (computerChoice === "rock")
            {
            computerScore++;
            console.log("You lose! Rock beats Scissors")
            console.log(`Your score: ${humanScore}, computer's score: ${computerScore}.`)
            }
        else
            {
            humanScore++;
            console.log("You win! Scissors beat Paper")
            console.log(`Your score: ${humanScore}, computer's score: ${computerScore}.`)
            }
    }
};



