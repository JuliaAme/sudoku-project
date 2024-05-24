
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
const board = read(2);
console.log(board);



function solve(smth) {
 


  let board = read(smth)
  let randomNum = Math.floor(Math.random() * 10)

  for (let i = 0; i < board.length; i++) {
    for (let k = 0; k < board[i].length; k++) {
      if (board[i][k] === null) {
        board[i][k] === randomNum
      }
    }
  }
  return board
}

function isSolved(a) {

  let board
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard(any) {
  let board = solve(any)
  let boardCheck = isSolved(board)

  if boardCheck.includes(null) {
    return isSolved(boardCheck)
  } else {
    console.table(boardCheck)
  }
  

}


console.log(getNumberTruGorizont(board));