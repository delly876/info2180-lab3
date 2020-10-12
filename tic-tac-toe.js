"use strict";

document.addEventListener('DOMContentLoaded', function(){
    
    let squares = document.querySelectorAll("#board div");
    console.log(squares);

    squares.forEach((elem) => {
        elem.classList.add('square');
        console.log("Style applied.");
    });

    let gameState = ["","","","","","","","",""];
    
    insertX();
    
    
    /*let fullcounter = 9;
    let restartx = 0;
    while (fullcounter !== 0){
        for (let x = 0; x < gameState.length; x++){
            if (gameState[x] !== ""){
                fullcounter --;
            }
            else if (fullcounter === 0){
                alert("No more possible selections, start new game.");
            }
            else{
                restartx++;
                if (restartx !== 0){
                    x = 0;
                }
            }
        }

    }*/


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
    




