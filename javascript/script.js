const clicTitle = document.querySelector('h1');
const eleSquares = document.querySelector('.squares');

for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        eleSquares.innerHTML += `<div class="sq fizzbull">FizzBull</div>`;

    } else if (i % 3 == 0) {
        eleSquares.innerHTML += `<div class="sq fizz">Fizz</div>`;
        
    } else if (i % 5 == 0) {
        eleSquares.innerHTML += `<div class="sq bull">Bull</div>`;
        
    } else {
        eleSquares.innerHTML += `<div class="sq">${i}</div>`;

    }
}