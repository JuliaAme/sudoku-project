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