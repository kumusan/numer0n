// com
import * as readlineSync from 'readline-sync'
// これの使い方がわからない
//type treeDigitNumber = readonly [number, number, number]

// comの手
function random() {
  const com: number[] = []
  let array: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  while (com.length < 3) {
    let n: number = Math.floor(Math.random() * array.length)
    if (com.indexOf(n) === -1) {
      com.push(n)
    }
  }
  return com
}

// 入力した数字を配列にする
function bunkatu(n: number) {
  let input_array: number[] = []
  let i = 3
  while (i > 0) {
    input_array.push(n % 10)
    n = Math.floor(n / 10)
    i -= 1
  }
  return input_array.reverse()
}

function judge(com: number[], player: number[]) {
  let eat: number = 0
  let bite: number = 0
  for (let i: number = 0; i < 3; i++) {
    if (com[i] === player[i]) {
      eat += 1
    } else if (com.indexOf(player[i]) >= 0) {
      bite += 1
    }
  }
  console.log(`${eat}eat-${bite}bite`)

  if (eat === 3) {
    return 1
  }
  return 0
}

const com: number[] = random()
console.log(com)

while (true) {
  let read: number = Number(readlineSync.question('number '))
  let player: number[] = bunkatu(read)
  let handan: number = judge(com, player)
  if (handan === 1) {
    break
  }
}
