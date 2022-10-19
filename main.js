let color = 'black';
let click = true;

function populateBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach(div => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`; //it will make X columns with each being 1 fraction of the size
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`; //it will make X rows with each being 1 fraction of the size

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', square);
    }
}

populateBoard(16)

function changeSize(input) {
    if(input >= 2 && input <= 100) {
        document.querySelector('.error').style.display = 'none'; //error message will be hidden if input is correct
        populateBoard(input);
    } else {
        document.querySelector('.error').style.display = 'flex'; //error message will appear
    }
}

function colorSquare() {
    if(click) { //only colors when user clicks
        if(color === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; //changes color to random
        } else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor (choice) { //changes color depending on which button user clicks
    color = choice;
}

function resetBoard() { //reset button, changes background to white again
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach(div => div.style.backgroundColor = 'white');
}

document.querySelector('.board').addEventListener('click', (e) => { //only coloring when user clicks inside board
            click = !click; //changes click to opposite of what is currently assigned (true, false)
            if(click) {
                document.querySelector('.mode').textContent = 'Mode: Coloring';
            } else {
                document.querySelector('.mode').textContent = 'Mode: Not Coloring';
            }
});

// document.querySelector('.board').addEventListener('click', (e) => { //only coloring when user clicks inside board
//     if(e.target.tagName != 'BUTTON') { //changing Mode text only if not clicking on button
//         click = !click;
//         if(click) {
//             document.querySelector('.mode').textContent = 'Mode: Coloring';
//         } else {
//             document.querySelector('.mode').textContent = 'Mode: Not Coloring';
//         }
//     }
// });