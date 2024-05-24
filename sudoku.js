

const fs = require('fs')


function read(num) {
  if (typeof num === 'number') {
    

    const str = fs.readFileSync('puzzles.txt', "utf-8")
  
    const arr = str.split('\n').splice(0, 15)
    let arr2 = arr.map((el) => el.split(','))
    const result = arr2[num - 1][0].match(/.{9}/g).map((el) => el.split(''))
    const board = result.map(row => row.map(el => {
      if (el === '-') {
        return el = null;
      }
      return Number(el)
    }))
    return board;
  } else {
    return num;
  }
} 




function solve(smth) {
 



  let board = read(smth)
  
  for (let i = 0; i < board.length; i++) {
    for (let k = 0; k < board[i].length; k++) {
      if (board[i][k] === null) {
        board[i][k] = Math.floor(Math.random() * 10)
      }
    }
  }
  if (isSolved(board).includes(null)) {
    return solve(board)
  } else {
    return board
  }

}

function prettyBoard(num) {
    const board = solve(num)
    console.table(board)
  }

  

}



