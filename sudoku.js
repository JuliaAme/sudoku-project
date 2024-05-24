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


function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
