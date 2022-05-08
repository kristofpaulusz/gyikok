window.addEventListener("load", init)

let userScore = 0;
let computerScore = 0;

function $(elem) {
    return document.querySelectorAll(elem)
}
function ID(elem) {
    return document.getElementById(elem);
}

function getComputerChoice() {
    const choices = ['o', 'b', 'y'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function game(userChoice) {
    const computerChoice = getComputerChoice(); 
    switch(userChoice + computerChoice) {
        case "ob":
        case "by":
        case "yo":
            win(userChoice, computerChoice);
            break;
        case "bo":
        case "yb":
        case "oy":
            lose(userChoice, computerChoice);
            break;
        case "oo":
        case "bb":
        case "yy":
            draw(userChoice);
            break;

    }
}

function convertToWord(letter) {
    if (letter === "o") return '<span style="color: orange;">the Orange Lizards<span/>';
    if (letter === "b") return '<span style="color: rgb(113, 156, 236);">the Blue Lizards<span/>';
    return '<span style="color: yellow;">the Yellow Lizards<span/>';
}

function win(userChoice, computerChoice) {
    userScore++;
    ID("user-score").innerHTML = userScore;
    $(".result")[0].innerHTML = `${convertToWord(userChoice)} <span style="color: white;">beat<span/> ${convertToWord(computerChoice)}. <span style="color: white;">You win!<span/>`;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    ID("computer-score").innerHTML = computerScore;
    $(".result")[0].innerHTML = `${convertToWord(computerChoice)} <span style="color: white;">beat<span/> ${convertToWord(userChoice)}. <span style="color: white;">You Lose!<span/>`;
}

function draw(userChoice) {
    $(".result")[0].innerHTML = "It's a draw!"
}
function glow(id) {
    ID(id).classList.add('white-glow');
    // setTimeout(function() { document.getElementById(userChoice).classList.remove('white-glow') }, 500)
}
function init() {
    let buttons = $(".choice");
    for (let index = 0; index < buttons.length; index++) {
        buttons[index].addEventListener("click", function(){
            game(this.id)
        })
    }
    for (let index = 0; index < buttons.length; index++) {
        buttons[index].addEventListener("mouseover", function(){
            glow(this.id)
        })
    }
    for (let index = 0; index < buttons.length; index++) {
        buttons[index].addEventListener("mouseout", function(){
            ID(this.id).classList.remove("white-glow");
        })
    }
}
