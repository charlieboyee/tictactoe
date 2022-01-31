let turn = true; //if true it is player1 turn
let player1Marker;
let player2Marker;
let cells = document.getElementsByClassName('cells');
let modal = document.getElementsByClassName('modal');
modal[0].style.display = 'block';

let startGameButton = document.getElementById('startGameButton');
startGameButton.addEventListener('click', () => {
	if (document.getElementById('x').checked) {
		player1Marker = 'X';
		player2Marker = 'O';
	}
	if (document.getElementById('o').checked) {
		player1Marker = 'O';
		player2Marker = 'X';
	}
	modal[0].style.display = 'none';
});


let winConditions = [
    
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    [1,4,7],

]

const checkBoard = () =>{
    console.log('checking')
    for (condition of winConditions){
        let a = condition[0]
        let b = condition[1]
        let c  =condition[2]
        if (cells[a].innerText== '' ||cells[b].innerText ==''||cells[c].innerText==''){
            console.log('Game still going')
            continue
        }
       if(cells[a].innerText ==cells[b].innerText &&cells[b].innerText ==cells[c].innerText&&cells[a].innerText == cells[a].innerText){
           console.log('winnder')
           if (cells[a].innerText === player1Marker){
               return console.log('Player 1 is the winner')
           }
           return console.log('Player 2 is the winner')
       }
    }    
}   


for (let i = 0; i<cells.length; i++){
    cells[i].addEventListener('click', () => {

        if (turn){
            cells[i].innerText = player1Marker
            turn = false
        } else if(!turn){
            cells[i].innerText = player2Marker
            turn = true
        }
        checkBoard()
        
    })
   
    
}
