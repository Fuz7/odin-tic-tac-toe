let game = (function(){
    let gameboard = [['','',''],
                     ['','',''],
                     ['','','']]

    let turn = "X"


    let getGameboard = () => {
        return gameboard;
    }

    let getCell = (x,y) =>{
        cell = gameboard[x][y]
        return cell
    }

    let checkDraw = ()=>{
        for(let x = 0; x < 3; x++){
            for (let y = 0; y< 3; y++){
                if (getCell(x,y) === ""){
                    return false
                } 
            }   
        }
        turnDisplay.innerHTML = "It's a Draw!"
        return true

    }

    let checkWinner = (player) => {
        let playerLetter = player.getLetter()

        for (let i = 0;i < 3; i++){
            if (gameboard[i][0] === playerLetter
                && gameboard[i][1] === playerLetter
                && gameboard[i][2] === playerLetter ){

                turnDisplay.innerHTML = player.getName() + " wins"
                return true

            } else if(gameboard[0][i] === playerLetter
                      && gameboard[1][i] === playerLetter
                      && gameboard[2][i] === playerLetter){

                        turnDisplay.innerHTML = player.getName() + " wins"
                        return true
                      }
        }

        if(gameboard[0][0] === playerLetter 
           && gameboard[1][1] === playerLetter
           && gameboard[2][2] === playerLetter){


            turnDisplay.innerHTML = player.getName() + " wins"
            return true

           } else if (gameboard[0][2] === playerLetter  
                      && gameboard[1][1] === playerLetter
                      && gameboard[2][0] === playerLetter){

                        turnDisplay.innerHTML = player.getName() + " wins"
                        return true
                      }

        checkDraw()
        }


    let getTurn = () => {return turn;}
    

    let changeTurn = () => {
        if(turn === player1.getLetter()){
            turn = player2.getLetter()
        }else if(turn === player2.getLetter()){
            turn = player1.getLetter()
        }
    }

    let restartGame = () => {
        turn = "X"
        gameboard = [['','',''],
                   ['','',''],
                    ['','','']]
    }

    return { getGameboard, getCell, checkWinner, changeTurn, getTurn, restartGame }

})()    


let player = function(name,letter){
    
    board = game.getGameboard()

    const getLetter = () => {
        return letter
    }

    const getName = () => {
        return name
    }

    const fillBoard = (x,y) => { 
        board[x][y] = letter;
        console.log(letter)
    }
    
    const resetBoard = () => {
        board = game.getGameboard()
    }

    return { getLetter, getName, fillBoard, resetBoard }
}

player1 = player("Player 1",'X')
player2 = player("Player 2",'O')


let displayController = (function(){
    let turnDisplay = document.getElementById('turnDisplay')
    let cells = Array.from(document.getElementsByClassName('cell'))
    let restartButton = document.getElementById('restartButton')

    function displayLetter(){
        let x = this.getAttribute('data-x')
        let y = this.getAttribute('data-y')
        let player1Letter = player1.getLetter()
        let player2Letter = player2.getLetter()

        if(game.getCell(x,y) === "" && player1Letter === game.getTurn()
            && game.checkWinner(player2) !== true){
            player1.fillBoard(x,y)
            this.innerHTML = player1Letter
            game.changeTurn()
            turnDisplay.innerHTML = player2.getName() + " turn"
            game.checkWinner(player1)

        } else if(game.getCell(x,y) === "" && player2Letter === game.getTurn() 
                  && game.checkWinner(player1) !== true){
            player2.fillBoard(x,y)
            this.innerHTML = player2Letter
            game.changeTurn()
            turnDisplay.innerHTML = player1.getName() + " turn"
            game.checkWinner(player2)
        } 
    }    

    cells.forEach(cell=>{
        cell.addEventListener('click', displayLetter)
    })    



    restartButton.addEventListener('click',function(){
        game.restartGame()
        cells.forEach(cell=>{
            cell.innerHTML = ''
        })
        turnDisplay.innerHTML = player1.getName() + " turn"
        player1.resetBoard()
        player2.resetBoard()
    })


})()    




console.log(game.getGameboard())


