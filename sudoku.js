



const fdfd = [
[1,2,1,1,1,2,2,1,1]
[1,2,1,1,1,2,2,1,1]
[1,2,1,1,1,2,2,1,1]
[1,2,1,1,1,2,2,1,1]
[1,2,1,1,1,2,2,1,1]
[1,2,1,1,1,2,2,1,1]
[1,2,1,1,1,2,1,1,1]
[1,2,1,1,1,2,1,1,1]
[1,2,1,1,1,2,1,1,1]
];

function getNEWARR (fdfd) {
  const newOI = []
  for(let i = 0; i <= 8; i++) {
    if(i===0){
    newOI.push([fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0]])
  } else if (i === 1) {
    newOI.push([fdfd[i][1],fdfd[i][1],fdfd[i][1],fdfd[i][1],fdfd[i][1],fdfd[i][1],fdfd[i][1],fdfd[i][1],fdfd[i][0]])
  } else if (i === 2) {
    newOI.push([fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0]])
  } else if (i === 3) {
    newOI.push([fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0]])
  } else if (i === 4) {
    newOI.push([fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0]])
  } else if (i === 5) {
    newOI.push([fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0]])
  } else if (i === 6) {
    newOI.push([fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0]])
  } else if (i === 7) {
    newOI.push([fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0]])
  } else if (i === 8) {
    newOI.push([fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0],fdfd[i][0]])
  } 
  }
  return newOI
}

console.log(getNEWARR(fdfd))


// function isSolved(arr) {
//     const new = []

//     function () {
//     const new = []
//     for(let i = 0; i <= 8; i++) {
//       if(i===0){
//       new.push([arr[i][0],arr[i][0],arr[i][0],arr[i][0],arr[i][0],arr[i][0],arr[i][0],arr[i][0],arr[i][0]])
//     }
//     return new
//     }
//   }
  
  
  
  
  
  
//   const newArr = arr.map(el, i) => el.map(item, indx) => {
    
//   }
  
  
  
  
  
  
  
//   const newArr = arr.map((el) => el.map((item, i, ar) => {
//     if(item[i])

// }
// }