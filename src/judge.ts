// eat biteの判断を行う
export function judge(com: number[], player: number[]) {
  const eat = getEat(com, player)
  const bite = getBite(com, player, eat)
  //   } else if (com.indexOf(player[i]) >= 0) {

  //      }
  console.log(`${eat}eat-${bite}bite`)

  // 3eatならtrueを返す
  if (eat === 3) return true
  return false
}

// eatを返す
function getEat(com: number[], player: number[]): number {
  let eat = 0
  for (let i = 0; i < 3; i++) {
    if (com[i] === player[i]) {
      eat++
    }
  }
  return eat
}

// biteを返す
function getBite(com: number[], player: number[], eat: number): number {
  const bite: number = com.filter(function(value) {
    return player.indexOf(value) >= 0
  }).length
  return bite - eat
}
