'use strict';

let number = Math.trunc(Math.random() * 20 ) + 1;
let score = document.querySelector('.score').textContent = 10;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if(!guess) {
        document.querySelector('.message').textContent = 'Input a Number! ❌';
    } else if(guess === number) {
        document.querySelector('.message').textContent = 'Correct Number! 🎉';
        document.querySelector('.number').textContent = number;

        document.querySelector('body').style.backgroundColor = 'teal';
        document.querySelector('.number').style.width = '30rem';

        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if(guess > number) {
        if(score > 1) {
            document.querySelector('.message').textContent = 'Too high! 📉';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'Game Over! ➰';
            document.querySelector('.score').textContent = score;
        }
    } else if(guess < number) {
        if(score > 1) {
            document.querySelector('.message').textContent = 'Too high! 📉';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'Game Over! ➰';
            document.querySelector('.score').textContent = score;
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = document.querySelector('.score').textContent = 10;
    number = Math.trunc(Math.random() * 20 ) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value= '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
});