"use strict";

document.addEventListener('DOMContentLoaded', function(){
    
    let squares = document.querySelectorAll("#board div");
    console.log(squares);

    squares.forEach((elem) => {
        elem.classList.add('square');
        console.log("Style applied.");
    });

    squares.forEach((elem) => {
        elem.addEventListener('mouseover', (e) => {
            e.target.classList.add('hover');
        });

        elem.addEventListener('mouseout', (e) => {
            e.target.classList.remove('hover');
        });
    });

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    var winner = "";
    const winnerX = "Congratulatons! X is the Winner!";
    const winnerO = "Congratulatons! O is the Winner!";

    let gameState = ["","","","","","","","",""];
    
    insertX();
    winnerDeclaration();
    
    function winnerDeclaration(){
        for (let p = 0; p <= 7; p++) {
            let roundWon = false;
            const winCondition = winningConditions[p];
            let a = gameState[winCondition[0]];
            let b = gameState[winCondition[1]];
            let c = gameState[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                if (a === 'X'){
                    winner = winnerX;
                }
                else{
                    winner = winnerO;
                }
            break
            }
            if (roundWon){
                document.getElementById("status").target.innerHTML = winner;
            }
        }
    }
    
    function insertX(){
        for (var x in squares){
            if (squares[x].innerHTML === ""){
                //squares[x].classList.add('X');
                squares[x].addEventListener('click', (e) => {
                    e.target.innerHTML = "X";
                    e.target.classList.add('X');
                    e.target.classList.remove('O');
                    gameState[x] = e.target.innerHTML;
                    insertO();
                })
            

    }}};

    function insertO(){
        for (var x in squares){
            if (squares[x].innerHTML === ""){
                //squares[x].classList.add('O');
                squares[x].addEventListener('click', (e) => {
                    e.target.innerHTML = "O";
                    e.target.classList.add('O');
                    gameState[x] = e.target.innerHTML;
                    insertX();                    
                })
            

    }}};

    function error1(){
        if (squares[x].innerHTML === "X" || squares[x].innerHTML === "O"){
            squares[x].addEventListener('click', (e) => {
                alert("Already selected! Choose another square.");
                console.log("Error 1 alert sent");
            })
        }
    }  

});
    




