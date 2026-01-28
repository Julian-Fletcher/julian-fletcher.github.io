// Variables
let playerAnswer = null;
let incorrect = 0;
let correct = 0;
let gamemode = null;
let number = null;

let startBase = null;   // Base to start in
let endBase = null;     // Base to convert to

// DOM elements
const label = document.getElementById("number");  // P element number will be shown in

const menu = document.getElementById("menu"); // Main menu div
const game = document.getElementById("game");     // Game div

const form = document.getElementById("inputForm");
const userInput = document.getElementById("userAnswer");

const correctElement = document.getElementById("correct");
const incorrectElement = document.getElementById("incorrect");

const modeElement = document.getElementById("mode");


// Handles user submissions
form.addEventListener("submit", function(event) {
    event.preventDefault();

    playerAnswer = userInput.value;
    // Function to handle user input
    checkAnswer();

    // Clear answer box
    userInput.value = "";
})

// Compares user answer to correct answer by converting both to base 10 and comparing
function checkAnswer(){

    // Convert user and correct answer to base 10
    let correctAnswer = parseInt(number, startBase);
    let input = parseInt(playerAnswer, endBase);

    // Comparisions
    if(correctAnswer === input){
        correct++;
        console.log(correct);
        correctElement.innerHTML = 'Correct: ' +  String(correct);
    }
    else{
        incorrect++;
        console.log(incorrect);
        incorrectElement.innerHTML = 'Incorrect: ' + String(incorrect);
    }
    // Get new number
    changeNum(startBase);
}


// Sets the gamemode parameters
function setMode(mode, startbase, endbase){
    startBase = startbase;
    endBase = endbase;
    gamemode = mode;

    // Set gamemode element text
    switch(mode){
        case 0:
            modeElement.innerHTML = "Mode: Binary to Hexadecimal";
            break;
        case 1:
            modeElement.innerHTML = "Mode: Binary to Decimal";
            break;
        case 2:
            modeElement.innerHTML = "Mode: Hexadecimal to Binary";
            break;
        case 3:
            modeElement.innerHTML = "Mode: Hexadecimal to Decimal";
            break;
        case 4:
            modeElement.innerHTML = "Mode: Decimal to Hexadecimal";
            break;
        case 5:
            modeElement.innerHTML = "Mode: Decimal to Binary";
            break;
    }
    startGame();
}


// Game Function
function startGame(){
    // Ensure a gamemode has been selected
    if(startBase === null){
        window.alert('No gamemode selected');
        return;
    }
       // Hide the menu div and display the game div
    menu.style.display = "none";
    game.style.display = "block";    
    changeNum(startBase);
}



// Generates a random number in one of the three bases and displays it
function changeNum(base){
    
    // For base 10, just display the number
    if(base === 10){
        number = Math.floor(Math.random() * 256);
        label.innerHTML = String(number);
    }


    else{
        number = Math.floor(Math.random() * 256);
        number = (number.toString(base)).toUpperCase(); // Convert to base and make sure hex will be uppercase
        
        // Ensures hex string is always 2 characters
        if(base === 16 && number.length === 1){
            let str = '0';
            str = str.concat(number);
            number = str;
        }


        // This ensures the binary string is always 8 characters
        if(base === 2 && number.length < 8){
            let add = 8 - number.length;
            console.log('Add: ' + add);
            let str = '0';
            // Add zeros to the string 'str'
            for(let i = 1; i < add; i++){
                str = str.concat('0');
            }

            // Add the zeros to the beginning of the number
            str = str.concat(number);
            // Set the numebr equal to the string with leading zeros
            number = str;
        }

        // Update label with number and its base
        const subscript = document.createElement("sub");
        subscript.textContent = String(base);
		subscript.style.fontSize = "1rem";

        label.innerHTML = String(number);

        label.appendChild(subscript);

    }
}

function returnToMenu(){
    menu.style.display = "flex";
    game.style.display = "none"; 
    correct = 0;
    incorrect = 0;
    startBase = null;
    endBase = null;
}