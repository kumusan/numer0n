/**
 * comの手
 */
export function random(): number[] {
  const com: number[] = []
  while (com.length < 3) {
    const n: number = Math.floor(Math.random() * 10)
    if (com.indexOf(n) === -1) {
      com.push(n)
    }
  }
  return com
}
