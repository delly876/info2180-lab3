"use strict";

document.addEventListener('DOMContentLoaded', function(){
    
    let squares = document.querySelectorAll("#board div");
    console.log(squares);

    squares.forEach((elem) => {
            elem.classList.add('square');
        });

});


