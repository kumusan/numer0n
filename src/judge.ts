/**
 * eat biteの判断を行う
 * @param com computerの配列
 * @param player playerの配列
 */
export function judge(com: number[], player: number[]): boolean {
  const eat = getEat(com, player)
  const bite = getBite(com, player, eat)

  console.log(`${eat}eat-${bite}bite`)

  // 3eatならtrueを返す
  if (eat === 3) return true
  return false
}

/**
 * eatを返す
 * @param com computerの配列
 * @param player playerの配列
 */
function getEat(com: number[], player: number[]): number {
  const eat: number = com.filter(x => player.indexOf(x) === com.indexOf(x)).length
  return eat
}

/**
 * biteを返す
 * @param com computerの配列
 * @param player playerの配列
 * @param eat eatの数
 */
function getBite(com: number[], player: number[], eat: number): number {
  const bite: number = com.filter(x => player.includes(x)).length
  return bite - eat
}
