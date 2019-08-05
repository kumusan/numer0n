import * as readlineSync from 'readline-sync'
//　正しく入力されているか
export function input() {
  for (;;) {
    const read: string = readlineSync.question('number ')
    if (read.length != 3) {
      console.log('3つの数字を入力してね！')
      continue
    }
    if (isNaN(Number(read)) === true) {
      console.log('数字を入力してね！')
      continue
    }
    if (duplicate(read) === null) {
      console.log('同じものは使っちゃだめだよ！')
      continue
    }
    return read
  }
}

//重複調べる
function duplicate(input: string) {
  const player_input_split: number[] = inputSplit(input)
  if (
    player_input_split.filter((x, y, self) => self.indexOf(x) === y).length !==
    3
  ) {
    return null
  }
}

// 入力した数字を配列にする
export function inputSplit(n: string): number[] {
  return n.split('').map(Number)
}
