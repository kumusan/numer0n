import * as readlineSync from 'readline-sync'
// 正しく入力されているか
export function input(): string {
  for (;;) {
    const read: string = readlineSync.question('number ')
    if (read.length !== 3) {
      console.error('3つの数字を入力してね！')
      continue
    }
    if (Number.isNaN(Number(read))) {
      console.error('数字を入力してね！')
      continue
    }
    if (duplicate(read)) {
      console.error('同じものは使っちゃだめだよ！')
      continue
    }
    return read
  }
}

// 重複調べる
/**
 *
 * @param input 入力した値
 */
const duplicate = (input: string): boolean =>
  inputSplit(input).filter((x, y, self) => self.indexOf(x) === y).length !== 3

// 入力した数字を配列にする
/**
 *
 * @param n 三桁の数字
 */
export const inputSplit = (n: string): number[] => n.split('').map(Number)
