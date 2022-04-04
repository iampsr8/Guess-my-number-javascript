'use strict';
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent="Correct Number!🎉";
document.querySelector('.number').textContent=13;
document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);
*/

let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function lostGame(){
    document.querySelector('.message').textContent = 'You lost the game💥';
    document.querySelector('.score').textContent = '0';
    document.querySelector('body').style.backgroundColor='#ff4646';
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = 'Not a Number!🛑';
    }
    //player guesses correctly
    else if (guess === secret) {
        document.querySelector('.message').textContent = 'Correct Number!🎉';
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        document.querySelector('.number').textContent=secret;
        if (score > highScore) {
            highScore = score;
        }
        document.querySelector('.highscore').textContent = highScore;
    }
    else if (guess > secret) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too High!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            lostGame();
        }
    }
    else {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            lostGame();
        }
    }
});

//EventListening with again button
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value=null;
    secret = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').style.width='15rem';
});