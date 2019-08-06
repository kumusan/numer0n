// com
import {input, inputSplit} from './input'
import {random} from './computer'
import {judge} from './judge'
// これの使い方がわからない
//type treeDigitNumber = readonly [number, number, number]

// com
const com = random()
console.log(com)

while (true) {
  const player_input = input()
  const player = inputSplit(player_input)
  if (judge(com, player)) break
}
console.log('おめでとう！CLEAR!')
