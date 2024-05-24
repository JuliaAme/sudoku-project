
function isSolved(board) {

    function getNumberTruGorizont (board) {
     let arr = board.reduce((acc,crr) => {
        crr.map((el, i) => {
          if(crr.indexOf(el) === crr.lastIndexOf(el)) {
            acc.push([el])
          } else {
            el = null
            acc.push([el])
          }
        })
        return acc
      }, [])
    return arr
  }

  let newArr = getNumberTruGorizont(board)

  return newArr
}