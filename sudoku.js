



const ARR = [
  [1,6,5,8,6,2,6,5,6],
  [1,6,5,8,6,2,6,5,6],
  [1,6,5,8,6,2,6,5,6],
  [1,6,5,8,6,2,6,5,6],
  [1,6,5,8,6,2,6,5,6],
  [1,6,5,8,6,2,6,5,6],
  [1,6,5,8,6,2,6,5,6],
  [1,6,5,8,6,2,6,5,6],
  [1,6,5,8,6,2,6,5,6],
];

function isSolved(arr) {
    const reverses = getReverseArr(arr)
  
  
  
  
  
  
  const newArr = arr.map(el, i) => el.map(item, indx) => {
    
  }
  
  
  
  
  
  
  
  const newArr = arr.map((el) => el.map((item, i, ar) => {
    if(item[i])

}
}


function getReverseArr (fdfd) {
  const newReverse = []
  for(let i = 0; i <= 8; i++) {
    if(i===0){
    newReverse.push([fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0]])
  } else if (i === 1) {
    newReverse.push([fdfd[i][1],fdfd[i][1],fdfd[i][1],fdfd[i][1],fdfd[i][1],fdfd[i][1],fdfd[i][1],fdfd[i][1],fdfd[i][1]])
  } else if (i === 2) {
    newReverse.push([fdfd[i][2],fdfd[i][2],fdfd[i][2],fdfd[i][2],fdfd[i][2],fdfd[i][2],fdfd[i][2],fdfd[i][2],fdfd[i][2]])
  } else if (i === 3) {
    newReverse.push([fdfd[i][3],fdfd[i][3],fdfd[i][3],fdfd[i][3],fdfd[i][3],fdfd[i][3],fdfd[i][3],fdfd[i][3],fdfd[i][3]])
  } else if (i === 4) {
    newReverse.push([fdfd[i][4],fdfd[i][4],fdfd[i][4],fdfd[i][4],fdfd[i][4],fdfd[i][4],fdfd[i][4],fdfd[i][4],fdfd[i][4]])
  } else if (i === 5) {
    newReverse.push([fdfd[i][5],fdfd[i][5],fdfd[i][5],fdfd[i][5],fdfd[i][5],fdfd[i][5],fdfd[i][5],fdfd[i][5],fdfd[i][5]])
  } else if (i === 6) {
    newReverse.push([fdfd[i][6],fdfd[i][6],fdfd[i][6],fdfd[i][6],fdfd[i][6],fdfd[i][6],fdfd[i][6],fdfd[i][6],fdfd[i][6]])
  } else if (i === 7) {
    newReverse.push([fdfd[i][7],fdfd[i][7],fdfd[i][7],fdfd[i][7],fdfd[i][7],fdfd[i][7],fdfd[i][7],fdfd[i][7],fdfd[i][7]])
  } else {
    newReverse.push([fdfd[i][8],fdfd[i][8],fdfd[i][8],fdfd[i][8],fdfd[i][8],fdfd[i][8],fdfd[i][8],fdfd[i][8],fdfd[i][8]])
  } 
  }
  return newReverse
}

function