
/**
 * 假设现在有一堆硬币，其中有足够个1元硬币、足够个2元硬币和足够个5元硬币。现在需要用这些硬币凑出总价值为n元的钱，求最少需要多少枚硬币？
 * @param {Number} sum 
 * @returns 
 */

function minCoin(sum) {
  let res = 0;
  const max = 5,mid=2,min=1;
  res += Math.floor(sum / max);
  res += Math.floor((sum % max) / mid);
  res += Math.floor((sum % max) % mid / min);
  return res;
}

process.stdin.on('data', (chunk) => {
  const sum = Number(chunk.toString().trim());
  console.log(minCoin(sum));
})