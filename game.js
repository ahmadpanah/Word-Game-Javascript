var height = 6 // Number of Guess
var width = 5 // Number of lenght of word

var row = 0; // current Guess
var col = 0; // current letter for that attempt

var gameOver = false;
var word = "REACT"

window.onload = function() {
    intialize();
}

function intialize() {
    // Create Game Board
    for (let r=0; r < height; r++) {
        for (let c=0; c < width; c++) {
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        }
    }

    document.addEventListener("keyup" , (e) => {
        if (gameOver) return;

        if ("KeyA" <= e.code && e.code <= "KeyZ") {
            if (col < width) {
                let currTile = document.getElementById(row.toString() + '-' + col.toString())
                if (currTile.innerText == "") {
                    currTile.innerText = e.code[3]
                    col +=1;
                }
            }
        }

        else if (e.code == "Backspace") {
            if ( 0 < col && col <= width) {
                col -=1
            }
            let currTile = document.getElementById(row.toString() + '-' + col.toString())
            currTile.innerText = ""
        }

        else if (e.code == "Enter") {
            update()
            row +=1
            col = 0
        }

        if (!gameOver && row == height) {
            gameOver = true
            document.getElementById("answer").innerText = word
        }
    })
}

function update() {
    let correct = 0
    for (let c=0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString())
        let letter = currTile.innerText

        // Correct Place Correct Letter
        if (word[c] == letter) {
            currTile.classList.add("correct")
            correct +=1
        }
        // Correct Letter but Wrong Place
        else if (word.includes(letter)) {
            currTile.classList.add("present")
        }
        // Wrong Letter
        else {
            currTile.classList.add("absent")
        }
        if (correct == width) {
        gameOver = true
    }
    
    }
}


