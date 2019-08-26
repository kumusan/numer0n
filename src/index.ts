import {input, inputSplit} from './input'
import {random} from './computer'
import {judge} from './judge'

// com
const com = random()

// player
for (;;) {
  const player_input = input()
  const player = inputSplit(player_input)
  if (judge(com, player)) break
}
console.log('おめでとう！CLEAR!')
