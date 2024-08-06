console.log('welcome to Tic Tac Toe');
let ting = new Audio('ting.mp3');
let turn = "X";
let isgameOver = false;
let reset = document.querySelector('.reset');


const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

// Function to check for a Win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext')
    let Wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    Wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + ' Won';
            isgameOver = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px';



        }

    })

}


// Game Logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            ting.play();
            checkWin();
            if (!isgameOver) {
                document.querySelectorAll(".info")[0].innerText = 'Turn for ' + turn;
            }
        }
    })
})
// Add onclick listener to reset button
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px';

    });
    turn = 'X';
    isgameOver = false
    document.querySelectorAll(".info")[0].innerText = 'Turn for ' + turn;

})


