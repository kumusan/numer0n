// com
import * as readlineSync from 'readline-sync'
// これの使い方がわからない
//type treeDigitNumber = readonly [number, number, number]

// comの手
function random() {
  const com: number[] = []
  const array: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
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
  const input_array: number[] = []
  let i = 3
  while (i > 0) {
    input_array.push(n % 10)
    n = Math.floor(n / 10)
    i -= 1
  }
  return input_array.reverse()
}

//重複調べる
function duplicate(input: number) {
  const player_input_bunkatu: number[] = bunkatu(input)
  if (
    player_input_bunkatu.filter((x, y, self) => self.indexOf(x) === y)
      .length !== 3
  ) {
    return null
  }
}

// eat biteの判断を行う
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

//　正しく入力されているか
function input() {
  for (;;) {
    const read: string = readlineSync.question('number ')
    if (read.length != 3) continue
    if (isNaN(Number(read)) === true) continue
    if (duplicate(Number(read)) === null) continue
    return Number(read)
  }
}

// com
const com: number[] = random()
console.log(com)

while (true) {
  const player_input: number = input()
  const player: number[] = bunkatu(player_input)
  const handan: number = judge(com, player)
  if (handan === 1) {
    break
  }
}
