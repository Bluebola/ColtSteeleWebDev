// A better solution would be to use an object that contains all of the properties of each html element that is used by a player. 
// So p1 is an object containing all of the buttons, text, and scores of player 1 and so on and so forth.
// Refer to each property using the dot notation and create a general function whos parameters can be used by each player individually.

const button1 = document.querySelector('#oneAdd');
const button2 = document.querySelector('#twoAdd');
const button3 = document.querySelector('#reset');
const firstNumber = document.querySelector('#firstNumber');
const secondNumber = document.querySelector('#secondNumber');
const selector = document.querySelector('#number');
const h3 = document.querySelector('h3');
const p = document.querySelector('p');
let winningScore = 1
let gameOver = false
let score1 = 0
let score2 = 0 //a variable declared globally can be updated anywhere.


button1.addEventListener("click", function (e) {
    if (score1 !== winningScore && score2 !== winningScore) {
        score1 += 1
        firstNumber.innerText = `${score1}`;
        if (score1 === score2 && score1 === winningScore - 1){ //to allow deuces to occur
            winningScore = winningScore + 1
        } 
        if (score1 === winningScore) { //use nested if statement for immediate display of colors.
            firstNumber.classList.add('winner'); 
            secondNumber.classList.add('loser');
            button1.disabled = true;
            button2.disabled = true;
        }
    }
});

button2.addEventListener("click", function (e) {

    if (score2 !== winningScore && score1 !== winningScore) {
        score2 += 1
        secondNumber.innerText = `${score2}`;
        if (score1 === score2 && score1 === winningScore - 1){
            winningScore = winningScore + 1
        } 
        if (score2 === winningScore) {
            firstNumber.classList.add('loser'); 
            secondNumber.classList.add("winner");
            button2.disabled = true;
            button1.disabled = true;
        }
    }

});

function reset() {
    score1 = 0 //when assigning variables you must use a single equal sign. Not comparison!
    score2 = 0
    let numbers = [firstNumber, secondNumber]
    for (let n of numbers) { //can use a for of loop with an array to remove the need to retype each variable repeatedly.
    n.innerText = `0`;
    n.classList.remove('loser' , 'winner');
    }
    gameOver = false;
    button1.disabled= false;
    button2.disabled= false;
    winningScore = parseInt(selector.value) //to ensure any previous deuce no longer changes the winning score.
};

button3.addEventListener("click", reset);

selector.addEventListener("change", function (e) {
    winningScore = parseInt(selector.value) //Have to parseInt the value, since by default the attribute value of the option is always a string 
    reset();
}) //A variable declared globally can be updated anywhere.


