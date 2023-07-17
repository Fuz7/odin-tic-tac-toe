let game = (function(){
    let gameboard = [['','',''],
                     ['','',''],
                     ['','','']]


    let getGameboard = () => {
        return gameboard;
    }

    let checkWinner = (player) => {
        let playerLetter = player.getLetter()

        for (let i = 0;i < 3; i++){
            if (gameboard[i][0] === playerLetter
                && gameboard[i][1] === playerLetter
                && gameboard[i][2] === playerLetter ){

                console.log(player.getName() + " wins")

            } else if(gameboard[0][i] === playerLetter
                      && gameboard[1][i] === playerLetter
                      && gameboard[2][i] === playerLetter){

                        console.log(player.getName() + " wins")
                      }
        }

        if(gameboard[0][0] === playerLetter 
           && gameboard[1][1] === playerLetter
           && gameboard[2][2] === playerLetter){

            console.log(player.getName() + " wins")

           } else if (gameboard[0][2] === playerLetter  
                      && gameboard[1][1] === playerLetter
                      && gameboard[2][0] === playerLetter){

                        console.log(player.getName() + " wins")

                      }


    }

    return { getGameboard, checkWinner }

})()



let player = function(name,letter){
    this.name = name
    this.letter = letter
    this.board = game.getGameboard()

    const getLetter = () => {
        return letter
    }

    const getName = () => {
        return name
    }

    const fillBoard = (x,y) => { 
        board[x][y] = letter;
    }
    
    return { getLetter, getName, fillBoard }
}

console.log(game.getGameboard())

player1 = player("Player 1",'X')
player2 = player("Player 2",'O')

player1.fillBoard(0,0)
player2.fillBoard(1,0)
player1.fillBoard(1,1)
player1.fillBoard(2,2)

game.checkWinner(player1)
game.checkWinner(player2)