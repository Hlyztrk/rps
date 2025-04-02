let prompt = require("prompt-sync")();
const ansi = require('ansi-colors');

class Player{

    constructor(score){
        this.score = score
    }

    makeChoice(choice){
        this.choice = choice
    }
    
    getChoice() {
        return this.choice
      }

    addScore(){
        this.score++
    }

}

class HumanPlayer extends Player{
    constructor(score){
        super(score)
    }

}

class ComputerPlayer extends Player{
    constructor(score){
        super(score)
    }

    makeRandomChoice(choices) {
            this.choice=choices[Math.floor((Math.random() * 3))];
      }

}
class Game{

    playGame(humanPlayer, computerPlayer){
        
        const choices = ["rock", "paper", "scissors"]
        let userChoice = prompt("Please choose one of these options to start the game : rock, paper or scissors ").toLowerCase()
        humanPlayer.makeChoice(userChoice)
        computerPlayer.makeRandomChoice(choices)
        let humanChoice = humanPlayer.getChoice()
        let computerChoice = computerPlayer.getChoice()
        console.log(`Human choice : ${humanChoice}`)
        console.log(`Computer choice: ${computerChoice}`)
        console.log(this.getWinner(humanPlayer, computerPlayer))
        console.log(`Human score: ${humanPlayer.score}`)
        console.log(`Computer score: ${computerPlayer.score}`)
        }


    getWinner(humanPlayer, computerPlayer){
        if(humanPlayer.getChoice() == 'rock' && computerPlayer.getChoice() === 'scissors'
        || humanPlayer.getChoice() === 'paper' && computerPlayer.getChoice() === 'rock'
        || humanPlayer.getChoice() === 'scissors' && computerPlayer.getChoice() === 'paper'){
            humanPlayer.addScore()
            return `${humanPlayer.getChoice()} beats ${computerPlayer.getChoice()}`
        }else if((computerPlayer.getChoice() === 'rock' && humanPlayer.getChoice() === 'scissors'
        || computerPlayer.getChoice() === 'paper' && humanPlayer.getChoice() === 'rock'
        || computerPlayer.getChoice() === 'scissors' && humanPlayer.getChoice() === 'paper')){
            computerPlayer.addScore()
            return `${computerPlayer.getChoice()} beats ${humanPlayer.getChoice()}`
        }else if(humanPlayer.getChoice() === computerPlayer.getChoice()){
            return "It's a tie"
        }  
    }
}

let human = new HumanPlayer(0)
let computer = new ComputerPlayer(0)
let game = new Game()
let continueGame = true

let userInput = prompt("Please enter your name? ")
console.log(`Hello ${userInput}, Welcome to ROCK-PAPER-SCISSORS`)
while(continueGame){
    game.playGame(human,computer)
    let continuePlaying = prompt("Would you like to continue playing, press [Y] for yes, [N] for no: ").toLowerCase()
    if(continuePlaying === "n"){
        continueGame = false
        if(human.score > computer.score){
            console.log(ansi.bgGreen("You win the game!"))
        }else if(computer.score > human.score){
            console.log(ansi.bgRed("Computer wins the game!"))
        }else{
            console.log(ansi.bgYellow("It's a tie!"))
        }
    } 
 }   
